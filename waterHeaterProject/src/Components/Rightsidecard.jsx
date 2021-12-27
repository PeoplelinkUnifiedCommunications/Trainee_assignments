import React from "react";
import "./Rightsidecard.css";
// import Cardblueprint from "./Cardblueprint";
import ProjectDB from "./ProjectDB";

function Rightsidecard() {
  return (
    <div className="RightsidecardContainer">
      <div className="headerdialouge">
        <p>
          <img
            className="headerdialougeimage"
            src="ProjectImages/Searching applicable rebates and incentives.svg"
            alt="svg_image"
          />
          Your Project Qualifies You For <span> incentives!</span>
        </p>
      </div>
      <div className="main_container">
        <p className="cards_heading_line">
          Your Hybrid Electric Water Heater Recommended Options
        </p>
        <hr />
        <div
          className="allcardsdisplay"
          style={{
            paddingTop: "10px",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          <ProjectDB />

          {/* <Cardblueprint /> */}
          {/* <Cardblueprint /> */}
          {/* <Cardblueprint /> */}
          {/* <Cardblueprint /> */}
        </div>
      </div>
    </div>
  );
}

export default Rightsidecard;
