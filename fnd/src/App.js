import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const r = [
    {
      content: "We bring to you what is right and wrong",
      date: "August 13, 2020",
      comment: 2,
      like: 3,
      dislike: 4,
    },
    {
      content: "Showing results for sfdgsdfg Showing results for sfdgsdfg",
      date: "june 13, 2050",
      comment: 7,
      like: 8,
      dislike: 9,
    },
    {
      content:
        "Details of WDSF athlete sfdgsdfg sdfgsdfg | World DanceSport ...",
      date: "sept 150, 3020",
      comment: 20,
      like: 30,
      dislike: 40,
    },
  ];
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
      <div className="flexing" style={{ padding: "2.5rem" }}>
        <input placeholder="search" style={{ width: "30%" }}></input>
        <p1>
          Relevant By Date<input type="checkbox"></input>
        </p1>
        <p1>
          Relevant By Spread<input type="checkbox"></input>
        </p1>
        <img src="images/fav.svg"></img>
        <button>Report</button>
      </div>
      {r.map((n) => (
        <div className="news">
          <div className="flexing2">
            <div className="subnews">
              <a href="" style={{textDecoration:"none", color:"black"}}>
                <h1>{n.content}</h1>
              </a>
              <span>{n.date}</span>
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
              <div>{n.comment}</div>
            </div>
            <div className="icons">
              <img src="images/thumbsup.svg" style={{ width: "90%" }}></img>
              <div>{n.like}</div>
            </div>
            <div className="icons">
              <img src="images/thumbsdown.svg" style={{ width: "90%" }}></img>
              <div>{n.dislike}</div>
            </div>
            <div className="icons">
              <img src="images/next.png"></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
