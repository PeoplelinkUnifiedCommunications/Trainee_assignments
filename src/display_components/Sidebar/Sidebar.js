import React from 'react';
import './Sidebar.css'
import {SidebarData} from "./SidebarData";

function Sidebar() {
return (
    <div className="side-bar">
        <ul className="sidebar-list">
                {<li className="list-contianer"> 
                <img src="https://m.media-amazon.com/images/I/41jLBhDISxL.jpg" alt="logo" className="image-content"/>
                <p className="profile-paragraph">My Profile</p>
                </li>}
                    {SidebarData.map((val, key) => {
                    return <li 
                    key={key} 
                    className="row"
                    id={window.location.pathname === val.link ? "active" : ""} 
                    onClick={() => {window.location.pathname = val.link
                    }} 
                    /* when window.location.pathname equal to link which given as val.link than id active properties are applied to list.*/
                    /* while clicking on list window.location.pathname will get value from Link which is given to val.link and naviagate to particular path assigned to it */
                    > 
                <div id="icon">{val.icon}</div> {/* icon container with values of icon and id icon containes properties of css in App.css*/}
                <div id="title">{val.title}</div> {/*  id title containes properties of css  in App.css*/}
                </li> 
        })}
        </ul>
    </div>
    )
}

export default Sidebar;
