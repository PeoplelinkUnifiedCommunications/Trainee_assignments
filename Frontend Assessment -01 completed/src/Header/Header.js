import React, {useState}from "react";
import Bottom from "../Bottom/Bottom";
import Main from "../Main/Main";
import './Header.css'
import tag from './image/tag.svg'
function Header(props) {
    const[show,setShow]=useState(false)
    return (
        <>
            <div className="Header">
                <div className="header-content">
                    <img className="tag" src={tag} alt="tag" />
                    &nbsp;Your Project qualifies you for &nbsp;<span>incentives!</span>
                </div>
                <h5>Your Hybrid Electric Water Heater Recomonded Options</h5>
                <div className="main">
                    <Main  value={props.value}/>
                </div>
                <div className="button1">
                    <button type="button" onClick={() => setShow(!show)} >See More Details</button>
                </div>
                { show ?
                <Bottom /> : null}
            </div>
        </>
    )
}
export default Header