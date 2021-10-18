import React from "react";
import Recipe from "./Recipe";
import "../../styles.css";
import ImgeOne from "../../Avatars/imgOne.jpg";
import ImgeTwo from "../../Avatars/imgTwo.jpg";
import ImgeThree from "../../Avatars/imgThree.jpg";
import RecipeImgOne from "../../RecipeImages/recipe-one.png";
import RecipeImgTwo from "../../RecipeImages/recipe-two.jpg";

function index() {
  return (
    <div
      className="container"
      style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}
    >
      <Recipe
        imgOne={ImgeOne}
        imgTwo={ImgeTwo}
        imgThree={ImgeThree}
        recipeImg={RecipeImgOne}
        rating="4.6"
        ratingDesc="of 5 from 151 Recooker"
        recipeName="Pineapple Grilled Pork Chops"
        recipeDesc=" In the tumultuous business of cutting-in and attending to a whale,
        there is not..."
        recipeTime="120 min"
        recipeServings="servings"
      />
      <Recipe
        imgOne={ImgeOne}
        imgTwo={ImgeTwo}
        imgThree={ImgeThree}
        recipeImg={RecipeImgTwo}
        rating="4"
        ratingDesc="of 5 from 80 Recooker"
        recipeName="Basic Chicken over Angel Hair"
        recipeDesc=" Retro occupy, stumptown shabby chic pour-over roof party DIY normcore..."
        recipeTime="120 min"
        recipeServings="servings"
      />
    </div>
  );
}

export default index;
