import React from "react";
import "./style.css";
function Offers() {
    return (
        
        <div className="flexRow mrgnBSM cardCntnr">
          <div className="cardOuterCntnr">
            <div className="cardInnerCntnr">
              <div className="exploreSubHeading">
                <h1>Festive Offers TVs &</h1>
                <h1>appliances</h1>
              </div>
              <div className="gadgetsCntnr">
                <div className="image">
                <img className="cardImg" src="./images/ecommerce-explore-tv-img.png" alt="tv" width="100%"/>
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