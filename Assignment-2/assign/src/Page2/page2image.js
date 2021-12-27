import React from 'react'
import Page2Bottom from '../Page2Bottem/Page2Bottom'
import './Page2image.css'


const Page2image = () => {
    return (
        <div className='main'>
        <div className='Heater_image_Container'>
            <div className='page2_sidebar'>
            <img className="Image2" src='/Images/img1.png' alt=''></img>
            <img className="Image2" src='/Images/img2.png' alt=''></img>
            <img className="Image2" src='/Images/img1.png' alt=''></img>
            <img className="Image2" src='/Images/img2.png' alt=''></img>
            </div>
            <div className='Heater_image'>
                <img className="Image1" src='/Images/img1.png' alt=''></img>
            </div>
            <div className='page2_content'>
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
                    </div>&nbsp;
                    <div className='cost1'>
                        <h3><sup>$</sup>1799<sup>00</sup></h3>
                        <span>*with all incentives applied</span>
                    </div>
             </div>
                    <div className='Btn'>
                        <button className='get_install_btn' type='button'>Get install Quote</button>
                        <a href='abc'><p style={{marginTop:'10px', marginLeft:'10px'}}>Back to result</p></a>
                    </div>
            </div>
            <img  style={{width:"3rem", height:'3rem', borderRadius:"10px"}} src='/Images/EnergyStar.png' alt='cdfv'></img>
        </div>
            <Page2Bottom />
        </div>
        
    )
}

export default Page2image
