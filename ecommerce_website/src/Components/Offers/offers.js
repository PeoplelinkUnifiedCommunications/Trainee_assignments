import React from "react";
import "./style.css";
function Offers() {
    return (
        
        <div className="flexCol cardCntnr1">
          <div className="cardOuterCntnr">
            <div className="cardInnerCntnr">
              <div className="exploreSubHeading">
                <h1>Up to 80% Off | Electronics</h1>
                <h1>& Gadgets</h1>
              </div>
              <div className="gadgetsCntnr">
                <div className="image">
                <img className="cardImg" src="./images/ecommerce-explore-tv-img.png" alt="tv" width="450px"/>
                </div>
              </div>
              <div className="mrgnHMD">
                    <span className="seeAllDeals">See All Deals &rarr;</span>
              </div>
            </div>
          </div>
        </div>
    )
}
export default Offers;