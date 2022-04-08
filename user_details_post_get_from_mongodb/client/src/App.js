import React, { useEffect, useState } from "react";
import Holder from "./components/holder/holder.js";
import Form from "./components/form/form.js";
import "./App.css";

function App() {
  console.log("hello")
  return (
    <div className="flexRow">
      <div className="leftSideContainer">
        <div className="leftSideWrapper">
          <div className="leftHeadingContainer">
            <h1>USER NAMES</h1>
          </div>
          <Holder />
        </div>
      </div>
      <div className="rightSideContainer flexCol">
        <Form />
      </div>
    </div>
  );
}

export default App;
