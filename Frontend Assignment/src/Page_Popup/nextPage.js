import React from "react";
import './nextPage.css'
function Popup(props) {
    return (
        <div className="popup">
            <div className="popup_header">
                <div className="pop">
                    Heat Pump Electric Water Heater {'>'} Reheem Performance Platinum 50
                </div>
                <div className="buttons">
                    <button>{'<'} Previous</button>
                    <button>Next {'>'}</button>
                </div>
            </div>
            <hr style={{ margin: '0px 15px' }} />
            <div className="popup_side">
                <img src='/Images/img1.png' alt="" />
                <img src='/Images/img2.png' alt="" />
                <img src='/Images/img3.png' alt="" />
            </div>
            <div className="Product">
                <a href="/">Product Overview</a> <a href="/">Product Specs</a>
                <hr style={{ marginTop: '10px' }} />
                <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
            <div className="bottom_cards">
                <div className="cards1">
                <img src="/Images/tick.svg" alt="tick" />&nbsp;&nbsp;<span>Save Money And Energy</span>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Popup