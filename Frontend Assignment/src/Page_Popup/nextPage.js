import React from "react";
import './nextPage.css'
import Popup_Bottom from "./Popup_Bottom/Popuop_Bottom";
import Popuop_Right from "./Popup_right/Popup_RIght";
import Previous from "./Previous";
// import {Link}from 'react-router-dom'
function Popup() {
    return (
        <div className="popup">
            <Previous />
            <hr style={{margin: '0px 15px' }} />
            <Popuop_Right />
            <Popup_Bottom />
        </div>
    )
}
export default Popup