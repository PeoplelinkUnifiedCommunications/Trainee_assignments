import "./home.css"
import Card from "./card"
import Tag from "./tag.svg"
import Info from "./info.svg"
import Pump from "./heatPump.png"

function Home() {
    return (
        <div className="flexCol home">
            <div className="flexRow header">
                <img src={Tag} alt="tag" />
                <span className="sh1">Your project qualifies you for</span>
                <span className="sh2">incentives!</span>
            </div>
            <div className="flexCol page">
                <div className="s1"><span>Your Hybrid Electric Water Heater Recommended Options</span></div>
                <div className="flexRow sec0">
                    <Card/>
                </div>
                <div className="seemore"><button className="smButton">See More Options</button></div>
                <div className="flexCol sec1">
                    <div className="flexCol title1">
                        <span className="t1">The Heat Pump Water Heater Advantages</span>
                    </div>
                    <div className="flexRow ">
                        <div className="flexCol details">
                            <div className="flexRow ">
                                <span className="s2">Clean & Healthy Air</span><img src={Info} alt="info" width="10px" />
                            </div>
                            <p className="p1">No in-home air polloution or greenhouse gas emissions</p>
                        </div>
                        <div className="flexCol details1">
                            <div className="flexRow ">
                                <span className="s2">Reduce Carbon Footprint</span><img src={Info} alt="info" width="10px" />
                            </div>
                            <p className="p1">Carbon offset equivalent for your home equeals<span className="scolor">23 trees planted</span></p>
                        </div>
                        <div className="flexCol details1">
                            <div className="flexRow ">
                                <span className="s2">Lower Energy Bills</span><img src={Info} alt="info" width="10px" />
                            </div>
                            <p className="p1">Up to 75% reduction in energy use.</p>
                        </div>
                    </div>
                </div>
                <div className="flexCol sec2">
                    <div className="flexCol title1">
                        <span className="t1">How Hybrid Electric Water Heater Works</span>
                    </div>
                    <div className="flexCol white">
                        <div className="flexRow opt">
                            <span className="s3">Process</span>
                            <span className="s4">Compnents</span>

                        </div>
                        <div className="flexCol txt1">
                            <p className="p1">A hybrid electric water heater uses a compressor to take heat from the sorrounding air and transfer it inside the water tank.
                            It works similarly to a refrigerator, but in reverse. The "hybrid" component means that the water heater can heat water either via heat pump or 
                            when the sorrounding air is too cold, it can heat the same as a conventional electrical water heater. tis means your water heating is as efficient
                            as possible and also  ensures you have hot water in all environments.</p>

                        </div>
                        <div className="flexCol pump">
                            <img src={Pump} alt="Heat Pump" width="100%"/>
                        </div>
                    </div>
                    <div className="flexCol txt1">
                            <p className="p1">All values displayed on this page are based on standard industry assumprions. Saving nubers are calculated based on current day market circumstances, But may vary due to utility adjustments to 
                            rates or policy, or due to upgrades to the system design. Finance payments display are estimates subject to credit apprval and based upon current provider rates that are subjected to change change. Your payments and rates may be higher</p>

                        </div>
                </div>

            </div>

        </div>
    );
}
export default Home; 