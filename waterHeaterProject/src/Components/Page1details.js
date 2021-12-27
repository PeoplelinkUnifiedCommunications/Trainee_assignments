import React from "react";
import "./Page1details.css";
import ImageContainer from "./ImageContainer";
import ProductOverview from "./ProductOverview";
import ProdOverview from "./ProdOverview";
import ProdPrice from "./ProdPrice";



function Page1details() {
  return (
    <>
    <div>
      <div className="headerpage1">
        <p>
          Heat Pump Electric Water Heater &gt;
          <span> Rheem Performance Platinum 50</span>
        </p>
        <div>
          <button className="previousBtn">Previous</button>
          <button className="mextBtn">Next</button>
        </div>
      </div>
      <hr />
     

    <ImageContainer/>
    
    </div>
    <ProductOverview/>
    <div className='prodsmallcards'>
    <div style={{display:'flex',flexWrap:'wrap', width:'75%' , borderRight:'1px solid gray'}}>

    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    <ProdOverview/>
    </div> 
      <ProdPrice/>
    </div> 
    </>
  );
}

export default Page1details;
