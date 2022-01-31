import React from 'react';
import './ProductOverview.css'

import check from './right-check.svg'
import info from './info.svg'

function ProductOverview() {

  return (
    <div>
      <div>
        <p className='productDescription'>Accelera heat pump water heaters up to 80% of hot water costs because they extract heat to make hot water in the air. The heat pump draws less energy then a toaster while it is running and making ot water. In warm climates, Accelera can be placed in a garage, where it uses the heat from the outside air, or inside the house, where it helps with air conditioning.</p>

        <div className='flexRow'>
          <div className='flexCol cardContainer'>

            <div className='flexRow'>
              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Save Money & Energy</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>

              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Energy Saving Scheduling</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>
            </div>

            <div className='flexRow'>
              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Carbon Footprint</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>

              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Heat Pump Technology</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>
            </div>

            <div className='flexRow'>
              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Operation Modes & Scheduling</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>

              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Diagnostic Mode</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>
            </div>

            <div className='flexRow'>
              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Demand Response Scheduling</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>

              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Set vacation or Away Mode</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>
            </div>

            <div className='flexRow'>
              <div className='card '>
                <div className='flexRow advTitles'>
                  <img src={check} alt="check" className='tick' />
                  <p>Demand Response Scheduling</p>
                </div>
                <p className='advDescription'>The Pro Terra Hybrid uses 75% less energy than a standard electric water heater to help minimize your impact on the environment that's 4X more efficient than a standard electric water heater.</p>
              </div>


            </div>
          </div>

          <hr className='longVl' />

          <div className='priceContainer'>
            <span className='basePrice'>Base Price  ------------------------ $1,799</span>
            <br />
            <span className='installation'>(Installation not included)</span>
            <br />
            <p className='incentive'>Federal Tax Credit <img src={info} alt="info" /> ------------------ -$200</p>
            <p className='incentive'>Federal Tax Credit <img src={info} alt="info" /> ------------------ -$100</p>
            <p className='incentive'>Utility Incentives <img src={info} alt="info" /> ------------------ -$1,000</p>

            <span className='equipmentCost'><b>Equipement Cost</b> <img src={info} alt="info" /> --------------------- <span className='eqCost'>$499</span></span>
            <div className='savings'>
              <span>Your Est. Annual Savings is <span className='savingsMoney'>$120</span> <img src={info} alt="info" /></span>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default ProductOverview;
