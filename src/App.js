import React, {  useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Headertext";
import Headings from "./Components/Top/Headings";
import News from "./Components/Card/Cards";
// import axios from 'axios';
function App() {
  const [ft,setFt]=useState([]);
  const [fd,setFd]=useState([]);
  const [fu,setFu]=useState([]);
  const [fo,setFo]=useState([]);
  const [fdesc,setFdesc]=useState([]);
  const [foriginal,setForiginal]=useState([]);
  useEffect(() => {
    const proxyurl="https://cors-anywhere.herokuapp.com/";
    const url="https://fakend.herokuapp.com/time";
    fetch(proxyurl+url,{headers:{'Access-Control-Allow-Origin':true}})
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
        setForiginal(Object.values(op));
        setFdesc(Object.values(ob.desc));
        console.log(ob.desc);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <Headings />
      <News ft={ft} fu={fu} fd={fd} fo={fo} fdesc={fdesc} foriginal={foriginal}/>
    </div>
  );
}

export default App;
