import React from "react";
import "./style.css";
function Accessories() {
  return (
    <div className="flexRow mrgnBSM cardCntnr">
      <div className="cardOuterCntnr">
        <div className="cardInnerCntnr">
          <div className="exploreSubHeading">
            <h1>Under Rs 4000 | Friendly</h1>
            <h1>Accessories</h1>
          </div>
          <div className="pdngL gadgetsCntnr">
            <div className="flexRow imgsCntnr">
              <div className="image">
                <img
                  className="ecommerce"
                  src="./images/ecommerce-explore-small-tablet-device-img.png"
                  alt="watch"
                  width="60%"
                />
                <div className="mrgnHMD">
                  <span className="spanElement">Tablet</span>
                </div>
              </div>

              <div className="image">
                <img
                  className="ecommerce"
                  src="./images/ecommerce-explore-joy-stick-img.png"
                  alt="watch"
                  width="60%"
                />
                <div className="mrgnHMD">
                  <span className="spanElement">PlayStation</span>
                </div>
              </div>
            </div>

            <div className="flexRow imgsCntnr">
              <div className="image">
                <img
                  className="ecommerce"
                  src="./images/ecommerce-explore-speakers-big-img.png"
                  alt="watch"
                  width="60%"
                />
                <div className="mrgnHMD">
                  <span className="spanElement">Speakers</span>
                </div>
              </div>
              <div className="image">
                <img
                  className="ecommerce"
                  src="./images/ecommerce-explore-vr-set-img.png"
                  alt="watch"
                  width="60%"
                />
                <div className="mrgnHMD cntr">
                  <span className="spanElement cntr">Virtual Reality Set</span>
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
  );
}
export default Accessories;
