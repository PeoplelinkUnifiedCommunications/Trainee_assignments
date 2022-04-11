import React from "react";
import Header from "../header";
import "./index.css";

function Body() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="bodyContainer">
        <div className="flexCol bodyUpperContainer">
          <h4>INTRODUCING ENABLEX</h4>
          <h1>Build Powerful Apps With EnableX</h1>
          <p className="bodyUpperFirstPar">
            The Engagement Platform For Live Video, Voice and Messaging
          </p>
          <p className="bodyUpperParagraph">
            Carrier-grade, customisable and AI-enabled solutions for secured
            business communications without any additional infrastructure.
          </p>
        </div>
        <div className="bodyHomeImageContainer">
          <img
            src="home-banner1.png"
            alt="homeBanner"
            className="homeBannerImg"
          />
        </div>
        <div className="flexRow bodyTryContactCont">
          <div className="tryButtonContainer">
            <button>Try for Free</button>
          </div>
          <div className="contactButtonContainer">
            <button>Contact Sales</button>
          </div>
        </div>
        <div className="bodyCustomersCon">
          <div className="flexRow bodyImageCards1">
            <div className="flexRow bodyScrollImages">
              <div className="cImageContainer">
                <img src="cImage1.png" alt="customer1" className="cImage1" />
              </div>
              <div className="cImageContainer">
                <img src="engage.png" alt="customer1" className="cImage1" />
              </div>
              <div className="cImageContainer">
                <img src="infosys.png" alt="customer1" className="cImage1" />
              </div>
              <div className="cImageContainer">
                <img
                  src="Samarpan-Final-Logo.png"
                  alt="customer1"
                  className="cImage1"
                />
              </div>
              <div className="cImageContainer">
                <img src="vlcc.png" alt="customer1" className="cImage1" />
              </div>

              <div className="cImageContainer">
                <img src="rx.png" alt="customer1" className="cImage1" />
              </div>

              <div className="cImageContainer">
                <img
                  src="unicorn-logo.png"
                  alt="customer1"
                  className="cImage1"
                />
              </div>

              <div className="cImageContainer">
                <img
                  src="smart-event.png"
                  alt="customer1"
                  className="cImage1"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bodyViewContainer">
          <div className="viewCustomerCon">
            <button>View Customer Stories</button>
          </div>
        </div>

        <div className="cardsInfoConainer flexCol">
          <div className="card1Container1 flexCol">
            <h2>
              Build In-app <br />
              Omnichannel Conversations.
            </h2>
            <p className="bodyPara">It’s that easy with</p>
            <p className="bodyEnable">EnableX Communication APIs</p>
            <div className="buildImagesContainer">
              <img
                src="build-app1.png"
                alt="build-app1"
                className="bodyBuildImg1"
              />
            </div>
            <p className="bodyDescription">
              Use the programming language of your choice to quickly and easily
              build production-ready Live Video, Voice, and Messaging
              applications on the Developer-trusted, API-powered platform.
            </p>
            <div className="bodyDescriptionbutton1">
              <button>Programmable APIs and SDKs</button>
            </div>
          </div>

          <div className="card1Container1 flexCol">
            <h2>You Design.</h2>
            <p className="bodyPara">It’s that Magical with</p>
            <p className="bodyEnable">EnableX Visual Builder</p>
            <div className="buildImagesContainer">
              <img
                src="pink-visual.png"
                alt="build-app1"
                className="bodyBuildImg1"
              />
            </div>
            <p className="bodyDescription">
              Embed powerful video calling to your app or sites in minutes.
              Powered by the world’s only Visual Builder tool, you can design
              your very own UI with just a few clicks, drags and drops.
            </p>
            <div className="bodyDescriptionbutton1">
              <button>No-Code Visual Builder</button>
            </div>
          </div>
        </div>
      </div>



      <div className="bodyUpContainer1" id="home">
          <div className="bodyTopContainer">
            <div className="flexRow bodySubContainer">
              <div className="flexRow bodyTop">
                <div className="flexCol bodyInfo">
                  <h4>INTRODUCING ENABLEX​</h4>
                  <h1>
                    <span className="">Build Powerful Apps With EnableX</span>{" "}
                    <br /> The Engagement Platform For <br />
                    Live Video, Voice and Messaging
                  </h1>
                  <p>
                    Carrier-grade, customisable and AI-enabled solutions for
                    secured business <br />
                    communications without any additional infrastructure.
                  </p>
                </div>
                <div className="homeBannerImgContainer flexCol">
                  <img
                    src="home-banner1.png"
                    className="bodyImage"
                    alt="home"
                  />
                </div>
              </div>
            </div>
            <div className="flexRow bodyButtonContainer">
              <button className="bodyButton1">Try for Free</button>
              <button className="bodyButton2">Contact Sales</button>
            </div>

            <div className="flexCol bodyCContainer" id="about">
              <div className="flexRow bodyImageCards">
                <div className="flexRow bodyScrollImages">
                  <div className="cImageContainer">
                    <img
                      src="cImage1.png"
                      alt="customer1"
                      className="cImage1"
                    />
                  </div>
                  <div className="cImageContainer">
                    <img src="engage.png" alt="customer1" className="cImage1" />
                  </div>
                  <div className="cImageContainer">
                    <img
                      src="infosys.png"
                      alt="customer1"
                      className="cImage1"
                    />
                  </div>
                  <div className="cImageContainer">
                    <img
                      src="Samarpan-Final-Logo.png"
                      alt="customer1"
                      className="cImage1"
                    />
                  </div>
                  <div className="cImageContainer">
                    <img src="vlcc.png" alt="customer1" className="cImage1" />
                  </div>

                  <div className="cImageContainer">
                    <img src="rx.png" alt="customer1" className="cImage1" />
                  </div>

                  <div className="cImageContainer">
                    <img
                      src="unicorn-logo.png"
                      alt="customer1"
                      className="cImage1"
                    />
                  </div>

                  <div className="cImageContainer">
                    <img
                      src="smart-event.png"
                      alt="customer1"
                      className="cImage1"
                    />
                  </div>
                </div>
              </div>
              <div className="flexRow bodyCustomerButton">
                <button className="bodyViewCustomerButton">
                  View Customer Stories
                </button>
              </div>
            </div>

            <div className="flexRow bodyCardsBuild1">
              <div className="cardsContainer1">
                <h2>
                  Build In-app <br />
                  Omnichannel Conversations.
                </h2>
                <p className="bodyPara">It’s that easy with</p>
                <p className="bodyEnable">EnableX Communication APIs</p>
                <div className="buildImagesContainer">
                  <img
                    src="build-app1.png"
                    alt="build-app1"
                    className="bodyBuildImg"
                  />
                </div>
                <p className="bodyDescription">
                  Use the programming language of your choice to quickly and
                  easily build production-ready Live Video, Voice, and Messaging
                  applications on the Developer-trusted, API-powered platform.
                </p>
                <div className="bodyDescriptionbutton">
                  <button>Programmable APIs and SDKs</button>
                </div>
              </div>

              <div className="cardsContainer1">
                <h2>
                  You Design.

                 </h2>
                <p className="bodyPara">It’s that Magical with <br/><br/> </p>
                <p className="bodyEnable">EnableX Visual Builder <br/><br/></p>
                <div className="buildImagesContainer">
                  <img
                    src="pink-visual.png"
                    alt="build-app1"
                    className="bodyBuildImg"
                  />
                </div>
                <p className="bodyDescription">
                  Embed powerful video calling to your app or sites in minutes.
                  Powered by the world’s only Visual Builder tool, you can
                  design your very own UI with just a few clicks, drags and
                  drops.
                </p>
                <div className="bodyDescriptionbutton">
                  <button>No-Code Visual Builder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Body;
