import React from 'react';
import './TopContent.css'

import heater from './img1.png'
import energyStar from './energystar.png'
import info from './info.svg'


import { Link } from 'react-router-dom';

function TopContent() {
  return (
    <div className='detailsContainer'>

      <div className='flexRow topContent'>
        <div className='flexRow'>

          <img src={heater} alt="heater" className='heater' />

          <div>
            <h1 style={{ marginTop: "1rem", fontSize: "25px" }}>Rheem</h1>
            <h4 className='heaterModel'>50 Gal. Heat Pump Electric Water Heater</h4>
            <span className='modelId'>XE65T10HD50U1</span>

            <hr className='smallLine' />


            <ul className='ul'>
              <li className='RheemAdvantages'>240 - Volt and only a single 15 amp circuit breaker.</li>
              <li className='RheemAdvantages'>Best in class ENERGY STAR energy factor of 3.39 and DOE estimated energy usage is 1289 kWh/yr</li>
              <li className='RheemAdvantages'>Household size recommendation is 3-5 people, possibly 6</li>
              <li className='RheemAdvantages'>Simple LED interface with no compliacted modes to set to achieve outstanding savings, provide easy-to-read performance information</li>
            </ul>

            <div className='flexRow'>
              <sup className='exponential'>$</sup><span className='strikePrice'>1,799</span><sup className='exponential'>00</sup>
              <hr className='vLine' />
              <div className='flexCol'>
                <div>
                  <sup className='expPrice'>$</sup><span className='price'>799</span><sup className='expPrice'>00</sup>
                </div>
                <span className='subtext'>* With all incentives applied</span>
              </div>
            </div>

            <button className='installBtn marginTopAndRight'>Get Install Quote</button>
            <span className='moreDetails'><Link to="/" className='link'>Back to Results</Link></span>
          </div>
        </div>

        <div className='flexCol'>
          <img src={energyStar} alt="star" />
          <span className='textColor' style={{ padding: "5px", fontSize: "12px" }}>3.4 ef <img src={info} alt="info" /></span>
        </div>
      </div>


    </div>
  )
}

export default TopContent;
