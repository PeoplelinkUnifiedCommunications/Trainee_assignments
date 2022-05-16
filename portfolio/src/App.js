import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Components/Main/main";
import Menu from "./Components/Menu/menu";
import Work from "./Components/Work/work";
import Menuhome from "./Components/Menuhome/menuhome"
import Shelf from "./Components/Shelf/shelf";
import Resume from "./Components/Resume/resume";

function App() {
  return (
    <div className="baseContainer">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/menu" element={<Menu />}/>
          <Route exact path="/work" element={<Work />}/>
          <Route exact path="/menuhome" element={<Menuhome/>}/>
          <Route exact path="/shelf" element={<Shelf/>}/>
          <Route exact path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}
export default App;
