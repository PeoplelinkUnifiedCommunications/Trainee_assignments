import React from 'react';

import {Link} from "react-router-dom"

import searchIcon from './search-bar.svg'
import infoToolTip from './info-tooltip.svg'
import Incentive from './Incentive.svg'
import HeaterImg from './HeaterImg.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import heater from './heater.png'


import './index.css'

function HeaterRecommendedPage() {

  return (
    <div className='app-container'>
        <div className='slider-app'>
          <div className='slider-container'>
              <div>
                <p className='slider-description'>Tell Us About Your Project</p>
                <hr className='slider-line'/>
              </div>
              <form>
              <div className='form-app'>
                <p className='location-description'>Location</p>
                <div className='location-app'>
                <div className='location-container'>
                      <input type="text" className='text-address' placeholder='Enter Address'/>
                      <select className='select-heater'>
                      <option>Single-Family</option>
                    </select>
                    </div>
                    <div>
                      <button className='search-button'>
                        <img src={searchIcon} className='search-image' alt='search'/>
                      </button>
                    </div>
                </div>
                <div className='location-app'>
                  <p className='location-description'>Size your water heater</p>
                  <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                </div>
                <div>
                  <div class="slidecontainer">
                    <input type="range" min="10" max="100"class="slider" id="myRange"/>
                    <div className='personContainer'>
                      <p className='gallons'>50 Gallons <br/>(3 - 5 people)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                    <p className='location-description'>What is your current water heater fuel type?</p>
                    <select className='selectFuel'>
                        <option style={{color: "black"}}>Natural Gas</option>
                    </select>
              </div>
              <div className='location-app'>
                  <p className='location-description'>Is this a water heater emergency</p>
                  <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                </div>
                <div>
                    <button className='NoButton'>No</button>
                    <button className='YesButton'>Yes</button>
                </div>
              </form>
          </div>
        </div>
        <div className='heater-app'>  
            <div className='incentiveContainer'>
                <img src={Incentive} alt='Incentive'/>
                <p className='incentive'>Your project qualifies you for <span className='incentiveBold'>incentives!</span></p>
            </div>
            <p className='recommendedOptions'>Your Hybrid Electric Water Heater Recommended Options</p>
            <hr className='recommendedLine'/>
            <div className='recommended-App'>
                <div className='recommended-container'>
                    <div className='heaterContainer'>
                        <div className='heaterNameContainer'>
                            <p><span className='hname'>Rheem </span><br/> Performance Platinum 50</p>
                        </div>
                        <div className='heaterImage'>
                            <span style={{fontSize: "14px"}}>3.4 ef</span>
                            <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                            <img src={HeaterImg} className='heaterImg' alt='Heater Brand'/>
                        </div>
                    </div>
                    <div className='heaterImageContainer'>
                        <div>
                            <img src={img1} className='performanceImg' alt="performanceImg"/>
                        </div>
                        <div >
                            <ul className='heaterPerformance'>
                                <li className='list-item'>Leak detection with auto water shut-off</li>
                                <li className='list-item'>Control from your smart phone</li>
                                <li className='list-item'>Multiple operating modes</li>
                                <li className='list-item4'>10 year manufacturer warranty</li>
                            </ul>
                        </div>
                    </div>
                    <div className='heaterLiner'></div>
                    <p className='basePrice'>Base Price <span className='basePriceSpan'> - - - - - - - - - - - - - - - - - - - </span>$1,799
                    <br/><span className='installation'>(installation not included)</span></p>
                    <div className='availableIncentive'>
                      <span className='availableContainer'>Available Incentive
                      <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                      <span><span className='basePriceSpan'> - - - - - </span>$1,300</span> </span>
                    </div>
                    <span className='EquimentCost'>Equipment Cost
                    <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                    <span className='basePriceSpan'> - - - - - - - - - - -</span><span className='equimentPrice'>$499</span>
                    <br/><span className='installation'></span></span>
                    <div className='annualCostApp'>
                      <span className='annualDescription'>Your Est. Annual Savings is  <span className='annualCost'> $120</span><img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/></span>
                    </div>
                    <button className='installQuote'>Get Install Quote</button>
                    <div className='moreDetailsPage'>
                    <Link to='/rheemperformance' className='moreDetails'>
                      View More Details
                    </Link>
                    </div>
                </div>
                <div className='recommended-container'>
                <div className='heaterContainer'>
                        <div className='heaterNameContainer'>
                            <p><span className='hname'>A.O. Smith</span><br/>Elite Master 56</p>
                        </div>
                        <div className='heaterImage'>
                            <span style={{fontSize: "14px"}}>3.4 ef</span>
                            <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                            <img src={HeaterImg} className='heaterImg' alt='Heater Brand'/>
                        </div>
                    </div>
                    <div className='heaterImageContainer'>
                        <div>
                            <img src={img2} className='performanceImg' alt="Elite"/>
                        </div>
                        <div >
                            <ul className='heaterPerformance'>
                                <li className='list-item'>Leak detection with auto water shut-off</li>
                                <li className='list-item'>Control from your smart phone</li>
                                <li className='list-item'>Multiple operating modes</li>
                                <li className='list-item4'>10 year manufacturer warranty</li>
                            </ul>
                        </div>
                    </div>
                    <div className='heaterLiner'></div>
                    <p className='basePrice'>Base Price <span className='basePriceSpan'> - - - - - - - - - - - - - - - - - - - </span>$1,899
                    <br/><span className='installation'>(installation not included)</span></p>
                    <div className='availableIncentive'>
                      <span className='availableContainer'>Available Incentive
                      <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                      <span><span className='basePriceSpan'> - - - - - </span>$1,300</span> </span>
                    </div>
                    <span className='EquimentCost'>Equipment Cost
                    <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                    <span className='basePriceSpan'> - - - - - - - - - - -</span><span className='equimentPrice'>$499</span>
                    <br/><span className='installation'></span></span>
                    <div className='annualCostApp'>
                      <span className='annualDescription'>Your Est. Annual Savings is  <span className='annualCost'> $120</span><img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/></span>
                    </div>
                    <button className='installQuote'>Get Install Quote</button>
                    <div className='moreDetailsPage'>
                    <p className='moreDetails'>View More Details</p>
                    </div>
                </div>
                <div className='recommended-container'>
                <div className='heaterContainer'>
                        <div className='heaterNameContainer'>
                            <p><span className='hname'>Stiebel Eltron </span><br/> Hybrid Electric 50</p>
                        </div>
                        <div className='heaterImage'>
                            <span style={{fontSize: "14px"}}>3.4 ef</span>
                            <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                            <img src={HeaterImg} className='heaterImg' alt='Heater Brand'/>
                        </div>
                    </div>
                    <div className='heaterImageContainer'>
                        <div>
                            <img src={img3} className='performanceImg' alt="hybrid"/>
                        </div>
                        <div >
                            <ul className='heaterPerformance'>
                                <li className='list-item'>Leak detection with auto water shut-off</li>
                                <li className='list-item'>Control from your smart phone</li>
                                <li className='list-item'>Multiple operating modes</li>
                                <li className='list-item4'>10 year manufacturer warranty</li>
                            </ul>
                        </div>
                    </div>
                    <div className='heaterLiner'></div>
                    <p className='basePrice'>Base Price <span className='basePriceSpan'> - - - - - - - - - - - - - - - - - - - </span>$2,899
                    <br/><span className='installation'>(installation not included)</span></p>
                    <div className='availableIncentive'>
                      <span className='availableContainer'>Available Incentive
                      <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                      <span><span className='basePriceSpan'> - - - - - </span>$1,300</span> </span>
                    </div>
                    <span className='EquimentCost'>Equipment Cost
                    <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                    <span className='basePriceSpan'> - - - - - - - - - - -</span><span className='equimentPrice'>$499</span>
                    <br/><span className='installation'></span></span>
                    <div className='annualCostApp'>
                      <span className='annualDescription'>Your Est. Annual Savings is  <span className='annualCost'> $120</span><img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/></span>
                    </div>
                    <button className='installQuote'>Get Install Quote</button>
                    <div className='moreDetailsPage'>
                    <p className='moreDetails'>View More Details</p>
                    </div>
    
                </div>
            </div>
            <button className='seeMore'>
                See More Options
            </button>
            <p className='heaterAdv'>The Heat Pump Water Heater Advantage</p>
            <div className='advatangesApp'>
                <div>
                    <span className='advatange1'>Clean & Healthy Air<img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/></span>
                    <p className='advatangeDescription'>No in-home air pollution or <br/>greenhouse gas emissions</p>
                </div>
                <div style={{marginLeft: "100px"}}>
                    <span className='advatange1'>Reduced Carbon Footprint<img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/></span>
                    <p className='advatangeDescription'>Carbon offset equuivalent for your <br/>home equals  
                    <span className='treePlanted'> 23 trees planted</span></p>
                </div>
                <div style={{marginLeft: "100px"}}> 
                    <span className='advatange1'>Low Energy Bills<img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/></span>
                    <p className='advatangeDescription'>Up to 75% reduction in energy<br/>use</p>
                </div>
            </div>
            <hr className='recommendedLine'/>
            <p className='heaterAdv'>How Hybrid Electric Water Heaters Work</p>
            <div className='pumpWaterContainer'>
              <div className='heaterComponent'>
                <button className='process'>
                  Process
                </button>
                <button className='component'>Components</button>
                <hr className='pumpLine'/>
              </div>
              <p className='hybridDescription'>A hybrid electric water heater uses a compressor to take heat from the surronding air and transfers it inside the water tanks. It works
                similarly to a refrigerator, but in reverse. The "hybrid" component means that the water heater can heat water either via the heat pump,
                or, when the surronding air is too cold, it can heat the same as a conventional electric water heater. This means your water heating is ass 
                as efficient as possible, and also ensures you have hot water in all environments.
              </p>
              <div>
                <img src={heater} className='pumpHeater' alt="heater"/>
              </div>

            </div>
            <p className='displayedPage'>
               All values displayed on this page are baser on standard industry assumptions. Savings numbers are calculated based on present
               day market circumstances, but may vary due to utility adjusments to rates or policy, or due to updates to the system design. 
               Finance payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change.
                Your payments and rates may br higher.
              </p>
        </div>
    </div>
  );
}

export default HeaterRecommendedPage;