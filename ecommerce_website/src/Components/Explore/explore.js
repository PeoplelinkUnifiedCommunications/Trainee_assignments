import React from "react";
import "@fontsource/roboto";
import Offers from "../Offers/offers";
import Accessories from "../Accessories/accessories";
import "./style.css";

function Explore() {
  return (
    <div className="exploreBgContainer">
      <div className="flexRow header"></div>
      <div className="innerCntnr">
        <div className="exploreHeading">
          <h1>Explore Deals & </h1>
          <h1>Offers</h1>
        </div>

        <div className="flexCol cardCntnr">
          <div className="cardOuterCntnr">
            <div className="cardInnerCntnr">
              <div className="exploreSubHeading">
                <h1>Up to 80% Off | Electronics</h1>
                <h1>& Gadgets</h1>
              </div>
              <div className="gadgetsCntnr">
                <div className="image">
                  <img
                    className="ecommerce"
                    src="./images/ecommerce-explore-mamba-watch-img.png"
                    alt="watch"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      Smart Watch
                    </span>
                  </div>
                </div>

                <div className="image">
                  <img
                    className="ecommerce"
                    src="./images/ecommerce-explore-camera-img.png"
                    alt="watch"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      Cameras
                    </span>
                  </div>
                </div>
                <div className="image">
                  <img
                    className="ecommerce"
                    src="./images/ecommerce-explore-sport-and-fitness-img.png"
                    alt="watch"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      Sports & Fitness
                    </span>
                  </div>
                </div>
                <div className="image">
                  <img
                    className="ecommerce"
                    src="./images/ecommerce-explore-ear-phones-pink-img.png"
                    alt="watch"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      Earphones
                    </span>
                  </div>
                </div>
              </div>
                <div className="mrgnHMD">
                    <span className="seeAllDeals">See All Deals &rarr;</span>
                </div>
            </div>
          </div>
        </div>

        

      </div>

      <Offers />
      <Accessories/>
        
    </div>
  );
}
export default Explore;
