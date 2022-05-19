import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Work from './Components/Work';
import Shelf from './Components/Shelf';
import Telegram from './Components/Telegram';
import WorkMenu from './Components/WorkMenu';
import ShelfMenu from "./Components/ShelfMenu";

function App(){
  return(
    <div className="baseContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/menu" element={<Menu/>}/>
          <Route exact path="/work" element={<Work/>}/>
          <Route exact path="/shelf" element={<Shelf/>}/>
          <Route exact path="/telegram" element={<Telegram/>}/>
          <Route exact path="/workmenu" element={<WorkMenu/>}/>
          <Route exact path="//shelfmenu" element={<ShelfMenu/>}/>
        </Routes>
      </Router>
    </div>
  )
  }
  export default App;