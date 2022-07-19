import React, { useState } from "react";
import Sidenav from "../common/components/sidenav";
import "./Styles.css";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
 
  return (
    <>
      <div className="leftAsideLayout pdngSM">
        <Sidenav />
      </div>
      <div className="innerContentCol">
        <div className="flexCol contentInnerBlock fullHeight pdngSM">
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
