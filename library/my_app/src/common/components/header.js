import React from "react";
import "../styles.css";

const Header = () => {
  return (
    <>
      <div className="flexRow hdrStyles alignCntr pdngMD">
        <div className="flexMinWidthRow pdngHMD">
          <span className="mainHdngTxt whiteTxt">Peoplelink Library Management System</span>
        </div>
        <div className="flexAutoRow pdngHMD">
          <div className="avatar">
            <img src="https://cdn.pixabay.com/photo/2016/08/24/16/20/books-1617327_960_720.jpg" alt="nature" className="brdrRadiushalf" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
