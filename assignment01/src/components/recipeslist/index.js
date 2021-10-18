import React from "react";
import RecipeList from "./Recipelist";
import "../../styles.css";
import "./recipeliststyles.css";
import recipeImgOne from "../../RecipeImages/recipe-three.jpg";
import recipeImgTwo from "../../RecipeImages/recipe-four.jpg";
import recipeImgThree from "../../RecipeImages/recipe-five.jpg";
import recipeImgFour from "../../RecipeImages/recipe-six.jpg";

function index() {
  return (
    <div
      className="container"
      style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}
    >
      <RecipeList
        img={recipeImgOne}
        category="Camping Recipes"
        recipeDesc="The Monkey-rope is found in all whalers; but it was only in the Pequ"
      />
      <RecipeList
        img={recipeImgTwo}
        category="Good for Breakfast"
        recipeDesc="Banjo tote bag bicycle rights. High Life satorial cray craft beer."
      />
      <RecipeList
        img={recipeImgThree}
        category="8 Tips From Chef Ju..."
        recipeDesc="Bushmick meh Blue Bottle pork belly mustache skateboard 3 wolf moon"
      />
      <RecipeList
        img={recipeImgFour}
        category="Minimal Kitchen for..."
        recipeDesc="Synth polaroid bitters chillwave pickled. Vegan disrupted , Por."
      />
    </div>
  );
}

export default index;
