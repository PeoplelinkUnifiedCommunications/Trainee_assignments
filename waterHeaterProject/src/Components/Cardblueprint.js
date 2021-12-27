import React from "react";
import "./Cardblueprint.css";
import Btn from "./Btn";
import Viewmore from "./Viewmore";


function Cardblueprint(props) {
  console.log(props);

  return (
    <div className="cardsContainer">
      <div className="cardTopPart">
        <p className="leftsideTop">
          <h3>{props.manufacturer_name}</h3>
          <h4>{props.name}</h4>
        </p>
        <p className="rightsideTop">
          <h5 style={{ padding: "0px 6px" }}>{props.ef}</h5>
          <img
            style={{ fontSize: "1rem", padding: "0px 8px " }}
            src={props.ilogo}
            alt="tooltipimg"
          />
          <img
            style={{ width: "2.5rem", borderRadius: "10px" }}
            src={props.logo}
            alt="Energystarlogo"
          />
        </p>
      </div>
      {/* Top Part completed Here */}
      {/* Middle Part Start From Here */}
      <div className="cardMiddlePart">
        <img className="card_img" src={props.main_picture} alt="img1" />
        <ul className="middlePartText">
          <li className="list list1">{props.list1}</li>
          <li className="list list2">{props.list2}</li>
          <li className="list list3">{props.list3}</li>
          <li className="list list4">{props.list4}</li>
        </ul>
      </div>
      <hr style={{ margin: "1px 8px" }} />
      <div className="cardDownPart">
        <h3>
          Best Price <span>{props.base_price}</span>{" "}
        </h3>
        <span>(Installation not included)</span>
        <h5 style={{ padding: "6px" }}>
          Available Incentives
          <img src="ProjectImages/info-tooltip.svg" alt="tooltip" />
          <span>{props.Available_Incentives} </span>
        </h5>
        <h3>
          Equipment Cost{" "}
          <img src="ProjectImages/info-tooltip.svg" alt="tooltip" />{" "}
          <span>{props.Equipment_cost}</span>
        </h3>
        <p
          style={{
            padding: "5px",
            border: "2px solid green",
            width: "100%",
            margin: "5px 0",
            borderRadius: "5px",
            textAlign: "center",
            fontWeight: "bolder",
          }}
        >
          Your Est Annual Savings is <span>{props.your_annual_saving_is}</span>
        </p>
        <Btn />
        <Viewmore />
      </div>
    </div>
  );
}

export default Cardblueprint;
