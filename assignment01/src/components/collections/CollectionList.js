import React from "react";
import "./collectionstyles.css";
import imgOne from "../../RecipeImages/recipe-two.jpg";
import imgTwo from "../../RecipeImages/recipe-three.jpg";
import imgThree from "../../RecipeImages/recipe-four.jpg";
import imgFour from "../../RecipeImages/recipe-five.jpg";

function CollectionList(props) {
  return (
    <div className="collection_wrapper">
      <h4>{props.name}</h4>
      <p>Latest added 4 Days ago</p>
      <div className="img_grid">
        <img src={imgOne} alt="" />
        <img src={imgTwo} alt="" />
        <img src={imgThree} alt="" />
        <div className="more_img">
          <img src={imgFour} alt="" />
          <div>
            <span>8&nbsp;+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionList;
