import React from "react";
import "./recipeliststyles.css";

function Recipelist(props) {
  return (
    <div className="recipelist_wrapper">
      <img src={props.img} alt="" />
      <span className="recipe_blog">BLOG POST</span>
      <h4 className="recipe_catgory">{props.category}</h4>
      <p className="recipe_desc">{props.recipeDesc}</p>
    </div>
  );
}

export default Recipelist;
