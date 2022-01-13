import { Outlet, Link } from "react-router-dom";
import React from "react";

import "./index.css"
function Header(){
    return(
        <div className="header">
            <div className="logo">
                <div className="imageL">
                <img src= "https://icon-library.com/images/university-icon/university-icon-10.jpg" alt ="logo" width = "auto" height = "100%"/>
                </div>
                <div className="clgName">
                <span className="txtH">ORUGALLU COLLEGE</span>
                </div>
            </div>
            <div className="nav">
                <span ><Link to="/" className="linkH" >Home</Link></span>
                <span ><Link to="/admission" className="linkH" >Admission</Link></span>
                <span ><Link to="/gallery" className="linkH">Gallery</Link></span>   
                <span ><Link to="/academics" className="linkH">Academics</Link></span>               

            </div>

        </div>
    );
}

export default Header;