import React from 'react'
import './index.css'

import Navbar from './College_website_assignment/Navbar/Navbar';
import Home from './College_website_assignment/Home/Home';
import Admission from './College_website_assignment/Admission/Admission';
import Gallery from './College_website_assignment/Gallery/Gallery';
import Academics from './College_website_assignment/Academics/Academics';
import Embedded_systems from './College_website_assignment/Academics/Embedded_systems';
import Vlsi from './College_website_assignment/Academics/Vlsi';
import Manufacturing_eng from './College_website_assignment/Academics/Manufacturing_eng';
import Vehicle_eng from './College_website_assignment/Academics/Vehicle_eng';
import Structural_eng from './College_website_assignment/Academics/Structural_eng';
import Geotechnical_eng from './College_website_assignment/Academics/Geotechnical_eng';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admission" element={<Admission/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/academics" element={<Academics/>}/>
          <Route path="/embed" element={<Embedded_systems/>}/>
          <Route path="/vlsi" element={<Vlsi/>}/>
          <Route path="/manufacturing_eng" element={<Manufacturing_eng/>}/>
          <Route path="/vehicle_eng" element={<Vehicle_eng/>}/> 
          <Route path="/structural_eng" element={<Structural_eng/>}/>
          <Route path="/geotechnical_eng" element={<Geotechnical_eng/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
