import React from "react";
import "./ImageContainer.css";
import ImageDetailsContainer from "./ImageDetailsContainer";

function ImageContainer() {
  return (
    <>
      <div className="totalimageContainer">
        {/* <div className="shortsideimages">
          <h6>shortsideimages image1</h6>
          <h6>shortsideimages image2</h6>
          <h6>shortsideimages image3</h6>
        </div> */}
        <div className="bigsizeimageContainer">
          <img className="bigImage" src="ProjectImages/img1.png" alt="img1" />
        </div>
        <ImageDetailsContainer />
      <img style={{height:'10%'}} src="ProjectImages/Energy_Star_logo.svg.png" alt="EnergyImg" />
      </div>
    
    </>
  );
}

export default ImageContainer;
