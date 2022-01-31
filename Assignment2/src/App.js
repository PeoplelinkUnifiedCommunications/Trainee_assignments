import React from 'react'

import CollegePage from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Academics from './component/Academics';
import BscProgramme from './component/BscProgramme';
import BcomProgramme from './component/BcomProgramme';
import MbaProgramme from './component/MbaProgramme';
import McaProgramme from './component/McaProgramme';
import Admission from './component/Admission';
import Gallery from './component/Gallery'
import ReadMore from './component/ReadMore';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';
 
function App() {
  return (
          <Router>
            <div className='backrgoundImage'>
              <CollegePage/>
              <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/about' element={<About/>}/>
              <Route exact path='/academics' element={<Academics/>}/>
              <Route exact path='/academics/ug/B.Sc.' element={<BscProgramme />}/>
              <Route exact path='/academics/ug/B.Com' element={<BcomProgramme/>}/>
              <Route exact path='/academics/pg/MBA' element={<MbaProgramme/>}/>
              <Route exact path='/academics/pg/MCA' element={<McaProgramme />}/>
              <Route exact path='/admission' element={<Admission/>}/>
              <Route exact path='/gallery' element={<Gallery/>}/>
              <Route exact path='/readmore' element={<ReadMore/>}/>
              </Routes>
              <Footer/>
            </div>
            
          </Router>
  );
}

export default App;
