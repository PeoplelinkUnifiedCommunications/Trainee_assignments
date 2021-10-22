import React from 'react'
import "./sideNavstyles.css"

function sideNav() {
    return (
        <div className="sideNav">
           <i className="fa fa-tv fa-2x"></i>
           <i className="fa fa-shopping-cart fa-2x"></i>
           <i className="fa fa-building fa-2x"></i>
           <i className="fa fa-cog fa-2x"></i>
           <div className="btm-icon">
           <i class="fa fa-sign-out"></i>
           </div>
        </div>
        
    )
}
export default sideNav
