import React from "react";
import "../../styles.css";
import "./recipestyles.css";
import Avatar from "../Avatarslist/Avatarslist";

function Recipe(props) {
  return (
    <div className="recipe_container">
      <div className="recipe_wrapper">
        <div className="recipe_details">
          <span className="recipe">Recipe</span>
          <div className="avatars_ratings">
            <div className="avatars">
              <Avatar img={props.imgOne} />
              <Avatar img={props.imgTwo} />
              <Avatar img={props.imgThree} />
            </div>
            <div className="recipe_rating">
              <p>
                <span style={{ color: "orange" }}>
                  <i class="fa fa-star"></i>&nbsp;{props.rating}
                </span>
                &nbsp;{props.ratingDesc}
              </p>
            </div>
          </div>
          <h3 className="recipe_name">{props.recipeName}</h3>
          <p className="recipe_prep">{props.recipeDesc}</p>
          <div className="recipe_prep_time_serving">
            <span>
              <i class="fas fa-clock"></i> {props.recipeTime}
            </span>
            <span>
              <i class="fas fa-concierge-bell"></i> {props.recipeServings}
            </span>
          </div>
        </div>
        <div className="recipe_img">
          <img src={props.recipeImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
