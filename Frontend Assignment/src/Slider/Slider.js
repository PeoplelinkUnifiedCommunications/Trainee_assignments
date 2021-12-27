import React from "react";
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
                    <div className="location">
                        <h4>Location</h4>
                        <input type="text" placeholder="Enter Address" />
                        <select>
                            <option>Single-Family</option>
                        </select>
                    </div>
                    <h4>Size you water heater</h4>
                    <input type="text" placeholder="Enter Address" />
                    <div className="fuel">
                        <h4>What is your current water heater fuel type?</h4>
                        <select>
                            <option>Natural Gas</option>
                        </select>
                    </div>
                    <h4>Is this a water heater emergency</h4>
                    <input type="no" placeholder="No" />
                    <input type="yes" placeholder="Yes" />
                </div>
            </div>
           
        </div>
         
    )
}
export default Slider