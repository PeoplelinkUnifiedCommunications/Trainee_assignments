import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home/index";
import Academics from "./components/Academics";
import Mathematics from "./components/Mathematics";
import English from "./components/English";
import Computers from "./components/Computers";
import Sociology from "./components/Sociology";
import Economy from "./components/Economy";
import Business from "./components/Business";
import Admission from "./components/Admission";
import Gallery from "./components/Gallery";
function App() {
  return (
    <Router>
      <div className="baseContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/academics" element={<Academics />}/>
          <Route path="/mathematics" element={<Mathematics />}/>
          <Route path="/economy" element={<Economy />}/>
          <Route path="english/" element={<English />}/>
          <Route path="/sociology" element={<Sociology />}/>
          <Route path="/computers" element={<Computers />}/>
          <Route path="/business" element={<Business />}/>
          <Route path="/admission" element={<Admission />}/>
          <Route path="/gallery" element={<Gallery />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
