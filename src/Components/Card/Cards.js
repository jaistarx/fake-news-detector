import React from "react";
import "./Cards.css";
import { BsNewspaper } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { FaQuestion } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { AiTwotoneDislike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
export default function News() {
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
    <div>
      <div className="flexing" style={{ padding: "2.5rem" }}>
        <input placeholder="Search" className="sb"></input>
        <p1>
          Relevant By Date<input type="checkbox"></input>
        </p1>
        <p1>
          Relevant By Spread<input type="checkbox"></input>
        </p1>
        
        <button>Report</button>
      </div>
      {r.map((n) => (
        <div className="news">
          <div className="flexing2">
            <div className="subnews">
              <a
                href="/"
                style={{ textDecoration: "none", color: "black" }}
                alt=""
              >
                <h1>{n.content}</h1>
              </a>
              <span>{n.date}</span>
            </div>
            <div className="flexing3">
              <div className="icons">
                {/* <img src="images/source.svg" alt="" className="ic"></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <BsNewspaper className="ic" />
                </IconContext.Provider>
                <div className="txts">Source</div>
              </div>
              <div className="icons">
                {/* <img src="images/reason.svg" alt="" className="ic"></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <FaQuestion className="ic" />
                </IconContext.Provider>
                <div className="txts">Reason</div>
              </div>
              <div className="icons">
                {/* <img src="images/vector.svg" alt="" className="ic"></img> */}
                <IconContext.Provider value={{ color: "green", size: "60%" }}>
                  <FaCommentAlt className="ic2" />
                </IconContext.Provider>
                <div className="txts">{n.comment}</div>
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

                <div className="txts">{n.like}</div>
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

                <div className="txts">{n.dislike}</div>
              </div>
              
            </div>
          </div>
          <div>
              <button type="button" className="bns txts"> Know More</button>
              </div>
        </div>
      ))}
    </div>
  );
}
