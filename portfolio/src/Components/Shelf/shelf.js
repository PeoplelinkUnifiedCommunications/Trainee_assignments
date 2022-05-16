import React from "react";
import { Link } from "react-router-dom";
import ShelfFooter from "../ShelfFooter/shelffooter";
import "./shelf.css";
function Shelf() {
  return (
    <div className="workPage">
      <div className="flexRow redirected-menu1">
        <h1 className="marti">Marti</h1>
        <Link to={"/menuHome"}>
          <div className="menu-bar">
            <div className="l3"></div>
            <div className="l4"></div>
          </div>
        </Link>
      </div>

      <div className="shelfmain">
          <span className="span3">10 January 2019</span>
          <h2 className="span4">Web Performance: The Problems</h2>
          <span className="span5">Poorly written code can lead to a host of web application </span><br /><br></br>
          <span className="span6">issues including memory leaks and application deadlocks. </span><br /><br />
          <span className="span7">Old versions of software, or integrated legacy systems.</span>
          
          <hr />
      </div>

      <div className="shelfmain">
          <span className="span3">4 October 2020</span>
          <h2 className="span4">Web Performance: The big Picture</h2>
          <span className="span5">Just about every web application today relies on virtual </span><br /><br/>
          <span className="span6">machines for everything from scalability to management  </span><br /><br />
          <span className="span7">to system recovery.Sometimes the way these virtual</span><br /><br />
          <span className="span8">systems are organized.</span>
      </div>
      <br/>
      <br/><br/><br/><br/>
      <ShelfFooter />
    </div>
  );
}
export default Shelf;
