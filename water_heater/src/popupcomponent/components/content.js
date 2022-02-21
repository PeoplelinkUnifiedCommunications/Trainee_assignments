import React from 'react';
import '../stylesheets/popup.css';
import '../stylesheets/content.css';

function content() {

    return (
        <>
            <div className="resRowCol">
                <div className="top rowFlex">
                    <h4>heat pump electric  water heater / rheem performance platinum 50</h4>
                    <div className="buttns">
                        <a href="#" className="previous">&laquo; Previous</a>
                        <a href="#" className="next">Next &raquo;</a>
                    </div>
                </div>
                <hr />
                <div className="cntnr rowFlex"  >
                    <div className="rimg">
                        <img src="./assets/img2.png" className="img1" />
                    </div>
                    <div className="leftCntnr rowFlex">
                        <div className="contentCntnr">
                            <h1>Rheem</h1>
                            <span>50Gal waterpump heatwater</span><br />
                            <span className="clr">XE65TI0HD5102</span>
                            <hr />
                            <div className=" pdngMD">
                                <ul className="listText pdngMD">
                                    <li className="pdngXS">240-volts  and only a single 15 amp circuit breaker</li>
                                    <li className="pdngXS"> best in class ENERGY STAR energy factor of 3.39 and DOE  estimated energy usage is 1200 kwh/yr</li>
                                    <li className="pdngXS"> household size is recomended is 3-5 people possibly 6</li>
                                    <li className="pdngXS"> simple  LED interface with no complicated mode to set acheive outstanding savings,provides easy to read performance information </li>
                                </ul>
                            </div>
                            <div className="rowFlex ">
                                <span className="amtStyl pdngSM"><sup>$</sup>1,799<sup>00</sup></span><hr />
                                <div className="colFlex pdngSM">
                                    <span className="amtStyl clr"><sup>$</sup> <b>799</b><sup>00</sup></span>
                                    <span className="textsize">with all incentives applied</span>
                                </div>
                            </div>
                            <br />
                            <div className="rowFlex ">
                                <div className="txtdet">
                                    <button type="button" className="btn" onClick="carditem.js" > Get install quote</button>
                                </div>

                                <span className=" result">back to result</span>
                            </div>
                        </div>
                        <div className="logoPrt">
                            <div className=" colFlex">
                                <img src="./assets/logo.png" />
                            </div>
                            <span >3.4 of<i class="fas fa-info-circle"></i> </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default content;
