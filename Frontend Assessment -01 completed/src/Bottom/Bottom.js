import React, { useState } from "react";
import './Bottom.css'
import Info from './Images/info.svg';
import Heater from './Images/heater.png'
function Bottom() {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <div className="bottom">
            <h2>The Heat Pump Hot Water Advantage</h2>
            <div className="bottom1">
                <div className="bottm-content">
                    <h3>
                        Clean And Healthy Air &nbsp;<img className="Info" src={Info} alt="Info" />
                    </h3>
                    <li>No in-home air pollution or </li>
                    <li>greenhouse gas emission</li>
                </div>
                <div className="bottm-content">
                    <h3>
                        Clean And Healthy Air &nbsp;<img className="Info" src={Info} alt="Info" />
                    </h3>
                    <li>No in-home air pollution or </li>
                    <li>greenhouse gas emission</li>
                </div>
                <div className="bottm-content">
                    <h3>
                        Clean And Healthy Air &nbsp;<img className="Info" src={Info} alt="Info" />
                    </h3>
                    <li>No in-home air pollution or </li>
                    <li>greenhouse gas emission</li>
                </div>
            </div>
            <hr style={{ margin: '0px 25px' }} />
            <h2>How Hybird Electric Water Heaters Work</h2>
            <div className="bottom_main">
                <div className="head">
                    <div className="process" onClick={() => selectedTab(1)}>Process</div>
                    <div className="component" onClick={()=>selectedTab(2)}>Components</div>
                </div>
                <hr style={{ marginTop: '10px' }} />
                {selectedTab === 1 &&
                <>
                <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                <div className="heater">
                    <img className="Heater" src={Heater} alt="Heater" />
                </div>
                </>
                    }
            </div>
        </div>
    )
}
export default Bottom