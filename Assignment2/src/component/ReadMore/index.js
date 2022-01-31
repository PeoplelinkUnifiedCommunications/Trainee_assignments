import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './index.css'

export default function ReadMore() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="slickContainer">
    <div style={{ width: "900px", height:"350px", backgroundColor: "transparent", padding: "10px"}}> 
    <h1 className="title">Accolades & Link-Ups</h1>
    <Slider {...settings}>
      
      <div>
        <img src='http://www.pbsiddhartha.ac.in/img/pbsiddhartha-natonal-digitak-libraray-of-india.jpeg'
        alt='link1' className="imageEdit"/>
      </div>
      <div>
      <img src='http://www.pbsiddhartha.ac.in/img/accolade1.jpeg'
        alt='link2' className="imageEdit"/>
      </div>
      <div>
      <img src='http://www.pbsiddhartha.ac.in/img/End%20now.png'
        alt='link3' className="imageEdit"/>
      </div>
      <div>
      <img src='http://www.pbsiddhartha.ac.in/img/Coursera.png'
        alt='link4' className="imageEdit"/>
      </div>
      <div>
      <img src='http://www.pbsiddhartha.ac.in/img/naac-logo.jpg'
        alt='link5' className="imageEdit"/>
      </div>
      <div>
        <img src="http://www.pbsiddhartha.ac.in/img/iso2015-1024x395.png" 
        alt='link6'
        className="imageEdit"/>
      </div>
      <div>
        <img src='http://www.pbsiddhartha.ac.in/img/PAN_Cybersecurity-Academy_Logo.png'
        alt='link7'
        className="imageEdit"/>
      </div>
      <div>
        <img src='http://www.pbsiddhartha.ac.in/img/msdn.jpg'
        alt='link8'
        className="imageEdit"/>
      </div>
    </Slider>
    </div>
    <div className="event-container">
      <h1 className="title">Events</h1>
      <div className="app-containers">
          <div className="event-app-container">
            <div>
                <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/events/18-09-2021-1631954805WhatsApp%20Image%202021-09-18%20at%202.07.58%20PM.jpeg' className="workshop-image" alt='event1'/>
            </div>
            <div className="worshop-div">
                <p className="workshop-name">Workshop on Everyone's Data Science</p>
                <p>By <span className="spanEl">Department of BBA Business Analytics </span>2021-09-15</p>
            </div>
          </div>
          <div className="event-app-container">
            <div>
                <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/events/18-09-2021-16319549182.jpg' className="workshop-image" alt='event1'/>
            </div>
            <div className="worshop-div">
                <p className="workshop-name">Webinar on Nutrition the best wasy to improve Improve Immunity</p>
                <p>By <span className="spanEl">Women Empowerment Cell </span>2021-07-15</p>
            </div>
          </div>
          <div className="event-app-container">
            <div>
                <img src='http://www.pbsiddhartha.ac.in/pb%C2%AE/admin/events/18-09-2021-16319548791.jpg' className="workshop-image" alt='event1'/>
            </div>
            <div className="worshop-div">
                <p className="workshop-name">Webinar on Business Use Cases and Machine Learning Deployement Models</p>
                <p>By <span className="spanEl">Department of BBA Business Analytics </span>2021-07-21</p>
            </div>
          </div>
        </div>
    </div>
</div>
  );
}