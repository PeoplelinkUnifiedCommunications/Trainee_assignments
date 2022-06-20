import React from "react";
import "@fontsource/roboto";
// import Offers from "../Offers/offers";
// import Accessories from "../Accessories/accessories";
import "./style.css";

function Explore() {
  return (
    <div className="flex pdngVLG homeBgCntnr">
      <div className="flexRow header"></div>
      <div> 
        <h1 className="fontLG">Explore Deals & Offers</h1>
      </div>
      <div className="flexRow flexWrap jcSpaceBtwn">
        <div className="cardContainerBg mrgnHMD bg mrgnSM">
          <div>
          <h1 className="fontMD">Up to 80% Off | Electronics & Gadgets</h1>
          </div>
          <div>
            <div>
            <div>
              <img className="ecommerce" src="./images/ecommerce-explore-mamba-watch-img.png" alt="watch" width="60%"/>
            </div>
            <div>
              <span className="spanElement">Smart Watch</span>
            </div>
            <div>
            </div>

            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="cardContainer mrgnHMD">
         <h1>hai</h1>
        </div>
        <div className="cardContainer mrgnHMD">
          <h1>hai</h1>
        </div>

      </div>

    </div>
  );
}
export default Explore;

/* <div className="exploreBgContainer">
      
      <div className="innerCntnr">
        <div className="exploreHeading">
          <h1>Explore Deals & </h1>
          <h1>Offers</h1>
        </div>

        <div className="flexRow mrgnBSM cardCntnr">
          <div  className="exploreCntnr">
          <div className="mrgnBSM cardOuterCntnr">
            <div className="cardInnerCntnr">
              <div className="exploreSubHeading">
                <h1>Up to 80% Off | Electronics</h1>
                <h1>& Gadgets</h1>
              </div>
              <div className="pdngL gadgetsCntnr">
                <div className="flexRow imgsCntnr">
                  <div className="image">
                    <img
                      className="ecommerce"
                      src="./images/ecommerce-explore-mamba-watch-img.png"
                      alt="watch"
                      width="60%"
                      
                    />
                    <div className="mrgnHMD">
                      <span className="spanElement cntr">Smart Watch</span>
                    </div>
                  </div>

                  <div className="image">
                    <img
                      className="ecommerce"
                      src="./images/ecommerce-explore-camera-img.png"
                      alt="watch"
                      width="60%"
                    />
                    <div className="mrgnHMD">
                      <span className="spanElement">Cameras</span>
                    </div>
                  </div>
                </div>

                <div className="flexRow imgsCntnr">
                  <div className="image">
                    <img
                      className="ecommerce"
                      src="./images/ecommerce-explore-sport-and-fitness-img.png"
                      alt="watch"
                      width="60%"
                    />
                    <div className="mrgnHMD">
                      <span className="spanElement">
                        Sports & Fitness
                      </span>
                    </div>
                    </div>
                  <div className="image">
                    <img
                      className="ecommerce"
                      src="./images/ecommerce-explore-ear-phones-pink-img.png"
                      alt="watch"
                      width="60%"
                    />
                    <div className="mrgnHMD">
                      <span className="spanElement mrgnSM">Earphones</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mrgnHMD">
                <span className="seeAllDeals">See All Deals &rarr;</span>
              </div>
              </div>
            </div>
          </div>
          <div className="offersCntnr">
            <Offers />
          </div>
          <div className="accessoriesCntnr">
            <Accessories />
          </div>
        
        </div>
      </div>
    </div> */
