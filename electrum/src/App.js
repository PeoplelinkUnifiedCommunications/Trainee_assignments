import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Container/Home/home";
import SideNav from "./Container/SideNav/sidenav";
import Main from "./Container/Home/main";
import Screen from "./Container/Screen/screen";

function App() {
  return (
    <Router>

      <div className='baseContainer'>




        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/screen" element={<Screen />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
