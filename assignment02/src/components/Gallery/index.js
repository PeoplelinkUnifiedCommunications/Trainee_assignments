import React from "react";

import "./index.css";

function Gallery() {
  return (
    <div className="mainContainer">
      <div className="bgImage">
        <h1 className="head">Small Gallery of Aditya Engg College</h1>
        <img className="p1"
          src="https://image3.mouthshut.com/images/Restaurant/Photo/-21693_148663.png" alt="im1"
        />
        <img className="p2"
          src="https://aditya.ac.in/degree/assets/img/slides/6.jpg" alt="im2"
        />
        <img className="p3"
          src="https://www.adityadesign.org/images/service_images/service-14979406572.jpg" alt="im3"
        />
        <img className="p4"
          src="http://adityanursing.in/wp-content/uploads/2019/03/Academics-Excellence-12.jpg" alt="im4"
        />
      </div>
    </div>
  );
}
export default Gallery;
