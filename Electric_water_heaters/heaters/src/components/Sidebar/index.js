import React, { useState } from 'react';
import SearchIcon from './search-bar.svg';
import info from "/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/info-tooltip.svg"

function Sidebar() {

    const[boolenValue, setBoolenValue] = useState(true)
    const[componentsBoolen, setComponentBoolen] = useState(false)

    const onClickTriggerd = () => {
        setBoolenValue(true)
        setComponentBoolen(false)
    }

    const onComponentTriggred = () => {
        setComponentBoolen(true)
        setBoolenValue(false)
    }


return <div className='sidebarContainer'>
    <h1 className="mainHeading">Tell Us About Your Project</h1>
    <hr/>
    <div className="fieldContainer">
    <label htmlFor="location" className="flexPara" >Location</label>
    <div className="flexRowO">
        <input className="inputValue"type="text" placeholder="Enter Your Address"/>
    <select id = "location">
        <option value="Single-Family">Single-Family</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    <div className='searchIconContainer'>
    <img src={SearchIcon} alt="searchIcon" className="searchImage"/>
    </div>
    </div>
    </div>
    <div className="flexCol rangeContainer">
        <label className="headingToChoose paddingTop" htmlFor="statusbar">Size your water heater <img src={info} alt="info Tag"/></label>
        <div className="sliderInput">
        <input type="range" id="custom-slider" min="0" max="100" className="slider"/>
        <span></span>
        </div>

{/* <div className='rangeContainer'>
                <input type="range" min="1" max="100"  className="slider" /> 
                <button className='G50Btn'>50 Gallons
                    <br /> (3-5 People)
                </button>
            </div> */}
    </div>
    <div className="flexCol">
        <label className="headingToChoose paddingTop" id="fueltype">What is your current water heater fuel type</label>
        <div className="fuelType">
        <select id = "fueltype" className="fuelType ">
        <option value="Single-Family">Single-Family</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    </div>
    </div>

    <div className='marginBottom'>
        <h1 className="headingToChoose paddingTop">Is this a water heater emergency ? <img src={info} alt="info Tag"/></h1>
        <div >
        <button className={boolenValue ? "noButton": "noEffectButton"} onClick={onClickTriggerd}>No</button>
                    <button className={componentsBoolen ? "noButton": "noEffectButton"} onClick={onComponentTriggred}>Yes</button>
        </div>
    </div>
    <hr/>

</div>;
}

export default Sidebar;
