import React from "react";

import Header from "./Container/Header/header";
import Dashboard from "./Container/Dashboard/dash";
import Footer from "./Container/Footer/footer";

function App() {
  return (
    <div className="baseContainer">
      <Header/>
      <Dashboard/>
      <Footer/>

     
    </div>
  );
}

export default App;
