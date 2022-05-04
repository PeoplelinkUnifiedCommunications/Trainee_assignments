import React from "react";
import Header from "./COMPONENTS/HEADER/Header";
import Sidenav from "./COMPONENTS/SIDENAV/Sidenav";
import InnerCntnr from "./COMPONENTS/INNER_CONTAINER/InnerCntnr";

function App() {
  return (
    <div className="baseBlockCntnr ">
      <div className="mainCntnr flexRow">
        <Header />
        <Sidenav />
        <InnerCntnr />
      </div>
    </div>
  );
}

export default App;
