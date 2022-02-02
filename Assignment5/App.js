import React from 'react';

import HeaterRecommendedPage from './components/HeaterRecommendedPage';
import HeaterDetailsPage from './components/HeaterDetailsPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path="/" element={<HeaterRecommendedPage/>}/>
        <Route exact path='/rheemperformance' element={<HeaterDetailsPage/>}/>
      </Routes>
      </div>
    </Router>

    
  );
}

export default App;
