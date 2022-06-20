import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './components/Home';

import Library from "./components/Library";
import FormPage from './components/FormPage';
import LibraryHome from "./components/LibraryHome";



function App(){
  return(
    <div className="baseContainer">
      <Router>
        <Routes>  
          <Route exact path="/" element={<Library/>}/>
          <Route exact path="/form" element={<FormPage/>}/>
          <Route exact path="/libraryhome" element={<LibraryHome/>}/>
        </Routes>
      </Router>
    </div>
  )
  }
  export default App;