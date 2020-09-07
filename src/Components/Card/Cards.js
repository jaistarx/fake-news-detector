import React, { useState } from "react";
import "./Cards.css";
import { BsNewspaper } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { FaQuestion } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
export default function News(props) {

  return (
    <div>
      <div className="flexing" style={{ padding: "2.5rem" }}>
        <input placeholder="Search" className="sb"></input>
        <p>
          Relevant By Date<input type="checkbox" defaultChecked="checked"></input>
        </p>
        <p>
          Relevant By Spread<input type="checkbox"></input>
        </p>

        <button>Report</button>
      </div>
      {props.ft.map((n, index) => (
        <div className="news" key={index}>
          <div className="flexing2">
            <div className="subnews">
              <a
                href={props.fu[index]}
                style={{ textDecoration: "none", color: "black" }}
                alt=""
              >
                <h1>{n}</h1>
              </a>
              <span>{String(props.fd[index]).slice(0,10)}</span>
             
            </div>
            <div className="flexing3">
              <div className="icons">
                {/* <img src="images/source.svg" alt="" className="ic"></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <a href={props.fu[index]}>
                    <BsNewspaper className="ic" />
                  </a>
                </IconContext.Provider>
                <div className="txts">
                  <a href={props.fu[index]}>Source</a>
                </div>
              </div>
              <div className="icons">
                {/* <img src="images/reason.svg" alt="" className="ic"></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <FaQuestion className="ic" />
                </IconContext.Provider>
                <div className="txts">{parseInt(100 * props.fo[index])}%</div>
              </div>
              <div className="icons">
                {/* <img src="images/vector.svg" alt="" className="ic"></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <FaCommentAlt className="ic2" />
                </IconContext.Provider>
                {/* <div className="txts">{n.comment}</div> */}
              </div>
              <div className="icons">
                {/* <img
                src="images/thumbsup.svg"
                className="ic"
                alt=""
              ></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <AiTwotoneLike className="ic2" />
                </IconContext.Provider>

                {/* <div className="txts">{n.like}</div> */}
              </div>
              <div className="icons">
                {/* <img
                src="images/thumbsdown.svg"
                className="ic"
                alt=""
              ></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <AiTwotoneDislike className="ic2" />
                </IconContext.Provider>

                {/* <div className="txts">{n.dislike}</div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
