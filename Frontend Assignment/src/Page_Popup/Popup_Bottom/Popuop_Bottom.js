import React from "react";
import Information from "../Information/Information";
import './Popuop_Bottom.css'
function PopupBottom() {
    return (
        <div className="Product">
            <a href="/">Product Overview</a> <a href="/">Product Specs</a>
            <hr style={{ marginTop: '10px' }} />
            <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
            <div className="info">
               <Information />
                <div className="rate">
                    <h4>Basic Price ---------------- <span> $1,799</span></h4>
                    <label>(Installation not included)</label>
                    <div className="federal">
                        <h4>Federal Tax Credit <img src='./Images/info.svg' alt="info"/> -------------- <span>-$200</span></h4>
                        <h4>Federal Tax Credit <img src='./Images/info.svg'alt="info"/> -------------- <span>-$100</span></h4>
                        <h4>Utility Incentive <img src='./Images/info.svg'alt="info"/> ----------------- <span>-$1000</span></h4>
                        <div className="amount">
                        <h5>Equipment Cost <img src='./Images/info.svg'alt="info"/> ---------- <span>-$499</span></h5>
                        </div>
                        <h3>Your Est. Annual Saving is <label>$120</label><img src='./Images/info.svg'alt="info"/></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PopupBottom;