import './App.css';
import Home from './Home/Home';
import RheemDetailedPage from './RheemHeater/RheemDetailedPage/Rheem';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="baseContainer">
        <div className='mainContainer'>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/rheem" element={<RheemDetailedPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
