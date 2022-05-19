import React from "react";
import { BiMenuAltRight } from "react-icons/bi";
import "./home.css";

function Home() {
  return (
    <div className="doubleCntnr">
      <div className="flexRow header">
        <h1 className="nm">Marti</h1>
        <a className="menu-icon" href="/menu">
          <BiMenuAltRight />
        </a>
      </div>
      <div className="cntCntnr">
        <div className="imtxtCntnr">
          <div className="txtCntnr">
            <div className="role">
              <span className="ui">UI/UX</span>
              <br />
              <span className="dev">Developer.</span>
            </div>
            <div className="about">
              <span className="sp1">
                I like to craft solid and scalable ui
              </span>
              <br />
              <span className="sp2">products with great user experiences.</span>
            </div>
          </div>
          <div className="imgCntnr">
            <img className="developer"
              src="./images/developer.jpeg"
              alt="ui/ux developer"
              width="350px"
              height="340px"
            />
          </div>
        </div>
        <div className="section">
          <div className="sec1">
            <span>Highly skilled at progressive</span>
            <br />
            <span>enhancements,design systems & UI</span>
            <br />
            <span>Engineering.</span>
          </div>
          <div className="sec2">
            <span>Highly skilled at progressive</span>
            <br />
            <span>enhancements,design systems & UI</span>
            <br />
            <span>Engineering.</span>
          </div>
        </div>
      </div>
      <div className="imgCntnr1">
        <img className="dev" src="./images/developer.jpeg" alt = "developer" width="220px" height="200px"/>
      </div>
    </div>
  );
}
export default Home;
