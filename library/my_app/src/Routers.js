import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from "./login";
import Signup from "./Signup";
import Footer from "./common/components/footer";
import Home from "./home/home";
import Header from "./common/components/header";
import Dashboard from "./dashboard/index";

const Routers = () => {
  return (
    <>
      <div className="flexCol">
        <Header />
        <div className="flexMinWidthCol alignCntr jcCntr fullHeight brdrBtm">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </div>
      </div>
    </>
  );
};

export default Routers;
