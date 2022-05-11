import React from "react";
import "./header.css";
function Header() {
    return (
        <div className="mainContainer">
            <div className="flexRow header">
                <img className="flexAuto logo" src="./images/olaolu.png" alt="olaolu" height="80px" width="120px"/>
                <div className="flexMinWidthCol menu">
                   <div className="l1"></div>
                   <div className="l2"></div>
                </div>
                
            </div>
            
        </div>
    )
    
}
export default Header