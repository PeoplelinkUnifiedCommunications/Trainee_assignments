import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import image1 from '/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/img1.png'
import logo from "/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/Energy_Star_logo.svg.png"
import info from "/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/info-tooltip.svg";
import ProductOverview from '../CardBottomContainer1';
import ProductSpecs from '../CardBottomContainer2';
import img2 from "/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/img2.png";
import img3 from "/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/img3.png";
import ReactImageMagnify from 'react-image-magnify';
// import {GlassMagnifier} from "react-image-magnifiers";

import './index.css';



function Card() {
    const[boolenValue, setBoolenValue] = useState(true)
    const[componentsBoolen, setComponentBoolen] = useState(false)

    const[img, setImg] = useState(image1)

    const[productOver, setProductOver] = useState(true)
    const[productSpec, setProductSpec] = useState(false)

    const onClickTriggerd = () => {
        setBoolenValue(true)
        setComponentBoolen(false)
    }

    const onComponentTriggred = () => {
        setComponentBoolen(true)
        setBoolenValue(false)
    }

    const onClickTriggerdProductOver = () => {
        setProductOver(true)
        setProductSpec(false)
    }

    const onComponentTriggredProductSpec = () => {
        setProductSpec(true)
        setProductOver(false)
    }

   

    const onClickTriggerded = () => {
        // console.log("Trigreed")
        setImg(img2)
        
    }

    const onClickTriggerded1 = () => {
        setImg(img3)

    }

    const onClickTriggerded0 = () => {
        setImg(image1)
    }





  return <div className="cardsTotalContainer">
      <div className="totalMainCardsBottmContainer">
      <div className="flexCol slideImagesC">
      <div className="slideImages">
        <img src={img2} alt="heaterImage" className="smallImages" onClick={onClickTriggerded}/>
      </div>
      <div className="slideImages">
      <img src={img3} alt="heaterImage" className="smallImages" onClick={onClickTriggerded1}/>
      </div>

      <div className="slideImages">
      <img src={image1} alt="heaterImage" className="smallImages" onClick={onClickTriggerded0}/>
      </div>
      </div>
  <div className="cardsContainer">
    <div className="flexRowO cardsUpperContainer">
        <div className="rheeemContainer rheemImage">
            {/* <img src={img} alt="rheem" className="rheemImage" id="productImg"/> */}



     <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: false,
        src: img,
        height:300,
        width: 150,
    },
    largeImage: {
        src: img,
        width: 2800,
        height: 1800
    }
}} /> 





        </div>

                {/* <GlassMagnifier
        imageSrc= '/home/peoplelink/myProjects/Trainee_assignments/Electric Water Heaters/heaters/src/components/Content/img1.png'
        imageAlt="Example"
        largeImageSrc="./large-image.jpg" // Optional
        />
        
        <Magnifier
        imageSrc="./image.jpg"
        imageAlt="Example"
        largeImageSrc="./large-image.jpg" // Optional
        mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} // Optional
        touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} // Optional
        /> */}




        <div className="rightSideContainer flexRow">
            <div className="topContainer">
            <h1>Rheem</h1>
            <p>50 Gal.Heat Pump Electric Water Heater</p>
            <p className="colorChangeP">XE65T10HD50U1</p>
            
        
{/*     
    <hr/> */}
   
    <ul className="cardUnorderedList">
        <li>240-Volt and with only a single 15 amph circuit breaker</li>
        <li>Best in class ENERGY STAR energy factor of 3.39 and DOE estimated energy useage is 1289 kWh/yr</li>
        <li>Household size recommendation is 3-5 people, possibly 6</li>
        <li>Simple LED interface with no complicated modes to set to achieve outstanding savings, provides easy-to-read performance information</li>
    </ul>
  
    <div className="priceTagFlexContainer">
        <h2 className="crossedPriceTag marginRight">$1,799<sup>00</sup> </h2>
        <div className="vertical paddingTop"></div>
        <div className="realPriceTagContainer">
            <h2>$799<sup>00</sup></h2>
            <p className="marginBottom">*With all incentives applied</p>
        </div>
            </div>
    <div className="marginTop cardsButtonsContainer">
        <button className= {boolenValue ? "cardsButton1": "cardsButton"} onClick={onClickTriggerd}>Get Install Quote</button>
        <button className={componentsBoolen ? "cardsButton1": "cardsButton"}  onClick={onComponentTriggred}><Link to="/" className={componentsBoolen ? "cardsButton1" :"cardBackButton"}>Back to Results</Link></button>
    </div>
    </div>
    <div className="cardLogoContainer">
    <img src={logo} alt="logo"/>
    <p>3.4 ef <img src={info} alt="info"/></p>
    </div>
    </div>
    </div>

    <div className="cardsBottomContainer">
    <div className="flexRowO workingCard">
                    <div>
                    <button className={productOver ? "buttonChangeColor": "buttonDiagram"} onClick={onClickTriggerdProductOver}>Product Overview
                    </button>
                    </div>

                    <div>
                    <button className={productSpec ? "buttonChangeColor": "buttonDiagram"} onClick={onComponentTriggredProductSpec}>Product Specs
                    </button>
                    </div>
                </div>
                <hr id="lineStyle2"/>
                <div>
                    {productOver ? 
                    <ProductOverview/> :
                    <ProductSpecs/> }
                </div>
    </div>
    </div>
  </div>
  <div className="bottomPContainer">
      <p>All valaues displayed on this page are based on standard industry assumptions, Savings number are calculated based on present day market circumstances,
         but may vary due to utility adjustments to rates or policy, or due to updates to the system design. Finance 
         payments displayed are estimates subject to credit approval and based upon current provider rates that are subject to change. Your payments and rates may be higher.
      </p>
    </div>
  </div>;
}

export default Card;
