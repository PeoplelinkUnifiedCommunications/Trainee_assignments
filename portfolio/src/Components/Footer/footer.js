import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="flexRow section4">
      <div className="inner-content">
        <div className="footer-main">
          <span className="s27">SAY HELLO</span> <br />
          <div className="flexRow lists">
            <ul className="ul-list">
              <li className="item1">
                <a className="anc" target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/#inbox"><button className="button">hello@olaolu.dev</button></a></li>
              <li className="item2">
              <a className="anc" target="_blank" rel="noreferrer" href="https://web.telegram.org/z/"><button className="button">t.me/mrolaolu</button></a></li>
            </ul>

          
            <ul className="list">
              <li>
                <a className="a2" target="_blank" rel="noreferrer" href="https://olaolu.dev/work/" rel="noreferrer"><button className="button">My Work</button></a>
              </li>
              <br />

              <li>
                <a className="a2" target="_blank" rel="noreferrer" href="https://olaolu.dev/shelf/" rel="noreferrer"><button className="button">My Shelf</button></a>
              </li>
              <br />

              <li>
                <a className="a2" href="https://olaolu.dev/resume/" target="_blank" rel="noreferrer"><button className="button">My Resume</button></a>
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
          <span className="name">&#169; Olaolu Olawuyi 2022</span>

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
export default Footer;
