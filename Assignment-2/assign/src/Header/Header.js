import React from 'react'
// import Card from '../Cards/Card'
import './Header.css'
import tag from './Images/image.svg'
import Data from '../AllData/Data'

const Header = () => {
    return (
        <div className='Header'>
            <div className='header_content'>
            <img  src = {tag} alt="My Happy SVG"/><label>Your Project Qualifies You For &nbsp;<span style={{color:'white', fontWeight:'bold'}}>Incentives !</span></label>
            </div>
            <h5 style={{padding:'10px', color:'blue'}}>Your Hybrid Electric Water Heater Recomonded Options</h5><hr />
            <div style={{display:'flex', flexWrap:'wrap'}}>
            {/* <Card />
            <Card />
            <Card /> */}
            <Data/>
            </div>
           <div className='See_more'>
                <p className='See_More'>See More Options</p>
           </div>
           <p className='Advantage'>The Heat Pump Water Heater Advantage</p>
         <div className='below_seemore'>
           <div className='Clean'>
               <div className='Clean_content'>
                   <h5>Clean & Healthy Air &nbsp;<img src='/Images/info.svg' alt='info'></img>
</h5>
                   <p>No in-home air pollution or greenhouse gas emissions</p>
               </div>
           </div>
           <div className='Clean'>
               <div className='Clean_content'>
                   <h5>Reduced Carbon Frootprint</h5>
                   <p>Carbon offset equivalent for your home equals 23 trees planted</p>
               </div>
           </div>
           <div className='Clean'>
               <div className='Clean_content'>
                   <h5>Lower Energy Bills</h5>
                   <p>Upto to 75% reduction in energy use</p>
               </div>
           </div>
           </div><br />
           <hr style={{margin:'0px 10px'}} />
          <h3 style={{marginLeft:'10px'}}>How Hybrid Electric Water Heaters Advantage</h3>

          <div className='Heat_pump_container'>
          <div className='process'>
          <p>Process</p>
          <p>Components</p>
          </div>
          <hr />
          <p>A hybrid electric water heater uses a compressor to take heat from surrounding air and transfers it inside the water tank. It works similarly to a refrigerator, but in reverse. The "hybrid" components means that the water heater can heat either via the heat pump, or , when the surrounding air is too cold, it can heat the same as a conventional electric water heater. This means your watre heating is as efficient as possible, and also ensures you have hot water in all environments</p>
          <img className='container_red' src='/Images/container.png' alt="container"></img>
          </div>
        </div>
    )
}

export default Header
