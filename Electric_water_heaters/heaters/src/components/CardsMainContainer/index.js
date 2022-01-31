import React from 'react';
import arrow from './arrow-144-128.png';
import Card from '../Card';
import './index.css';
function CardsMainContainer() {
  return <div className="mainContainerCards">
    {/* <div>
      <div>
        <img src={img2} alt="heaterImage" className="smallImages"/>
      </div>
    </div> */}
    <div className="flexMainCardsContainer">
    <p>Heat Pump Electric Water Heater &gt; <span>Rheem Performance Platinum 50</span>  </p>
    <div className="mainButtonContainer flexRow">
      <button className="flexRow">
      <div className="leftSideArrow">
      <img src={arrow} alt="Left Arrow Orange Png @clipartmax.com" className="arrow"/>
      </div>
      <p className="leftButtonP">Previous</p>
      </button>
    <button className="flexRow">
      <p className="rightButtonP">Next</p>
      <div className="rightSideArrow">
      <img src={arrow} alt="Left Arrow Orange Png @clipartmax.com" className="rightarrow"/>
      </div>
    </button>
    </div>
    </div>
    <hr/>
      {/* <div className="flexCol">
      <div className="slideImages">
        <img src={img2} alt="heaterImage" className="smallImages"/>
      </div>
      <div className="slideImages">
      <img src={img3} alt="heaterImage" className="smallImages"/>
      </div>
      </div> */}
    <div className="mainCardsContainer">
    <Card/>
    </div>
  </div>;
}

export default CardsMainContainer;