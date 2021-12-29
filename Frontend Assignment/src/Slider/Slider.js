import React from "react";
import Slide from "./slide";
import './Slider.css'
function Slider() {
    return (
        <div className="Slider">
            <div className="side-content">
                <a href="/">Home</a> {`>`} &nbsp;Hybrid Electric Water Heater
                <div className="header">
                    <h1>Tell Us About Your Project</h1>
                </div>
                <div className="rowFlex">
                <h4>Location</h4>
                    <div className="location">
                        <input type="text" placeholder="Enter Address" />
                        <select>
                            <option>Single-Family</option>
                            <option>Single-Family</option>
                            <option>Single-Family</option>
                            <option>Single-Family</option>
                        </select>
                        <div >
                        <img className="searchicon"src='./Images/search-bar.svg' alt="" />
                        </div>
                    </div>
                    <h4>Size you water heater</h4>
                    <Slide />
                    {/* <div className="slide">
                    <div className="range">
                        <input type="range" min="0" max="100"  />
                    </div>
                    <div className="percentage">100</div>
                    </div> */}
                    <div className="fuel">
                        <h4>What is your current water heater fuel type?</h4>
                        <select>
                            <option>Natural Gas</option>
                        </select>
                    </div>
                    <div className="yes">
                        <h4>Is this a water heater emergency</h4>
                        <button>No</button>
                        <button>Yes</button>
                    </div>
                    <div className="help">
                        <p>Got it! We submit it our partner yoour need for immediate help</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default Slider