import React from "react";
import "./popups.css";
import { BiMenuAltRight } from "react-icons/bi";
import Popup from "reactjs-popup";
function Popups() {
  return (
    <div>
      <nav className="navigate">
        <a href="/">
          <button className="toggle">Olaolu</button>
        </a>
        <Popup
          trigger={
            <button className="menu-icon">
              <BiMenuAltRight />
            </button>
          }
          position="right center"
        >
          {/* <div className="flexRow lists">
          <ul className="ul-list1">
            <Link to={"/work"}>
              <li className="li-element">
                <a className="a0" target="_blank" href="">
                  My Work
                </a>
              </li>
            </Link>
            <Link to={"/shelf"}>
              <li className="li-element">
                <a className="a0" href="#">
                  My Shelf
                </a>
              </li>
            </Link>
            <Link to={"/resume"}>
              <li className="li-element">
                <a className="a0" href="#">
                  My Resume
                </a>
              </li>
            </Link>

            <li className="li-element">
              <span className="span-element">SAY HELLO</span>
            </li>
            <li className="li-element">
              <a
                className="a0"
                target="_blank"
                href="https://mail.google.com/mail/u/0/#inbox"
              >
                hello@marti.dev
              </a>
            </li>
            <li className="li-element">
              <a
                className="a0"
                target="_blank"
                href="https://web.telegram.org/z/"
              >
                t.me/mrsmarti
              </a>
            </li>
            <br />
            <ul className="ul-listn">
              <li className="li-element">
                <a className="a1" target="_blank" href="https://twitter.com/">
                  TW
                </a>
                <a className="a1" target="_blank" href="https://github.com/">
                  GH
                </a>
                <a
                  className="a1"
                  target="_blank"
                  href="https://www.linkedin.com/"
                >
                  LN
                </a>
                <a
                  className="a1"
                  target="_blank"
                  href="https://www.youtube.com/"
                >
                  YT
                </a>
              </li>
            </ul>
          </ul></div> */}
        </Popup>
      </nav>
    </div>
  );
}
export default Popups;
