import React from "react";
import "./headerstyles.css";

function header() {
  return (
    <div className="header">
      <p>
        <i class="fa fa-cloud-download fa-2x" style={{ color: "white" }}></i>
        <span className="plus-icon">+</span>
      </p>
      <p>cloud inventory</p>
    </div>
  );
}

export default header;
