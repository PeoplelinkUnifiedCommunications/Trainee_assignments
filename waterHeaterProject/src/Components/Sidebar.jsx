import React from "react";
import './Sidebar.css'
function Sidebar() {
    return (
        <>
        <div className='sidebarContainer'>
            <h2>Tell Us About Your Project</h2>
            <hr />
            <p className='location'>Location</p>
            <input type="text" placeholder='1465 Spyglass Ct, Encintis, CA 92024' className='inputTextField' />
            <select name="" id="" className='selection'>
                <option value="abc"> Something</option>
                <option value="abc">Something</option>
                <option value="abc">Something</option>
            </select>
            <span className='spanofimg'>
                <img src="ProjectImages/search-bar.svg" alt="" className='searchbarimg' />
            </span>
            <p className='sizeOFheater'>Size Your Water Heater <img src="ProjectImages/info-tooltip.svg" alt="tooltip" /></p>
            <div className='rangeContainer'>
                <input type="range" min="1" max="100"  className="slider" /> 
                <button className='G50Btn'>50 Gallons
                    <br /> (3-5 People)
                </button>
            </div>
            <p className='typeFuel'>What is your current water heater fuel type ?</p>
            <select name="" id="" className='gastypeselect'>
                <option value="natural gas">Natural Gas</option>
                <option value="natural gas">Natural Gas</option>
                <option value="natural gas">Natural Gas</option>
                <option value="natural gas">Natural Gas</option>
            </select>
            <p className='emergency'>
                Is this a water heater emergency? <img src="ProjectImages/info-tooltip.svg" alt="tooltip" />
            </p>
            <div className='twobtns'>

            <button className='nobtn'>No</button>
            <button className='yesbtn'>yes</button>
            </div>
        </div>
        </>
    )
}
export default Sidebar;