import React from "react";
import Header from "./COMPONENTS/HEADER/Header";
import Sidenav from "./COMPONENTS/SIDENAV/Sidenav";
import MyDashboard from "./COMPONENTS/DASHBOARD/MY_DASHBOARD/MyDashboard";

function App() {
  return (
    <div className="base flexCol">
      <Header />
      <div className="main flexRow">
        <Sidenav />
        <MyDashboard />
      </div>
    </div>
  );
}

export default App;
