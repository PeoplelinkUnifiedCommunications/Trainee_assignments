import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="section4">
      <div className="inner-content">
        <div className="footer-main">
          <span className="s27">SAY HELLO</span> <br />
          <div className="flexRow lists">
            <ul>
              <li className="item1">hello@mitra.dev</li>
              <li className="item2">t.me/mrsmitra</li>
            </ul>

            <ul className="list">
              <li>
                <a href="#">My Shelf</a>
              </li>
              <br />
              <li>
                <a href="#">My Work</a>
              </li>
              <br />
              <li>
                <a href="#">My Resume</a>
              </li>
            </ul>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div>
            <hr className="new"></hr>
          </div>
        </div>
        <div className="flexRow footer-bottom">
          <span className="name">&#169; Marti Mehta 2022</span>

          <ul className="list1">
            <li className="itm1">
              <a href="#">TW</a>
            </li>
            <li className="itm2">
              <a href="#">GH</a>
            </li>
            <li className="itm3">
              <a href="#">LN</a>
            </li>
            <li className="itm4">
              <a href="#">YT</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
