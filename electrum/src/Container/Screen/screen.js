import "./screen.css"

import Img from "./img1.png"
import Star from "./star.png"
import Info from "./info.svg"

function Screen() {
    return (
        <div className="flexCol screen">
            <div className="flexCol d">
                <div className="flexRow screenH">
                    <div className="Htxt">
                        <span className="spnS">Heat Pump Electric Water Heater  &gt; </span>
                        <span className="spnS1">Rheem Performance Platinum 50</span>
                    </div>
                    <div className="Hnav">
                        <div className="flexRow navR">
                            <button className="bl">&lt;</button>
                            <span className="spnB">Previous</span>
                            <span className="spnB1">Next</span>
                            <button className="bl">&gt;</button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="flexRow screenM">
                <div className="flexCol mainC">
                    <div className="flexRow up">
                        <div className="flexCol imageC">
                            <img src={Img} alt="heater" height="280px" width="120px" />

                        </div>
                        <div className="flexCol rrr">
                            <div className="flexRow ttt">
                                <div className="flexCol heaD ">
                                    <span className="spnBig">Rheem</span>
                                    <span className="spnb">50 Gal. Heat Pump Electric Water Heater</span>
                                    <span className="spnGreen">XE76RTI3U768</span>

                                </div>
                                <div className="flexCol staR">
                                    <img src={Star} alt="star" width="58px" />
                                    <div className="flexRow sss">
                                        <span className="spnS">3.4 ef </span>
                                        <img src={Info} alt="info" width="10px" />

                                    </div>

                                </div>
                            </div>
                            <hr className="line" />
                            <br />
                            <div className="list">
                                <ul>
                                    <li className="spnS">240-Volt and with only a single 15 amp circuit breaker</li>
                                    <li className="spnS">Best in class ENERGY STAR energy factor of 3.39 and DOE estimated energy usage is 1289 kWh/yr</li>
                                    <li className="spnS">Household size recommendation size is 3-5 people, possibly 6</li>
                                    <li className="spnS">Simple LED interface with no complicated modes to set to achieve outstanding savings, provides easy-to-read performance information</li>

                                </ul>

                            </div>
                            <div className="flexRow discount">
                                <span className="spnBigS">$1,799.00</span>
                                <div className="vl"></div>
                                <span className="spnBigreen">$799.00</span>

                            </div>
                            <div className="flexRow b2">
                                <div className="flexCol b2y">
                                    <span className="sw">Get Install Quote</span>

                                </div>
                                <div className="flexCol b2b">
                                    <span className="sb">Back To Results</span>
                                </div>

                            </div>

                        </div>

                    </div>
                    <div className="flexCol down">
                        <div className="flexRow">
                            <button className="bGreen">Product Overview</button>
                            <button className="bGreen">Products Specs</button>
                        </div>
                        <div className="hl"></div>

                    </div>
                    <span className="spnS">All values that are displayed on this page are based on standard industry assumptions. Savings number are calculated based on present day market circumstances,
                        but may vary due to utility adjustements rates or policy, or due to updates to system design. Finance payments displayed are estimated subjects to credit approval and based upon cureent
                        provider as rates that are sujected to change. Your payments and rates may be heigher</span>

                </div>

            </div>

        </div>
    );
}

export default Screen;