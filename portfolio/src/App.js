import React from "react";
import Header from "./Components/Header/header";
import Home from "./Components/Home/home";
import Home1 from "./Components/Home1/home1";
import Home2 from "./Components/Home2/home2";
import Home3 from "./Components/Home3/home3";
import Home4 from "./Components/Home4/home4";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="baseContainer">
      <Header/>
      <Home />
      <Home1 />
      <Home2 />
      <Home3 />
      <Home4 />
      <Footer />
    
    </div>
  );
}
export default App;
