import React from 'react';
import '../Stylesheets/sideNav.css'

function sideNav() {
    return (
        <div className="rowColFlex">
            <h2 className="liststyle">tell us about your project</h2>
            <hr />
            <div className="locDetl pdngVMD">
                <span >Location</span><br />
                <div className="rowFlex  box1">
                    <input type="text"  className="text3" placeholder="1456 spyglass Ct,Enclinias,CAn92024 " />
                    <div className="rowFlex text2">
                        <select >
                            <option >single-family</option>
                        </select>
                        <span> <img src="search-bar.png" alt="" className=" seachStl" /></span></div>

                </div>
                <br /><br />
                <span >size your water heater<img src="info-tooltip.png" alt="" /></span>
                <div className="rowFlex border box1 pdngHXS ">
                    <input type="range" className="range" /><hr />
                    <span className="rangedetails "> 50 gallons(3-5 people)</span>
                </div>
                <br /><br />
                <span>what is your current water heater fuel type?</span>
                <select className="box2" >
                    <option >natural gas</option>
                </select>
                <br /><br />
                <span>is this water heater emergency?<img src="info-tooltip.png" alt="" /></span>
                <div className="box3 rowFlex">
                    <span className="yes">no</span><hr />
                    <span className="no" >yes</span>
                </div>
                <br />
                <hr />
            </div>
        </div>
    )
}

export default sideNav;
