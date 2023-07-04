import ReactDOM from 'react-dom/client';
import * as helper from './helpers/helpers';
import React from 'react';
import Key from "./key/key.json";
import "./css/bootstrap.css";
import "./css/override.css";
import "./css/theme.css";
import Home from './pages/Home/Home';
import Draft from './pages/Draft/Draft';
import Theme from "./pages/Theme/Theme";
import DraftSeason from "./pages/DraftSeason/DraftSeason";
import HallOfFame from './pages/HallOfFame/HallOfFame';
import NflTeams from './pages/NflTeams/NflTeams';
import Map from './pages/Map/Map';
import NflTeamsSingle from './pages/NflTeamsSingle/NflTeamsSingle';
import NotFound from "./pages/NotFound/NotFound";
import {BrowserRouter,HashRouter, Routes, Route} from "react-router-dom";
import Stats from './pages/Stats/Stats';



helper.themeInit();
const root = ReactDOM.createRoot(document.getElementById('root'));
var theme = localStorage.getItem("theme");
if(theme !== "undecided"){

  root.render(
    <React.StrictMode>
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/draft" element={<Draft />}/>
  <Route path="/hall-of-fame" element={<HallOfFame />}/> 
  <Route path="/Stats" element={<Stats />} /> 
  <Route path="/nflTeams" element={<NflTeams />}/> 
  <Route path="/map" element={<Map />}/> 
  {Key.draft.map((r) => {return <Route path={"/draft" + "/" + r.year }  element={<DraftSeason  />}/>})}
  {Key.nflTeams.map((r) => {return <Route path={"/nflTeams" + "/" + r.teamUrl }  element={<NflTeamsSingle />}/>})}
  <Route path="/*" element={<NotFound />}/> 
  </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}
else{root.render(<Theme />);}
