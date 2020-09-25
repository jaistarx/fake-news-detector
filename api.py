import time
import os
from flask import Flask

app = Flask(__name__, static_folder='./build', static_url_path='/')


import numpy as np
import pandas as pd

data = pd.read_csv('data.csv')
data = data.sample(frac = 1)

data['Length'] = [len(headline) for headline in data['Headline']]

fliter = data['Label'] == 1
pos = data[fliter]


fliter = data['Label'] == 0
neg = data[fliter]


the_mean = min(len(pos), len(neg))


p_data = pos.sample(n = the_mean)

n_data = neg.sample(n = the_mean)

test_split = 0.2
train_split = 1 - test_split

p_train_data = p_data.sample(frac = train_split)
p_test_data = p_data.drop(p_train_data.index)

n_train_data = n_data.sample(frac = train_split)
n_test_data = n_data.drop(n_train_data.index)


train_data = pd.concat([p_train_data, n_train_data])
test_data = pd.concat([p_test_data, n_test_data])


train_data = train_data.sample(frac = 1)
test_data = test_data.sample(frac = 1)

x_train_data = train_data['Headline'].fillna('')
y_train_data = train_data['Label']
x_test_data = test_data['Headline'].fillna('')
y_test_data = test_data['Label']

from tensorflow.keras.preprocessing import sequence
from tensorflow.keras.preprocessing.text import Tokenizer

detail = data['Length'].describe()

token_num = 4000 
data_length = int(detail['mean'])  

output_length = 32 

dropout = 0.2
lstm_dim = 256

token = Tokenizer(num_words = token_num, filters = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\t\n')
token.fit_on_texts(x_train_data)

x_train_seq = token.texts_to_sequences(x_train_data)
x_test_seq = token.texts_to_sequences(x_test_data)

x_train = sequence.pad_sequences(x_train_seq, maxlen = data_length)
x_test = sequence.pad_sequences(x_test_seq, maxlen = data_length)

from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Activation
from tensorflow.keras.layers import Embedding
from tensorflow.keras.layers import LSTM
from tensorflow.keras.layers import Bidirectional, TimeDistributed
from tensorflow.keras.callbacks import EarlyStopping

model = Sequential()
model.add(Embedding(output_dim = output_length, 
                    input_dim = token_num, 
                    input_length = data_length))
model.add(Dropout(dropout))


model.add(Bidirectional(LSTM(lstm_dim), merge_mode = 'sum'))
model.add(Dropout(dropout))

model.add(Dense(units = 256, activation = 'relu'))
model.add(Dropout(dropout))

model.add(Dense(units = 1, activation = 'sigmoid'))

model.compile(loss = 'binary_crossentropy', optimizer = 'adam', metrics = ['accuracy'])

es = EarlyStopping(monitor = 'val_loss', patience = 5, verbose = 2)

train_history = model.fit(x = x_train,
                         y = y_train_data,
                         validation_split = 0.2,
                         epochs = 8,
                         batch_size = 100,
                         verbose = 1,
                         callbacks = [es])

import json
import requests
url = 'https://newsapi.org/v2/top-headlines?language=en&apiKey=f1fc1540925b40bd9bdc1aead5e83072&pageSize=100'
response = requests.get(url)
news = json.loads(response.text)
news=json.dumps(news["articles"], indent=4)

from io import StringIO

df = pd.read_json(StringIO(news))
df.to_csv("output.csv")
datat = pd.read_csv('output.csv')
datat = datat.sample(frac = 1)

tt = datat['title'].fillna('')

finale = datat['title']
finale=pd.DataFrame(finale)
finale.insert(1,"url",datat['url'],True)
finale.insert(1,"date",datat['publishedAt'],True)
finale.insert(1,"desc",datat['description'],True)

token.fit_on_texts(tt)

xtt = token.texts_to_sequences(tt)

xf = sequence.pad_sequences(xtt, maxlen = data_length)

model.predict(xf)

p=model.predict(xf)
m = p.reshape(-1)
mn = pd.DataFrame(m)
finale=pd.DataFrame(finale)
finale.insert(1,"OP",mn,True)

finale.drop(finale[finale.OP<0.87].index, inplace=True)

finale.to_csv('finale.csv')

# finale.to_json(path_or_buf='finale.json',orient='records')
finale=finale.to_json()

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/time')
def get_current_time():
    return {"finale":[finale]}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))