import React from "react";
import "./index.css";

function Getusers({ info }) {
  return <li className="nameInfo">{info.name}</li>;
}

export default Getusers;
