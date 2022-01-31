import React, { useState } from 'react';
import SearchApplicable from './Searching applicable rebates and incentives.svg'
import info from './info-tooltip.svg';
import diagram from './hpwh-process-tab.png';
import DataContainer from '../DataContainer';
import image1 from "./img1.png";
import image2 from "./img2.png";
import image3 from "./img3.png";

const eletricHeater = [
    { 
        id : "61f2c64c4fed5272dd4279ff", 
        brand : "Rheem", 
        name : " Performance Platinum 50", 
        img:image1,
        rating : " 3.4 ef", 
        base_price : "1,799", 
        available_incentives : "1,399 ",
    },

    { 
        id : "61f2c64c4fed5272dd427a00", 
        brand : "A.O.Smith", 
        name : "Elite Master 56",
        img: image2, 
        rating : " 3.4 ef", 
        base_price : "1,899", 
        available_incentives:  "1,300 ",
    },
    { 
        id : "61f2c64c4fed5272dd427a01", 
        brand : "Stiebel Eltron", 
        name : "Stiebel Eltron", 
        img: image3,
        rating : " 3.4 ef", 
        base_price : "2,899", 
        available_incentives : "1,300 ",
    }]


function Content() {
    const[boolenValue, setBoolenValue] = useState(true)
    const[componentsBoolen, setComponentBoolen] = useState(false)
    const [data, setData] = useState(eletricHeater)

    const onClickTriggerd = () => {
        setBoolenValue(true)
        setComponentBoolen(false)
    }

    const onComponentTriggred = () => {
        setComponentBoolen(true)
        setBoolenValue(false)
    }
    
return <div className="bg-container">
    <div className="flexRowContent contentContainer">
        <img src={SearchApplicable} alt="Tag Logo"/>
        <h1 className="contentHeading">Your project qualifies you for <span>incentives!</span></h1>
    </div>
    <div className="upsideComponet">
        <h1 className="mainHeading">Your Hybrid Electric Water Heater Recommended Options</h1>
        <hr/>
        <div>
            <ul className="flexRows unOrderListContainer">
            {data.map(eachItem => 
                <DataContainer key={eachItem.id}
                details = {eachItem}
                />
            )}
            </ul>
        </div>
        <div className="upsideButtonContainer">
            <button className="upsideButton">See More Options</button>
        </div>

        <div>
            <h1 className="upsideHeading">The Heat Pump Hot Water Advantage</h1>
            <div className="flexRow">
                <div className="flexContainer">
                <h1 className="flexHeading">Clean & Health Air  <img src={info} alt="info Tag"/></h1>
                <p className="flexPara">No in-home air pollution or greenhouse gas emissions</p>
                </div>
                <div className="flexContainer">
                    <h1 className="flexHeading">Reduced Carbon Footprint  <img src={info} alt="info Tag"/></h1>
                    <p className="flexPara">Carbon offset equivalent for your home equals <span>23 trees planted</span></p>
                </div>
                <div className="flexContainer">
                    <h1 className="flexHeading">Lower Energy Bills  <img src={info} alt="info Tag"/></h1>
                    <p className="flexPara">Up to 75% reduction in energy use</p>
                </div>
            </div>
        </div>
        <hr/>


        {/* <hr className={boolenValue ? "horizontalLine": "horizontalLineFalse"} */}
        {/* <hr
                    className={componentsBoolen ? "horizontalLine": "horizontalLineFalse"} */}
        <div>
            <h1 className="flexHeading">How Hybrid Electric Water Heaters Work</h1>
            <div className="bottomContentContainer flexColumnContent">
                <div className="flexRowO workingCard">
                    <div>
                    <button className={boolenValue ? "buttonChangeColor": "buttonDiagram"} onClick={onClickTriggerd}>Process
                    </button>
                    </div>

                    <div>
                    <button className={componentsBoolen ? "buttonChangeColor": "buttonDiagram"} onClick={onComponentTriggred}>Components
                    </button>
                    </div>
                    
                </div>
                <hr id="lineStyle2"/>
                <p className="flexPara">Lorem ipsum dolor sit amet, consectetus adipiscing elit sed do elusmod tempor incididunt ut labore et dolare magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute inure dolor in repehenderit in velit esse cillum dolore eu fugiat nulla pariature. Excepteur sint occaecat cupidatat non proident sunt in culpa qui offcia deserunt mollit anim id est laborum</p>
                <div className="imageDiagramContainer">
                    <img src={diagram} alt="daigram" className="bottomDaigram"/>
                </div>
            </div>
        </div>
        <p className="bottomPara margin paddingTop">All values displayed on this page are based on standard industry assumptions. Savings number are calculated based on present day market circumstances, but may vary due to utlity adjustments to 
        rates or policy, or due to updates to the system design . Finance payments displayed are estimates subject to credit approval and based upon current provides rates that are subject to change. Your 
        payments and rates may be heigher.
    </p>
    
    </div>
</div>;
}

export default Content;
