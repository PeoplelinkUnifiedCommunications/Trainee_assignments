import React from 'react'
import '../../container/stylesheets/cardDitails.css'
const cardDitails = () => {
    return (
        <>
            <div className='colFLex'>
                <div className='CDCntr'>
                    <div className='rowFlex'>
                        <div className='leftBTNPart'>
                            <span className='CDTxt'>Heat Pump Electric Water Heater {">"}  Rheem Perfomance platinum 50</span>
                        </div>
                        <div className='rightBTNPart'>
                            <button>Previous</button>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
                <div className='rowFlex resColRow pdngVLG'>
                    <div className='bgImg'>
                        <img src="images/img2.png" alt="" className='img' />
                    </div>
                    <div className='rightCntr'>
                        <div className='rowFlex'>
                            <div className='lCntr'>
                                <h2 className='pdngVSM RhemTxt'>Rheem</h2>
                                <h4 className='pdngVSM RhmInnerTxt'>50 Gal.Heat Pump Electric Water Heater</h4>
                                <h6 className='pdngVSM XE65'>XE65T10HD50U1</h6>
                                
                                <ul className=" colFlex">
                                    <li className="rowFlex pdngVSM">
                                        <i className="fas fa-play-circle icon"></i><span className="cardList">240-Volt and with only a single 15bamp circuit breaker.</span>
                                    </li>
                                    <li className="rowFlex pdngVSM">
                                        <i className="fas fa-play-circle icon"></i><span className="cardList">Best in class ENERGY STAG energy factor of 3.39 and DOE estimated energy usage is 12B9 kWh/yr</span>
                                    </li>
                                    <li className="rowFlex pdngVSM">
                                        <i className="fas fa-play-circle icon"></i><span className="cardList">Household size recommendation is 3-5people ,possible 6</span>
                                    </li>
                                    <li className="rowFlex pdngVSM">
                                        <i className="fas fa-play-circle icon"></i><span className="cardList">Simple LED interface with no complicated modes to set achive outstanding savings provides easy to read perfomance information</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='rCntr'>
                                <img src="images/Energy_Star_logo.svg.png" />
                            </div>

                        </div>
                        <div className='rowFlex pdngHMD'>

                            <span className="amtStyl"><sup>$</sup>1,799<sup>00</sup></span>
                            <span className='linestyl'></span>
                            <div className='colFlex incentives'>
                                <h6 className="textStyl"><sup>$</sup>799<sup>00</sup></h6>
                                <span className='WITh'>With all incentives applied</span>
                            </div>
                        </div>
                        <div className='rowFlex pdngVLG'>
                            <button className='getInstall'>Get Install Quote</button>
                            <a href='#'> Back to Results</a>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default cardDitails
