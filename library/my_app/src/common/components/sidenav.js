import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidenav = () => {
  // const history = useHistory();

  return (
    <>
      <div className="flexCol fullHeight">
        <div className="flexMinWidthCol">
          <span>dfghjkdfghjk</span>
        </div>
        <div className="flexAutoCol pdngBLG">
          <span className="subHdngTxt pdngHMD">
            <Link to="/login" className="">
              Logout
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
