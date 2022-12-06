import key from "./key/key.json";
import ReactDOM from 'react-dom/client';
import "./css/index.css";
import "./css/override.css";
import React from 'react';
import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import Theme from "./pages/Theme/Theme";
import DraftSeason from "./pages/DraftSeason/DraftSeason";
import HallOfFame from './pages/HallOfFame/HallOfFame';
import {HashRouter, Routes, Route} from "react-router-dom";
import CollegeFootball from "./pages/CollegeFootball/CollegeFootball";
import { useState } from 'react';

var getTheme = localStorage.getItem("theme");
console.log(getTheme);
if(getTheme == null){
  localStorage.setItem("theme", "undecided");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
var theme = localStorage.getItem("theme");


if(theme !== "undecided"){
  root.render(



    <React.StrictMode>
    <HashRouter>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/draft" element={<Draft />}/>
  <Route path="/hall-of-fame" element={<HallOfFame />}/> 
  <Route path="/college-football" element={<CollegeFootball />}/> 
  
  {
    key.draft.map((r) => {
      return <Route path={"/draft" + "/" + r.year }  element={<DraftSeason />}/>
    })
  }
  
  
  </Routes>
    </HashRouter>
    </React.StrictMode>
  );




}

else{
  root.render(
<Theme />


  );
  
}









  
  document.body.style.backgroundColor = key.background;







