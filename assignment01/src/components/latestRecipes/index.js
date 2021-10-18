import React from "react";
import LatestRecipe from "./LatestRecipe";
import "../../styles.css";
import "./latestrecipestyles.css";
import imgOne from "../../RecipeImages/recipe-one.png";
import imgTwo from "../../RecipeImages/recipe-two.jpg";
import imgThree from "../../RecipeImages/recipe-three.jpg";
import imgFour from "../../RecipeImages/recipe-four.jpg";
import imgFive from "../../RecipeImages/recipe-five.jpg";
import imgSix from "../../RecipeImages/recipe-six.jpg";

function index() {
  const latestRecipe = [
    {
      name: "Rosemary Lemon Grilled Lamb Beef",
      time: "120",
      servings: "8",
      desc: "from 20 Recooker",
      rating: "4.5",
      img: `${imgOne}`,
    },
    {
      name: "Cooked Roastbeef meat with grilled vegetab...",
      time: "80",
      servings: "2",
      desc: "from 20 Recooker",
      rating: "4.5",
      img: `${imgTwo}`,
    },
    {
      name: "Healthy breakfast yogurt bowls",
      time: "30",
      servings: "4",
      desc: "from 20 Recooker",
      rating: "4.5",
      img: `${imgThree}`,
    },
    {
      name: "Best steak Marinade in Existence",
      time: "100",
      servings: "6",
      desc: "from 54 Recooker",
      rating: "3.8",
      img: `${imgFour}`,
    },
    {
      name: "Chicken Cacciatore in a Slow Cooker",
      time: "65",
      servings: "12",
      desc: "from 15 Recooker",
      rating: "4.2",
      img: `${imgFive}`,
    },
    {
      name: "Rosemary Lemon Grilled Lamb Beef",
      time: "10",
      servings: "5",
      desc: "from 10 Recooker",
      rating: "4.8",
      img: `${imgSix}`,
    },
  ];

  return (
    <div className="container">
      <div className="latestrecipes_header">
        <h4>Latest Recipes</h4>
        <p>See all recipes &#x25B8;</p>
      </div>
      <div style={{ display: "flex", gap: "2em", flexWrap: "wrap" }}>
        {latestRecipe.map((item) => (
          <LatestRecipe
            img={item.img}
            name={item.name}
            rating={item.rating}
            serving={item.servings}
            time={item.time}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default index;
