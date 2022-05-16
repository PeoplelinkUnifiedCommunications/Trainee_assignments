import React from "react";
import { Link } from "react-router-dom";
import WorkFooter from "../WorkFooter/workfooter";
import "./work.css";

function Work() {
  return (
    <div className="workpage">
      <div className="flexRow redirected-menu1">
        <h1 className="hema">Marti</h1>
        <Link to={"/menuHome"}>
        <div className="menu-bar">
          <div className="l3"></div>
          <div className="l4"></div>
        </div>
        </Link>
      </div>
      <div>
        <span className="span-ele">
          Selected projects I've worked on in the past.
        </span>
      </div>

      <div className="flexCol">
        <div className="card-header">
           <img className="card1" src="./images/card1.png" alt="git"/>
        </div>
        <div className="card-footer">
            <h3 className="span1">github</h3>
            <span className="span2">github.com</span>
        </div>
      </div>

      <div className="flexCol">
      <div className="card-header">
          <img className="card1" src="./images/card2.png" alt="qumulo"/>
      </div>
      <div className="card-footer">
        <h3 className="span1">Qumulo</h3>
        <span className="span2">app.qumulo.com</span>
      </div>
      </div>
      
      <div className="flexCol">
      <div className="card-header">
      <img className="card1" src="./images/card3.png" alt="jquery"/>
      </div>
      <div className="card-footer">
        <h3 className="span1">jquery</h3>
        <span className="span2">JQuery.com</span>
      </div>
      </div>

      <div className="flexCol">
      <div className="card-header">
      <img className="card1" src="./images/card4.png" alt="asana"/>
      </div>
      <div className="card-footer">
        <h3 className="span1">asana</h3>
        <span className="span2">app.asana.com</span>
      </div>
      </div>

      <div className="flexCol">
      <div className="card-header">
      <img className="card5" src="./images/card5.png" alt="naiglobal"/>
      </div>
      <div className="card-footer">
        <h3 className="span1">NAIGloabal</h3>
        <span className="span2">naiglobal.com</span>
      </div>
      </div>

      <div className="flexCol">
      <div className="card-header">
      <img className="card1" src="./images/card6.png" alt="NAI"/>
      </div>
      <div className="card-footer">
        <h3 className="span1">North American Institutions</h3>
        <span className="span2">NAI.com</span>
      </div>
      </div>

      <div className="workPage-footer">
        <WorkFooter />
       </div>
    </div>
  );
}
export default Work;
