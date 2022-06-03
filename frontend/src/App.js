import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ReactForm from "./components/ReactForm"


function App(){
  return(
    <div className="baseContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<ReactForm/>}/>
        </Routes>
      </Router>
    </div>
  )
  }
  export default App;