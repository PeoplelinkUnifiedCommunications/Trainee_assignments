import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Academics() {
  return (
    <div className="mainContainer">
      <div className="bgImage flexRow order">
        <ol>
          <li>
            Arts :
            <ol type="a" className="list">
              <li>
                <Link to="/english">English</Link>
              </li>
              <li>
                <Link to="/sociology">Sociology</Link>
              </li>
            </ol>
          </li>
          <li>
            Science :
            <ol type="a" className="list">
              <li>
                <Link to="/computers">Computers</Link>
              </li>

              <li>
                <Link to="/mathematics">Mathematics</Link>
              </li>
            </ol>
          </li>
          <li>
            Commerce :
            <ol type="a" className="list">
              <li>
                <Link to="/economy">Economy</Link>
              </li>
              <li>
              <Link to="/business">Business</Link>
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </div>
  );
}
export default Academics;
