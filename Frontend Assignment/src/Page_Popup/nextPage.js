import React from "react";
import './nextPage.css'
import Popup_Bottom from "./Popup_Bottom/Popuop_Bottom";
import Popuop_Right from "./Popup_Bottom/Popup_right/Popup_RIght";
// import {Link}from 'react-router-dom'
function Popup() {
    return (
        <div className="popup">
            <div className="popup_header">
                <div className="pop">
                    Heat Pump Electric Water Heater {'>'} Reheem Performance Platinum 50
                </div>
                <div className="buttons">
                   <button>{'<'} Previous</button>
                    <button>Next {'>'}</button>
                </div>
            </div>
            <hr style={{margin: '0px 15px' }} />
            <Popuop_Right />
            <Popup_Bottom />
        </div>
    )
}
export default Popup