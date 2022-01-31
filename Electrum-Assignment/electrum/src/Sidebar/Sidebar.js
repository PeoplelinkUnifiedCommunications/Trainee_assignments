import React, { useState } from 'react';
import './Sidebar.css'

import info from './info.svg'

import search from './search.svg'


function Sidebar() {

    const [noBtn, setNoBtn] = useState(true)
    const [yesBtn, setYesBtn] = useState(false)

    const noBtnActivate = () => {
        setNoBtn(true)
        setYesBtn(false)
    }

    const yesBtnActivate = () => {
        setNoBtn(false)
        setYesBtn(true)
    }

    return (
        <div className='sidebar'>
            <span className='sidebarHeading'>Tell Us About Your Project</span>

            <hr className='line3' />

            <label className='sidebarText'>Location</label><br />
            <input type="text" className='address'></input>
            <select className='select'>
                <option>Single-Family</option>
            </select>

            <img src={search} alt="search" className='searchImg' /><br />

            <span className='sidebarText'>Size your water heater</span>
            <img src={info} alt="info" /><br />

            <div className='sliderContainer flexRow'>
                <input className='slider' type="range" min="1" max="100" />
            </div>

            <label className='sidebarText'>What is your current water heater fuel type ?</label><br/>
            <select className='select fuelType'>
                <option>Natural Gas</option>
            </select>

            <br/>

            <span className='sidebarText'>Is this a water heater emergency ?</span>
            <img src={info} alt="info"/>
            <br/>
            <button className={noBtn ? "btnActive" : "btnInactive"} onClick={noBtnActivate}>No</button>
            <button className={yesBtn ? "btnActive" : "btnInactive"} onClick={yesBtnActivate}>Yes</button>

            <hr className='line3'/>
        </div>
    )
}

export default Sidebar;
