import React  from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Sidenav = () => {
 

  return (
    <>
      <div className="flexCol fullHeight">
        <div className="flexMinWidthCol">
          <Link to="studentdetails">
            <div className="flexRow pdngSM alignCntr navHover">
              <div className="flexAutoRow pdngRMD">
                <div className="iconBox24">
                  <img src="/images/logos/userlist.png" alt="cgvhj" />
                </div>
              </div>
              <div className="flexMinWidthCol">
                <span className="subHdngTxt">Student Details</span>
              </div>
            </div>
          </Link>
          <Link to="borrowBooks">
            <div className="flexRow pdngSM alignCntr navHover">
              <div className="flexAutoRow pdngRMD">
                <div className="iconBox24">
                  <img src="/images/logos/withdrawfinal.png" alt="cgvhj" />
                </div>
              </div>
              <div className="flexMinWidthCol">
                <span className="subHdngTxt">Borrow Books</span>
              </div>
            </div>
          </Link>
          <Link to="returnBooks">
            <div className="flexRow pdngSM alignCntr navHover">
              <div className="flexAutoRow pdngRMD">
                <div className="iconBox24">
                  <img src="/images/logos/withdrawfinal.png" alt="cgvhj" />
                </div>
              </div>
              <div className="flexMinWidthCol">
                <span className="subHdngTxt">Return Books</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="flexAutoCol pdngBLG">
          <span className="subHdngTxt pdngHMD">
            <Link to="/" className="">
              Logout
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
