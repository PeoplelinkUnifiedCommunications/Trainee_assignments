import React from "react";
import { Link } from "react-router-dom";
function ShelfFooter() {
  return (
    <footer className="section4">
      <div className="inner-content">
        <div className="footer-main">
          <span className="s27">SAY HELLO</span> <br />
          <div className="flexRow lists">
            <ul className="ul-list">
              <li className="item1">
                <a className="anc" target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox">hello@marti.dev</a></li>
              <li className="item2">
                <a className="anc" target="_blank" rel="noreferrer" href="https://web.telegram.org/z/">t.me/mrshema</a></li>
            </ul>

            <ul className="list">
              <Link to={"/"}>
              <li>
                <a className="a2" href="#">Home</a>
              </li>
              </Link>

              <br />

              <Link to={"/work"}>
              <li>
                <a className="a2" href="#">My Work</a>
              </li>
              </Link>
              <br />

              <Link to={"/resume"}>
              <li>
                <a className="a2" href="#">My Resume</a>
              </li>
              </Link>
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
              <a className="a3" target="_blank" rel="noreferrer" href="https://twitter.com/">TW</a>
            </li>
            <li className="itm2">
              <a className="a3" target="_blank" rel="noreferrer" href="https://github.com/">GH</a>
            </li>
            <li className="itm3">
              <a className="a3" target="_blank" rel="noreferrer" href="https://www.linkedin.com/">LN</a>
            </li>
            <li className="itm4">
              <a className="a3" target="_blank" rel="noreferrer" href="https://www.youtube.com/">YT</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default ShelfFooter