import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';


function App(){
  return(
    <div className="baseContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  )
  }
  export default App;