import React from "react";

import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="mainContainer">
            <div className="flexRow header">
                <img className="flexAuto logo" src="./images/marti.png" alt="olaolu" height="80px" width="100px"/>
                <Link to={"/menu"}>
                <div className="flexMinWidthCol menu">
                   <div className="l1"></div>
                   <div className="l2"></div>
                </div>
                </Link>
                
            </div>
      
    
            
        </div>
    )
    
}
export default Header