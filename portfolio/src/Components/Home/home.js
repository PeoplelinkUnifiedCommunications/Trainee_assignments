import React from "react";
import Popups from "../Popups/popups"
// import Nav from "../Navbar/nav"
import "./home.css";

function Home() {
  return (
    <div className="doubleCntnr">
      <div className="flexRow header">
        <a href="/"><button className="toggle">Olaolu</button></a>
        {/* <a className="menu-icon" href="/menu">
          <BiMenuAltRight />
        </a> */}
        <Popups />
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
                I like to craft solid and scalable ui products with 
              </span>
              <br />
              <span className="sp2">great user experiences.</span>
            </div>
          </div>
          <div className="imgCntnr">
            <img className="developer"
              src="./images/olaolu.png"
              alt="ui/ux developer"
              width="360px"
              height="380px"
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
            <span>Over a decade of experience building</span>
            <br />
            <span>products for clients across several</span>
            <br />
            <span>countries.</span>
          </div>
        </div>
      </div>
      <div className="imgCntnr1">
        <img className="dev" src="./images/olaolu.png" alt = "developer" width="220px" height="200px"/>
      </div>
      {/* <Nav /> */}
    </div>
  );
}
export default Home;
