import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Recipes from "./components/recipes/index";
import Recipelist from "./components/recipeslist/index";
import LatestRecipe from "./components/latestRecipes/index";
import CollectionList from "./components/collections/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Recipes />
      <Recipelist />
      <LatestRecipe />
      <CollectionList />
    </div>
  );
}

export default App;
