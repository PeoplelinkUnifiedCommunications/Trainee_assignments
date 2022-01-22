import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import List from './components/List';
import Table from './components/Table';
import Nav from './components/Nav';
import Tabletext from './components/Tabletext';
import Images from './components/Images';
import Registrationform from './components/Registrationform';
import Final from './components/Finall';

// import Table from './Assignment02/home01';
// import List from './Assignment03/home02';
function App(){
  return (
    <Router>
    <div>
      <Nav/>
      <Routes>
      <Route path="/tables" element={<Table/>}/>
      <Route path="/tabletext" element={<Tabletext/>}/>
      <Route path="/list" element={<List/>}/>
      <Route path="/images" element={<Images/>}/>
      <Route path="/registrationform" element={<Registrationform/>}/>
      <Route path="/all" element={<Final/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App;
