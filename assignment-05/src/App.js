import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import "./App.css";
import ExportPdfComponent from "./components/ExportPdfComponent";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App(){
  return(
    <div className="baseContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/pdf" element={<ExportPdfComponent/>}/>
        </Routes>
      </Router>
    </div>
  )
  }
  export default App;

  



