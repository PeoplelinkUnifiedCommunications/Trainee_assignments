import React from 'react'
import img1 from './img1.png'
import HeaterImg from './HeaterImg.png'
import inHomeHeater from './inHomeHeater.jpg'
import heaterProduct from './heaterProduct.png'
import infoToolTip from './info-tooltip.svg'

import { MdDone } from "react-icons/md";

import './index.css'


function HeaterDetailsPage(){
return(
    <div className='detailsApp'>
        <div className='detailsHeaderApp'>
            <div style={{marginLeft: "20px"}}>
                <p className='detailsHeader'>Heater Pump Electric Water Heater {">"}
                 <span className='detailsHeaderSpan'>Rheem Performance Platinum 50</span></p>
            </div>
            <div className='buttonContainer'>
                <button className='leftArrrowButton'>{"<"}</button>
                <div className='previousApp'>previous</div>
                <div className='nextApp'>next</div>
                <button className='rigthArrrowButton'>{">"}</button>
            </div>
        </div>
        <hr className='moredetailsLine'/>
        <div className='heaterDetailsPageApp'>
            <div className='multipleImages'>
                <div className='multipleContainer'>
                    <div className='multipleImgCont'>
                        <img src={img1} className='detailsImg1' alt='detail heater'/>
                    </div>
                    <div className='inHomeHeaterCont'>
                        <img src={inHomeHeater} className='inHomeHeater' alt="inHomeHeater"/>
                    </div>
                    <div className='inactiveImgCon'>
                        <img src={HeaterImg} className='detailsImg2' alt='heaterDetail2'/>
                        <span className='detailsDescription'>Rheem <br/>
                        Water Heater</span>
                    </div>
                    <div className='inHomeHeaterCont'>
                        <img src={heaterProduct} className='inHomeHeater' alt="heaterProduct"/>
                    </div>
                </div>
            </div>
            <div className='rheem-app'>
                <div className='rheem-app-container'>
                    <div className='rheemImgContainer'>
                        <img src={img1} className='rheemImgEdit' alt="rheem"/>

                    </div>
                    <div className='rheemdetialsContainer'>
                        <div className='rheemNameContainer'>
                            <div>
                                <h1>Rheem</h1>
                            </div>
                            <div className='titleCont'>
                                <img src={HeaterImg} className='titleImg' alt='title'/>
                                <br/>
                                <span>3.4 ef <img src={infoToolTip} alt="infotool"/></span>
                            </div>
                        </div>
                        <span className='titleDescription'>50 Gal. Heat Pump Electric Water Heater</span>
                        <span className='heaterNumber'>XE65T10HD50U1</span>
                        <div className='smallLine'></div>
                        <ul className='heaterulList'>
                            <li className='rheemList'>240-Volt and with only a single 15 amp circuit breaker.</li>
                            <li className='rheemList'>Best in class ENERGY STAR energy factor of 3.39 and DOE estimate <br/>
                            energy usage is 1289 kWh/yr
                            </li>
                            <li className='rheemList'>Household size recommendation is 3-5 people, possibly 6</li>
                            <li className='rheemList'>Simple LED interface with no complicated modes to set to achieve
                                <br/>
                                outstanding savings, provides easy-to-read performance information
                            </li>
                        </ul>
                        <div className='rheemCostCont'>
                            <p className='rheemActualCost'>$ <span style={{fontWeight: "600", fontSize: "25px"}}>1,799</span><sup>00</sup></p>
                            <div className='costLine'></div>
                            <p className='rheemDiscount'>$<span style={{fontWeight: "600", fontSize: "25px"}}>799</span><sup>00</sup>
                            <br/>
                            <span className='allTaxes'>*With all incentives applied</span>
                            </p>
                        </div>
                        <div>
                            <button className='installQuoteRheem'>Get Install Quote</button>
                            <button className='btResults'>Back to Results</button>
                        </div>
                    </div>
                </div>
                <div className='aboutRheemHeaterApp'>
                    <div className='overSpecsCont'>
                        <button className='pOverview'>Product Overview</button>
                        <button className='pSpecs'>Product Specs</button>
                    </div>
                    <p className='acceleraPump'>Accelera heat pump water heaters save up to 80% of hot water costs because they extract heat to make 
                        hot water from energy in the air. The heat pump draws less energy than a toaster while it is running
                         and making hot water. In warm climates, Accelera can be placed in a garage, where it uses the heat 
                         from the outside air; or inside the house, where it helps with air conditioning.
                    </p>
                    <div className='overviewContainer'>
                        <div className='overviewPointsCont'>
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Save Money & Energy</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                        The Proterra Hybrid uses 75% less energy than a standard electric water heater to help 
                                        minimize your impact on the environment - that's 4X more efficient than a standard electric 
                                        water heater
                                    </p>
                                </div>
                            </div>
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Energy Saving Scheduling</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                        Program your water heater to match your needs throughout the day - higher production
                                        during high use times, like the morning, and lower production for energy savings when no one is home
                                    </p>
                                </div>
                            </div>
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Carbon Footprint</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                    The Proterra Hybrid uses 75% less energy than a standard electric water heater to help 
                                        minimize your impact on the environment - that's 4X more efficient than a standard electric 
                                        water heater
                                    </p>
                                </div>
                            </div>
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Heat Pump Technology</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                        The Proterra Hybrid pulls heat energy from the air around it to heat your water, making 
                                        it the most efficient water heater on the market with up to a 4.0 UEF
                                    </p>
                                </div>
                            </div>  
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Operation Modes & Scheduling</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                    The Proterra Hybrid uses 75% less energy than a standard electric water heater to help 
                                        minimize your impact on the environment - that's 4X more efficient than a standard electric 
                                        water heater
                                    </p>
                                </div>
                            </div>  
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Diagnostic Mode</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                        Schedule set point choose from five operation modes to adjust to your lifestyle all 
                                        from the EcoNet App: Energy Saver, Heat Pump, Electric, High Demand, Vacation
                                    </p>
                                </div>
                            </div>     
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Desmand Response Scheduling</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                        You can save up to $400 over the life of the heater with peak and off-peak energy rate Scheduling
                                        with built-in demand response - letting your utility company shift the energy usage
                                    </p>
                                </div>
                            </div>     
                           <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Set Vacation or Away Mode</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                        Reduce water heating costs while you're away for a week or just for the day - it's easy 
                                        to set from your phone even if you're already left home
                                    </p>
                                </div>
                            </div>             
                            <div className='heaterOverviewPoint'>
                                <div className='saveEnergyCont'>
                                    <MdDone className='mdDone'/>
                                    <span className='pointDescription'>Energy Use Tracking</span>
                                </div>
                                <div>
                                    <p className='proterrahybrid'>
                                        View weekly, monthly and yearly energy usage reports from your 
                                        phone to help you better manage energy consumption
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='pageSLine'></div>
                        <div className='pageSecondCont'>
                            <p className='pageObasePrice'>Base Price <span className='pageObasePriceSpan'> - - - - - - - - - - - - - - - - - - - </span>$1,799
                            <br/><span className='pageOinstallation'>(installation not included)</span>
                            </p>
                            <div className='pageOavailableIncentive'>
                                <span className='pageOavailableContainer'>Federal Tax Credit
                                <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                                <span><span className='pageObasePriceSpan'> - - - - - </span>$200</span> </span>
                            </div>
                            <div className='pageOavailableIncentive'>
                                <span className='pageOavailableContainer'>Federal Tax Credit
                                <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                                <span><span className='pageObasePriceSpan'> - - - - - </span>$100</span> </span>
                            </div>
                            <div className='pageOavailableIncentive'>
                                <span className='pageOavailableContainer'>Utility Incentive
                                <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                                <span><span className='pageObasePriceSpan'> - - - - - </span>$1000</span> </span>
                            </div>
                            <span className='pageOEquimentCost'>Equipment Cost
                            <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                            <span className='pageObasePriceSpan'> - - - - - - - - - - -</span><span className='equimentPrice'>$499</span>
                            <br/><span className='pageOinstallation'></span></span>
                            <div className='pageOannualCostApp'>
                                <span className='pageannualDescrip'>Your Est. Annual Savings is  <span className='annualCost'> $120</span></span>
                            <img src={infoToolTip} className="infoToolTip" alt='infoToolTip'/>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    );
}

export default HeaterDetailsPage