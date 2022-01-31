import React, { useState } from 'react'
import './MainContent.css'
import HeaterCard from '../HeaterCards/HeaterCard'

import logo from './incentiveLogo.svg'
import info from './info.svg'
import hpwh from './hpwh.png'

import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'

const HeatersData = [
  { id: "61f2c64c4fed5272dd4279ff",img: img1, path: "/rheem", brand: "Rheem", name: " Performance Platinum 50", rating: " 3.4 ef", base_price: "$1,799", available_incentives: "-$1,300", equipement_cost: "$499"},
  { id: "61f2c64c4fed5272dd427a00",img: img2,  path: "", brand: "A.O.Smith", name: "Elite Master 56", rating: " 3.4 ef", base_price: "$1,899", available_incentives: "-$1,300", equipement_cost: "$499"},
  { id: "61f2c64c4fed5272dd427a01",img: img3,  path: "", brand: "Stiebel Eltron", name: "Stiebel Eltron", rating: " 3.4 ef", base_price: "$2,899", available_incentives: "-$1,300", equipement_cost: "$499" }
]


function MainContent() {

  const [process, setProcess] = useState(true)
  const [component, setComponent] = useState(false)

  const processSection = () => {
    setProcess(true)
    setComponent(false)
  }

  const componentSection = () => {
    setProcess(false)
    setComponent(true)
  }
  

  return (
    <div className='bgContainer'>
      <div className='projectHeading flexRow'>
        <img src={logo} alt="logo" />
        <span className='header'>Your project qualifies you for <b>incentives!</b></span>
      </div>
      <div className='bodyContainer'>
        <span className='heading'>Your Hybrid Electric Water Recommended Options </span>

        <hr className='line1' />

        <div className='flexRow heaterCardContainer'>
          {HeatersData.map(eachData => (
            <HeaterCard key={eachData.id} details={eachData}/>
          ))}
        </div>

        <button className='SeeMoreBtn'>See More Options</button>

        <div>
          <span className='textColor'>The Heat Pump Water Heater Advantage</span>
          <div className='flexRow advContainer'>
            <div>
              <span className="advTitle">Clean & Healthy Air</span>
              <img src={info} alt="info" />
              <p className='advDescription'>No in-home air pollution or greenhouse gas emissions</p>
            </div>

            <div>
              <span className="advTitle">Reduced Carbon Footprint</span>
              <img src={info} alt="info" />
              <p className='advDescription'>carbon Offset equivalent for your home equals <b className='coloredText'>23 trees planted</b></p>
            </div>

            <div>
              <span className="advTitle">Lower Energy Bills</span>
              <img src={info} alt="info" />
              <p className='advDescription'>Up to 75% reduction in energy use</p>
            </div>

          </div>

          <hr className='line1' />

          <span className='textColor'>How Hybrid Electric Water Heaters Work</span>

          <div className='workingCard'>
            <div>
              <button className={process ? "workingSectionActive" : "workingSectionInctive"} onClick={processSection}>Process</button>
              <button className={component ? "workingSectionActive" : "workingSectionInctive"} onClick={componentSection}>Components</button>
            </div>

            <hr className='line2' />

            <p className='workingDescription'>A hybrid electric water header uses a compressor to take heat from the surrounding air and transfers it inside the water tank. It works similarly to a refrigerator, but in reverse. The "hybrid" component means that the water heater can heat water either via the heat pump, or, when the surrounding air is too cold, it can heat the same as a conventional electric water heater. This means your water heating is as efficient as possible, and also ensures you have hot water in all environments.</p>
            <div className='flexRow hpwhContainer'>
              <img src={hpwh} alt="hpwh" className='hpwh' />
            </div>
          </div>

          <p className='bottomDescription'>All values displayed on this page are based on standard industry assumptions. Savings numbers are calculated based on present day market circumstances, but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance payments are displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher.</p>
        
        </div>
      </div>
    </div>
  )
}

export default MainContent;

