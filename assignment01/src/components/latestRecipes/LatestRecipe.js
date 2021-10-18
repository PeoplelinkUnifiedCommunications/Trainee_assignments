import React from "react";
import "../recipes/recipestyles.css";
import Avatar from "../Avatarslist/Avatarslist";
import ImgeOne from "../../Avatars/imgOne.jpg";
import ImgeTwo from "../../Avatars/imgTwo.jpg";
import ImgeThree from "../../Avatars/imgThree.jpg";

function LatestRecipe(props) {
  return (
    <>
      <div className="latestrecipe_wrapper">
        <div className="latestrecipe_img">
          <img src={props.img} alt="" />
        </div>
        <div className="latestrecipe_details">
          <h3 className="latestrecipe_name">{props.name}</h3>
          <div className="avatars_ratings latest_ratings">
            <div className="avatars">
              <Avatar img={ImgeOne} />
              <Avatar img={ImgeTwo} />
              <Avatar img={ImgeThree} />
            </div>
            <div className="recipe_rating">
              <p>
                <span style={{ color: "orange" }}>
                  <i class="fa fa-star"></i>&nbsp; {props.rating}
                </span>
                &nbsp; {props.desc}
              </p>
            </div>
          </div>
          <div className="recipe_prep_time_serving latest_servings">
            <span>
              <i class="fas fa-clock"></i> {props.time} min
            </span>
            <span>
              <i class="fas fa-concierge-bell"></i> {props.serving} Servings
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LatestRecipe;
