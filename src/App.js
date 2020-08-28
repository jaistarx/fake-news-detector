import React from "react";
import "./App.css";
import Header from "./Components/Header/Headertext";
import Headings from "./Components/Top/Headings";
import News from "./Components/Card/Cards";
function App() {
  
  return (
    <div className="App">
      <Header/>
      <Headings/>
      <News/>
    </div>
  );
}

export default App;
