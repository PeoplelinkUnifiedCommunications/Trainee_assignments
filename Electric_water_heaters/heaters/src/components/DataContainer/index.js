import React from 'react';
import isymbol from '/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/info-tooltip.svg';
import logo from '/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/Energy_Star_logo.svg.png'
import { Link } from 'react-router-dom';


function DataContainer({details}) {
    
return <li className="listContainer">
  
        <div className="flexRow extended">

            <div className="nameContainer">
                <h2>{details.brand}</h2>
                <p>{details.name}</p>
            </div>

            <div className="flexRowO logoContainer">
                <p>{details.rating}</p>
                <img src={isymbol} alt="information" className="informationImg"/>
                <img src={logo} alt="logo" className="logo"/>
            </div>

        </div>

        <div className="flexRows flexPadding">
            <div className="diagramDisplayContainer">
                <img src={details.img} alt={details.name}/>
            </div>
            <ul className="dataUnorderedListContainer">
                <li>
                    Leak detection with auto water shut-off
                </li>
                <li>
                    Control from your smart phone
                </li>
                <li>
                    Multiple operating modes
                </li>
                <li>
                    10 years manufacturer warranty
                </li>
            </ul>
        </div>
        <hr/>
        <div className="flexPadding">
            <h2 className="basePrice">Base Price -------------------------------------- ${details.base_price}</h2>
            <p className="installation">(installation not included)</p>
                <div></div>
            <p className="installation">Available Incentives<img src={isymbol} alt="infromation" />------------------------------------------- -${details. available_incentives}</p>
            <h2 className="equipmentHeading">Equipment Cost<img src={isymbol} alt="infromation" /> ------------------------ <span className="priceTag">$499</span></h2>
        </div>
        <div className="annualaSaveContainer">
            <h3>Your Est.Annual Savings is <span>$120</span><img src={isymbol} alt="infromation" /></h3>
        </div>
        <div className="btnContainer">
            <button className="getInstallQuoteBtn">Get Install Quote</button>
        </div>
        <div className="btnViewMore">
        <button><Link to={`/${details.brand}`} className="links">View More Details</Link></button>
        </div>
       
</li>
}

export default DataContainer;
