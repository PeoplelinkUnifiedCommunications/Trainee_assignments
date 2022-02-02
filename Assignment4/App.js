import React from 'react';

import ExpandingDashboard from './components/ExpandingDashboard'
import ExpandingCards from './components/ExpandingCards'
import HomeExpanding from './components/HomeExpanding';
import SearchDisplay from './components/SearchDisplay'
import Notifications from './components/Notifications'
import TestimonialDashboard from './components/TestimonialDashboard';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <>
      <Router>
        <div className='appjs-expanding'>
        <ExpandingDashboard  />
            <Routes>
                <Route exact path='/home' element={<HomeExpanding/>} />
                <Route exact path='/expandingCards' element={<ExpandingCards/>}/>
                <Route exact path='/github' element={<SearchDisplay />}/>
                <Route exact path='/notifications' element={<Notifications />}/>
                <Route exact path='/testimonials' element={<TestimonialDashboard />}/>
            </Routes> 
        </div>
      </Router>
    </>
  );
}

export default App;
