import os
from flask import Flask
from tensorflow.keras.models import load_model
import numpy as np
import pandas as pd
app = Flask(__name__, static_folder='./build', static_url_path='/')

model=load_model(os.path.join(os.path.abspath(os.path.dirname(__file__)),"fnd.h5"))

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
from tensorflow.keras.preprocessing.text import Tokenizer
token_num = 4000
token = Tokenizer(num_words = token_num, filters = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~\t\n')
token.fit_on_texts(tt)
from tensorflow.keras.preprocessing import sequence
xtt = token.texts_to_sequences(tt)

xf = sequence.pad_sequences(xtt, maxlen = 50)

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