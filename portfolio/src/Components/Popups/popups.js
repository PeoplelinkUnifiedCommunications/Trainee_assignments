import React from "react";
import "./popups.css";
import { BiMenuAltRight } from "react-icons/bi";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
function Navbar() {
  return (
    <div className="fixed">
      <nav className="navigation">

        <Popup className="popupCntnr"
          trigger={
            <button className="menu-icon"><BiMenuAltRight />
             
            </button>
          }
          position="left top"
        >
          <div className="navigation-menu">
            <ul className="unorder1">
              <li>
                <a className="a0" target="_blank" rel="noreferrer" href="https://olaolu.dev/work/">My Work</a>
              </li>

              <li>
                <a className="a0" target="_blank" rel="noreferrer" href="https://olaolu.dev/shelf/">My Shelf</a>
              </li>

              <li>

                <a className="a0" target="_blank" rel="noreferrer" href="https://olaolu.dev/resume/">My Resume</a>
              </li>
            </ul>

            <ul className="unorder2">
              <li>
                <a className="tag" target="_blank" rel="noreferrer" href="#">SAY HELLO</a>
              </li>

              <li>
                <a className="a0" target="_blank" rel="noreferrer" href="">hello@olaolu.dev</a>
              </li>

              <li>
                <a className="a0" target="_blank" rel="noreferrer" href="https://web.telegram.org/z/">t.me/mrolaolu</a>
              </li>
            </ul>

            <ul className="unorder3">
              <li>
                <a className="tw" target="_blank" rel="noreferrer" href="https://twitter.com/">TW</a>
              </li>

              <li>
                <a className="gh" target="_blank" rel="noreferrer" href="https://github.com/">GH</a>
              </li>

              <li>
                <a className="ln" target="_blank" rel="noreferrer" href="https://www.linkedin.com/feed/">LN</a>
              </li>

              <li>
                <a className="yt" target="_blank" rel="noreferrer" href="https://www.youtube.com/">YT</a>
              </li>
            </ul>
          </div>
        </Popup>
      </nav>
      <a className="small" href="/menu"> <button className="menu-icon"><BiMenuAltRight /></button> </a>
    </div>
  );
}

export default Navbar;