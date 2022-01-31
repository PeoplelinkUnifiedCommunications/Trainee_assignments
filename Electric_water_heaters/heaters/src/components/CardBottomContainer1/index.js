import React from 'react';
import RightClick from "./right-check.svg";
import info from "/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/info-tooltip.svg"
import './index.css';

function ProductOverview() {
  return <div className="productOverviewContainer">
    <div className="productPargarph">
        <p>Accelera heat pump water heaters save up to 80% of hot water costs because they extract heat to make hot water from energy in the air. 
            The heat pump drews less energy than a toaster while it is running and making hot water, in warm climates. 
            Accelera can be placed in a garage, where it uses the heat from the outside air, or inside the house, where it helps 
            with air conditioning
        </p>
    </div>
    <div className="flexRowO">
      <div className="cardSubOnesidePart">
        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Save Money & Energy</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Energy Saving Scheduling</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        {/* second sub container*/}


        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Carbon Footprint</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Heat Pump Technology</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>


        {/* third sub container*/}


        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Operation Modes & Scheduling</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Diagnostic Mode</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        {/* fourth sub container*/}
        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Demand Response Scheduling</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Set Vacation or Away Mode</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        <div className="cardSubOneContainer">
            <div className="cardsSubHeadingContainer">
                <img src={RightClick} alt="rightClick"/>
                <h3>Energy Use Tracking</h3>
            </div>
            <p>The ProTerra Hybrid uses 75% less energy than a standard electrica water heater to help minimize your impact on the environment - 
                that's 4X more efficient than a standard electric water heater.
            </p>
        </div>

        </div>
        <div className="cardSubPriceTag">
            <h3 id="heading">Base Price  ---------------  $1,799</h3>
            <label htmlFor="heading">(instalation not included)</label>
            <p>Federal Tax Credit<img src={info} alt="info"/> ------------- -$200</p>
            <p>Federal Tax Credit<img src={info} alt="info"/> ------------ -$100</p>
            <p>Utility Incentives<img src={info} alt="info"/> --------------  -$1,000</p>

            <h2>Equipment Cost <img src={info} alt="info"/> -------- <span>$400</span></h2>
            <div className="annualSaveContainer">
                <p>Your Est.Annual Savings is <span>$120</span><img src={info} alt="info"/></p>
            </div>
        </div>

    </div>
  </div>;
}

export default ProductOverview;
