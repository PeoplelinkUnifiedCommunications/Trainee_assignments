import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Components/Main/main";
import Menu from "./Components/Menu/menu";
import Menuhome from "./Components/Menuhome/menuhome";
import Shelf from "./Components/Shelf/shelf";
import Resume from "./Components/Resume/resume";
import Afterform from "./Components/Afterform/afterform";

function App() {
  return (
    <div className="baseContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/menu" element={<Menu />}/>
          <Route exact path="/menuhome" element={<Menuhome/>}/>
          <Route exact path="/shelf" element={<Shelf/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
          <Route exact path="/afterform" element={<Afterform/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}
export default App;
