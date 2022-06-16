import React from "react";
import "./style.css";
function Accessories() {
    return (
        <div className="exploreBgContainer">
        <div className="flexCol cardCntnr1">
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
                    src="./images/ecommerce-explore-small-tablet-device-img.png"
                    alt="Tablet"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      Tablet
                    </span>
                  </div>
                </div>

                <div className="image">
                  <img
                    className="ecommerce"
                    src="./images/ecommerce-explore-joy-stick-img.png"
                    alt="Joystick"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      PlayStation
                    </span>
                  </div>
                </div>
                <div className="image">
                  <img
                    className="ecommerce"
                    src="./images/ecommerce-explore-speakers-big-img.png"
                    alt="Speakers"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      Speakers
                    </span>
                  </div>
                </div>
                <div className="image">
                  <img
                    className="ecommerce"
                    src="./images/ecommerce-explore-vr-set-img.png"
                    alt="VR Set"
                    width="200px"
                  />
                  <div className="mrgnHMD">
                    <span className="spanElement jsCenter">
                      Virtual Reality Set
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

    )
}
export default Accessories;