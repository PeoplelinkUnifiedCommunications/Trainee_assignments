import React from 'react';
import './ImageDetailsContainer.css' ;
import './ProductOverview' ;
import ProductOverview from './ProductOverview';

function ImageDetailsContainer() {
    return (
        <>
        <div>
            <div className ='imagedetailscontainer'>
                <h1>Rheem</h1>
                <h4>50 Gal. Heat Pump Electric Water Heater</h4>
                <span>XE65T10HD50UI</span>
                <hr />
                <ul>
                        <li> 240-Volt and with only s single 15 amp circuit breaker</li>
                        <li>Best in class ENERGY STAR energy factor of 3.39 and DOE estimated <br />
                        energy usage is 1289
                        
                        </li>
                        <li>Household size recommended 3-5 people, possibly 6</li>
                        <li>Simple LED  interface with no complicated modes to set to achieve <br />
                        outstanding savings, provides easy to read performance information
                        </li>
                </ul>
                <div className='price'>
                    <h2 className='price1'>
                        <sup>$</sup><span> <>1,799</> </span><sup>00</sup>
                    </h2>
                    <h2 className='price2'><sup>$</sup> 799 <sup>00</sup>
                    <h6><sup>*</sup>With All Incentives Applied</h6>
                    </h2>
                </div>
                <div className='btnsContainer'>
                    <button className='btn1'> Get Install Quote</button>
                    <button className='btn2'>Back to Result</button>
                </div>
                
            </div>
        </div>
            {/* <ProductOverview/> */}
         </>
    )
}

export default ImageDetailsContainer;
