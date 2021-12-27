import React from 'react'
import './Card.css'
// import info from './Images/info.svg'/
// import energy from './Images/EnergyStar.png'
// import img1 from './Images/img1.png'
import Popup from 'reactjs-popup'
import Page2image from '../Page2/page2image'

const Card = (props) => {
    console.log(props)
    return (
                <div className='card_container'>
                <div className="cardTop">
                <p className="card_left">
                <h3>{props.manufacturer_name}</h3>
                <h5>{props.name}</h5>
                </p>
                <p className="rightsideTop">
                <h5 style={{padding:"0px 6px"}}>{props.ef}</h5>
                <img style={{fontSize:"1rem" , padding:"0px 8px "}} src={props.logo} alt="tooltipimg" />
                <img style={{width:"2.5rem" , borderRadius:"10px"}} src= {props.logo1}   alt="Energystarlogo" />
                </p>
               </div>


               <div className="cardCenter">
                <img className='img1' src={props.banner_logo} alt="img1" />
                <ul className='card_center_text'>
                    <li className="list list1">
                        Leak detection with auto water shut-off
                    </li>
                    <li className="list list2">
                            Control from your Smart phone
                    </li>
                    <li className="list list3">
                             Multiple Operating Modes
                    </li>
                    <li className="list list4">
                       10 year Manufacture Warrenty
                    </li>
                </ul>
                </div>
                <hr style={{margin:'10px 10px'}}/>
                <div className="Prices">
                <h3>Base Price ................................ <span>$1,799</span> </h3>
                <span>(Installation not included)</span>
                <h5 style={{padding:"3px 10px"}}>Federal Tax Credit <img src={props.logo} alt="too1" /> ...................................<span> $ 300 </span></h5>
                <h5 style={{padding:" 3px 10px"}}>Utility Incentives <img src={props.logo} alt="too1" /> .....................................<span> $ 1,000 </span></h5>
                <h3>Equipment Cost <img src={props.logo} alt="tooltip" /> <span>{props.Equipment_cost}</span></h3>
                <p style={{padding:'5px',border:"2px solid green",width:"100%" ,margin:'5px 0', borderRadius:'5px', textAlign:'center',fontWeight:'bolder'}}>Your Est Annual Savings is <span>$120</span><img src={props.logo} alt="img"></img></p>
                <button className='get_btn'>Get Install Quote</button>
               </div>
            <Popup modal trigger={
                <button className='view_more'>View More Details</button>
            } >
                {close => (
                    <div className='popup-bg'>
                        <div className='top_heading'>
                        <span>Heat Pump Electric Water Heater {`>`} Rheem performance platinum 50</span>
                        <div>
                        <button type='button' onClick={()=>close()}>Close</button>
                        <button>Previous</button>
                        <button>Next</button>
                        </div>
                        </div><hr/>
                        <Page2image />
                    </div>
    )}
            </Popup>
            
        </div>
    )
}

export default Card
