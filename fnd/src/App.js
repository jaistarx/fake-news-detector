import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">Fake News Report</header>
      <div className="flexing">
        <div>
          <img src="images/online_articles.svg" className="image1"></img>
        </div>
        <div className="heading">
          <h1>We bring to you what is right and wrong</h1>
          <p1>
            Tagline here as a short description for the user to easily
            understand abt the company
          </p1>
          <div>
            <button>Search News</button>
          </div>
        </div>
      </div>
      <div className="flexing"  style={{padding:"2.5rem"}}>
        <input placeholder="search" style={{width:"30%"}}></input>
        <p1>
          Relevant By Date<input type="checkbox"></input>
        </p1>
        <p1>
          Relevant By Spread<input type="checkbox"></input>
        </p1>
        <img src="images/fav.svg"></img>
        <button>Report</button>
      </div>
      <div className="news">
        <div className="flexing2">
          <div style={{width:"30%", paddingBottom:"1rem"}}>
            <a href="">
              <h1>We bring to you what is right and wrong</h1>
            </a>
            <span>August 13, 2020</span>
          </div>
          <div className="icons">
            <img src="images/source.svg"></img>
            <div>Source</div>
          </div>
          <div className="icons">
            <img src="images/reason.svg"></img>
            <div>Reason</div>
          </div>
          <div className="icons">
            <img src="images/vector.svg"></img>
            
          </div>
          <div className="icons">
            <img src="images/thumbsup.svg"></img>
            <div>1000</div>
          </div>
          <div className="icons">
            <img src="images/thumbsdown.svg"></img>
            <div>20</div>
          </div>
          <div className="icons">
            <img src="images/next.png"></img>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
