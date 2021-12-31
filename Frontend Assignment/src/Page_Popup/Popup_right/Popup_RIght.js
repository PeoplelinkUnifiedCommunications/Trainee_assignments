import React from "react";
import "./Popup_Right.css"
import ReactImageMagnify from 'react-image-magnify';
// import Heater from './Images/img1.png';
// import Copy from './Images/copy.png';
function PopuopRight(props) {
    return (

        <div className="right_content">
            <div className="leftc">
                <img src='/Images/img1.png' alt="" />
                <img src='/Images/img2.png' alt="" />
                <img src='/Images/img3.png' alt="" />
            </div>
            <div className="popup_right">
                <div style={{ width: '150px', height: '430px',margin:'10px',}} >
                    <ReactImageMagnify  {...{
                        smallImage: {
                            alt: 'Water Heater',
                            isFluidWidth: true,
                            src: './Images/img1.png',
                        },
                        largeImage: {
                            src: './Images/img1.png',
                            width: 1500,
                            height: 2900
                        },
                        enlargedImageContainerDimensions: {
                            width: '500%',
                            height: '150%',
                        }
                    }} />
                </div>
                {/* <img className="pop_right" src='./Images/img1.png' alt="" /> */}
            </div>
            <div className="popup_left">
                <div className='popupleft_content'>
                    <h2>Rheem</h2>
                    <p>50 Gal.Heat Pump Electric Water Heater</p>
                    <span>XE65T10Hd50U1</span>
                    <ul>
                        <li className='list2'>240-volt and withonly a single 15 amp circuit breaker</li>
                        <li className='list2'>Best in class ENERGY STAR energy factor of 3.39 and DOE estimated Energy Usage is 1289 kWh/yr</li>
                        <li className='list2'>Household size recommondation is 3.5 people, possibly 6</li>
                        <li className='list2'>outstanding LED interface with  non complicated modes to set to achievev oustanding savings, provides easy-to-read performance information</li>
                    </ul>
                    <div className='costs'>
                        <div className='cost'>
                            <h3><sup>$</sup>1799<sup>00</sup></h3>
                        </div>
                        <div className='cost1'>
                            <h3><sup>$</sup>799<sup>00</sup></h3>
                            <span>*with all incentives applied</span>
                        </div>
                    </div>
                    <div className='Btn'>
                        <button className='get_install_btn' type='button'>Get install Quote</button>
                        <a href="/">Back to result</a>
                    </div>
                </div>
            </div>
            <img style={{ width: "3rem", height: '3rem', borderRadius: "10px" }} src='/Images/EnergyStar.png' alt='cdfv'></img>
        </div>
    )
}
export default PopuopRight;