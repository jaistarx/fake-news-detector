import React, { useState } from "react";
import "./Cards.css";
import { BsNewspaper } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { FaQuestion, FaLinkedinIn } from "react-icons/fa";

export default function News(props) {
  const [check, setCheck] = useState(0);
  const [original, setOriginal] = useState(4);
  // const [checked,setChecked]=useState(true);
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  // console.log(props.fo);
  var c = props.fo.length;
  var b = [];
  for (var i = 0; i < c; i++) {
    b.push(i);
  }
  var sortedArr = props.fo;
  var s, p;
  s = props.foriginal;
  // sortedArr = sortWithIndeces(sortedArr);
  // var p = sortedArr.sortIndices;
  // console.log(p);
  // console.log(sortedArr.sortIndices);
  const clicking = () => {
    if (original === 4) {
      sortedArr = sortWithIndeces(sortedArr);
      p = sortedArr.sortIndices;
      // console.log(p);
      // console.log(sortedArr.sortIndices);
      setOriginal(3);
    }
    if (check === 0) {
      setCheck(1);
      // console.log(sortedArr);
      // console.log(props.fo);
      // console.log(originalArr);
      // console.log(sortedArr.sortIndices);
    } else {
      setCheck(0);
      s = props.foriginal;
      // console.log(sortedArr);
      // console.log(props.fo);
      // console.log(sortedArr.sortIndices);
    }
  };
  function sortWithIndeces(toSort) {
    for (var i = 0; i < toSort.length; i++) {
      toSort[i] = [toSort[i], i];
    }
    toSort.sort(function (left, right) {
      return left[0] > right[0] ? -1 : 1;
    });
    toSort.sortIndices = [];
    for (var j = 0; j < toSort.length; j++) {
      toSort.sortIndices.push(toSort[j][1]);
      toSort[j] = toSort[j][0];
    }
    return toSort;
  }
  const checking = () => {
    if (checked1 === true) {
      setChecked1(false);
      setChecked2(true);
    } else {
      setChecked1(true);
      setChecked2(false);
    }
  };
  var d;
  var k = [];
  return (
    <div>
      <div className="flexing fx" style={{ padding: "2.5rem" }}>
        {/* <input placeholder="Search" className="sb"></input> */}
        <p>
          Relevant By Date
          <input
            type="checkbox"
            onClick={clicking}
            onChange={checking}
            checked={checked1}
          ></input>
        </p>
        <p>
          Relevant By Accuracy
          <input
            type="checkbox"
            onClick={clicking}
            onChange={checking}
            checked={checked2}
          ></input>
        </p>

        <a href="https://pgportal.gov.in/"><button className="rebutton">Report</button></a>
      </div>
      {
        // console.log(sortedArr),
        ((k = check === 1 ? sortedArr : s),
        k.map(
          (n, index) => (
            (d = check === 0 ? b[index] : sortedArr.sortIndices[index]),
            (
              <div className="mainflexing" key={d}>
                <div className="news" key={d}>
                  <div className="flexing2">
                    <div className="subnews">
                      <a
                        href={props.fu[d]}
                        style={{ textDecoration: "none", color: "black" }}
                        alt=""
                      >
                        <h1>{String(props.ft[d]).slice(0, 100)}...</h1>
                      </a>
                      <span>{String(props.fd[d]).slice(0, 10)}</span>
                    </div>
                    <div className="subnews-media-descrip">
                      <p>{String(props.fdesc[d]).slice(0, 300)}</p>
                    </div>
                    <div className="mainflexing-media">
                      <div className="subicons-media">
                        <IconContext.Provider
                          value={{ color: "green", size: "25%" }}
                        >
                          <a href={props.fu[d]}>
                            <BsNewspaper className="ic" />
                          </a>
                        </IconContext.Provider>
                        <div className="txts">
                          <a
                            href={props.fu[d]}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <p>Source</p>
                          </a>
                        </div>
                      </div>
                      <div className="subicons-media">
                        <IconContext.Provider
                          value={{ color: "green", size: "25%" }}
                        >
                          <FaQuestion className="ic" />
                        </IconContext.Provider>
                        <div className="txts">
                          <p>{parseInt(100 * n)}%</p>
                        </div>
                      </div>
                      <div className="subicons-media">
                        <IconContext.Provider
                          value={{ color: "green", size: "25%" }}
                        >
                          <a
                            href={
                              "https://www.linkedin.com/sharing/share-offsite/?url=" +
                              props.fu[d]
                            }
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <FaLinkedinIn className="ic" />
                          </a>
                        </IconContext.Provider>
                        <div className="txts">
                          <a
                            href={
                              "https://www.linkedin.com/sharing/share-offsite/?url=" +
                              props.fu[d]
                            }
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <p>Share</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flexing3">
                    <script
                      async
                      src="https://static.addtoany.com/menu/page.js"
                    ></script>
                  </div>
                </div>
                <div className="mainicons">
                  <div className="subicons">
                    <IconContext.Provider
                      value={{ color: "green", size: "85%" }}
                    >
                      <a href={props.fu[d]}>
                        <BsNewspaper className="ic" />
                      </a>
                    </IconContext.Provider>
                    <div className="txts">
                      <a
                        href={props.fu[d]}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Source
                      </a>
                    </div>
                  </div>
                  <div className="subicons">
                    <IconContext.Provider
                      value={{ color: "green", size: "30%" }}
                    >
                      <FaQuestion className="ic" />
                    </IconContext.Provider>
                    <div className="txts">{parseInt(100 * n)}%</div>
                  </div>
                  <div className="subicons">
                    <IconContext.Provider
                      value={{ color: "green", size: "75%" }}
                    >
                      <a
                        href={
                          "https://www.linkedin.com/sharing/share-offsite/?url=" +
                          props.fu[d]
                        }
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <FaLinkedinIn className="ic" />
                      </a>
                    </IconContext.Provider>
                    <div className="txts">
                      <a
                        href={
                          "https://www.linkedin.com/sharing/share-offsite/?url=" +
                          props.fu[d]
                        }
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        Share
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        ))
      }
    </div>
  );
}
