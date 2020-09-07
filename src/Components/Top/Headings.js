import React from "react";
import "./Heading.css";
export default function Headings(){
  const alerting=()=>{
    alert("hello");
  }
    return(<div className="flexing">
        <div>
          <img src="images/online_articles.svg" className="image1" alt=""></img>
        </div>
        <div className="heading">
          <h1>We bring to you what is right and wrong</h1>
          <p>
            Tagline here as a short description for the user to easily
            under stand abt the company
          </p>
          {/* <div>
            <button className="bn" onClick={alerting}>Search News</button>
          </div> */}
        </div>
      </div>);}