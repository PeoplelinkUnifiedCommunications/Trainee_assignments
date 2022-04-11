import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { MdOutlineClose } from "react-icons/md";
import "./index.css";

function Header() {
  const [navBar, setNavBar] = useState(false);

  return (
    <div>
      <div className="flexCol headerContainer">
        <div className="headerContainer flexRow">
          <div className="logoImgContainer flexCol">
            <img src="logo.png" alt="logo" className="logoImage" />
          </div>
          <div className="headerSideMenu flexCol">
            {navBar ? (
              <MdOutlineClose
                className="cancelCross"
                onClick={() => setNavBar(false)}
              />
            ) : (
              <MenuIcon fontSize="large" onClick={() => setNavBar(true)} />
            )}
          </div>
        </div>
        <div
          className={`responsiveMenuContainer ${
            navBar ? "displayUnHide" : "displayHide"
          }`}
        >
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>SIGNIN</li>
            <li>SIGIUP</li>
          </ul>
        </div>
      </div>

      <div className="headerContainer1 flexCol">
        <div className="flexCol headerSub">
          <div className="flexRow headerbaseContainer">
            <div className="headerImageWrapper flexCol">
              <img src="logo.png" className="headerLogoImage" alt="logo" />
            </div>
            <ul className="flexRow headerList">
              <li>
                <span className="headerSubLists">Communication </span>
                <br /> APIs
              </li>
              <li>
                <span className="headerSubLists">Communication </span>
                <br /> Solutions
              </li>
              <li>
                <span className="headerSubLists">Communication </span>
                <br /> Service Providers
              </li>
              <li>
                <br />
                Pricing
              </li>
              <li>
                <br />
                Developer Center
              </li>
              <li>
                <br />
                Insights
              </li>
              <li className="headerHiring">
                <br />
                We are Hiring
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
