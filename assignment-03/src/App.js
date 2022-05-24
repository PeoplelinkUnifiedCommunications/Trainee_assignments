
import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import SeatView from "./components/SeatView";
import Ticket from './components/Ticket';



function App(){
  return(
    <div className="baseContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/ticket" element={<Ticket/>}/>
          <Route exact path="/seatView" element={<SeatView/>}/>
        </Routes>
      </Router>
    </div>
  )
  }

  export default App
