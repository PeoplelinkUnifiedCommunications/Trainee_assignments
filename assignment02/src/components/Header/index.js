import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
      <div className="flexRow header">
        <div className="flexRow">
          <div className="flexRow logo">
            <img src="https://www.joonsquare.com/usermanage/image/business/aditya-college-gwalior-13665/aditya-college-gwalior-logo.png" alt="college" width="50px" height="50px"/>

            <span className="heading">Aditya Engineering College</span>

          </div>

          <div>
            <ul className="flexRow navBar">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/academics">ACADEMICS</Link></li>
              <li><Link to="/admission">ADMISSION</Link></li>
              <li><Link to="/gallery">GALLERY</Link></li>
            </ul>
        </div>
        </div>
      </div>
      
  
  );
}
export default Header;
