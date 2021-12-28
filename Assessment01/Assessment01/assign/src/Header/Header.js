import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main">
      <div className="Header">
        <h1>Header</h1>
      </div>

      <div className="Midle_part">
        <div className="aside">
          <h1>Aside</h1>
        </div>
        <div className="Article">
          <div className="Article_center">
            <h1>Article</h1>
            <div className="images">
              <div className="img1">
                <h1>Image1</h1>
              </div>
              <div className="img1">
                <h1>Image1</h1>
              </div>
              <div className="img1">
                <h1>Image1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
};

export default Header;
