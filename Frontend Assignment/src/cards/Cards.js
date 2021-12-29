import React from "react";
import "./Cards.css"
import Popup from 'reactjs-popup'
import NextPage from "../Page_Popup/nextPage";
function Cards(props) {
    return (
        <div className="cards">
            <div className="card-content">
                <div className="card_leftcontent">
                    <h3>{props.manufacturer_name}</h3>
                    <h4>{props.name}</h4>
                </div>
                <div className="card_rightcontent">
                    <h4>{props.ef}</h4>
                    <img style={{ fontSize: "1rem", padding: "0px 8px " }} src={props.logo} alt="tooltipimg" />
                    <img style={{ width: "2.5rem", borderRadius: "10px" }} src={props.logo1} alt="Energystarlogo" />
                </div>
            </div>
            <div className="card_img">
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
            <hr style={{ margin: '10px 10px' }} />
            <div className="Prices">
                <h3>Base Price ................................ <span>$1,799</span> </h3>
                <span>(Installation not included)</span>
                <h4 style={{ padding: "3px 10px" }}>Federal Tax Credit <img src={props.logo} alt="too1" /> ...................................<span> $ 300 </span></h4>
                <h4 style={{ padding: " 3px 10px" }}>Utility Incentives <img src={props.logo} alt="too1" /> .....................................<span> $ 1,000 </span></h4>
                <h3>Equipment Cost <img src={props.logo} alt="tooltip" /> <span>{props.Equipment_cost}</span></h3>
                <p>Your Est Annual Savings is <span>$120</span><img src={props.logo} alt="img"></img></p>
                <button className='get_btn'>Get Install Quote</button>  
            </div>
            <Popup modal trigger={
                <div>
                <button className='view_more'>{props.view_more}</button>
                </div>
            } >
    
                <NextPage />
            </Popup>
        </div>
    )
}
export default Cards