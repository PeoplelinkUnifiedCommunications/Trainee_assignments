import React from "react";
import { Link } from "react-router-dom";

function SideNav (){
    return(
        <div className="flexCol sideNav">
                  <span className="nav"><Link className="link" to  = "/">Home</Link></span>
                  <span className="nav"><Link className="link" to = "/testimonial">Testimonial</Link></span>
                  <span className="nav"><Link className="link" to = "/search">GitHub</Link></span>
                  <span className="nav"><Link className="link" to = "/notification">Notification</Link></span>
                  <span className="nav"><Link className="link" to = "/images">Images</Link></span>
                  
                    
        </div>
    );
}

export default SideNav;