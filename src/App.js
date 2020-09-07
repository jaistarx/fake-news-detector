import React, {  useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Headertext";
import Headings from "./Components/Top/Headings";
import News from "./Components/Card/Cards";
function App() {
  const [ft,setFt]=useState([]);
  const [fd,setFd]=useState([]);
  const [fu,setFu]=useState([]);
  const [fo,setFo]=useState([]);
  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((dir1) => {
        var ob=dir1.finale[0];
        ob=JSON.parse(ob);
        var title=ob.title;
        var op=ob.OP;
        setFt(Object.values(title));
        setFu(Object.values(ob.url));
        setFd(Object.values(ob.date));
        setFo(Object.values(op));
        console.log(ob);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Headings />
      <News ft={ft} fu={fu} fd={fd} fo={fo}/>
    </div>
  );
}

export default App;
