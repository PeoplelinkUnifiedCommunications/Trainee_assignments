import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs"
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { GoDashboard } from "react-icons/go";
import { RiAdminLine } from "react-icons/ri";
import { FcCamcorderPro } from "react-icons/fc";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiColombianStatue } from "react-icons/gi";
import { FcSettings }from "react-icons/fc";
import { MdPowerSettingsNew } from "react-icons/md";
import Charts from "../Charts";
import Piechart from "../Piechart";
import "./style.css";

function Dashboard() {
  const [nav, setNav] = useState(false);

  const changeNav = () => setNav(!nav)

  return (
      <div className="mainCntnr">
          
          {nav && <div className="navCntnr">
          <div className="navHeader">
              <span className="navHeadCnt">DITF 2022</span>
          </div>
          <div className="navBtm">
              <div className="profile">
                  <img src="./images/profile.png" alt="hero" width="40%" height="30%"/>
              </div>  
                  <div className="listCntnr">
                      <ul>
                         <li className="nm">Aaryan</li>
                      </ul>   
                          
                  </div>
                   <div className="navList">
                   <div className="lsCntnr">
                       <GoDashboard className="go"/>
                       <span className="names">Dashboard</span>
                   </div>
                   <div className="lsCntnr1">
                       <RiAdminLine className="go" />
                       <span className="names">Administrator</span>
                   </div>
                   <div className="lsCntnr2">
                       <FcCamcorderPro className="go"/>
                       <span className="names">Orders</span>
                   </div>
                   <div className="lsCntnr3">
                       <MdOutlineProductionQuantityLimits className="go"/>
                       <span className="names">Products</span>
                   </div>
                   <div className="lsCntnr4">
                       <GiColombianStatue className="go"/>
                       <span className="names">Earning Status</span>
                   </div>
                   <div className="lsCntnr5">
                       <FcSettings className="go"/>
                       <span className="names">Settings</span>
                   </div>
                   <div className="lsCntnr6">
                       <MdPowerSettingsNew className="go"/>
                       <span className="names">Logout</span>
                   </div>
                 </div>

          </div>
          </div> }
      <div className="dashboardCntnr">
        <div className="flexRow header">
          <button onClick={changeNav}>{nav ? <BsArrowRightCircle  className="arrCircle"/> :<BsArrowLeftCircle  className="arrCircle"/>}</button>
          
          <BiSearch className="searchIcon" />
          <p className="paragraph">Find Projects or clients</p>
          <div className="headerRight">
            <MdOutlineNotificationAdd className="notifyIcon" />
            <BsEnvelope className="envelopeIcon" />
            <FiSettings className="settingIcon" />
          </div>
        </div>
        <div className="bottomCntnr">
          <div className="cards">
            <div className="card1">
              <p className="quantity">
                5390 <HiOutlineArrowCircleUp className="hioutIcon" />
                <br />
                <span className="status">ORDER RECEIVED</span>
              </p>
              <p className="marker">
                <IoMdCheckmarkCircleOutline />
              </p>
            </div>
            <div className="card1">
              <p className="quantity">
                2390 <HiOutlineArrowCircleDown className="hioutIcon" />
                <br />
                <span className="status">TOTAL CHARGES</span>
              </p>
              <p className="marker">
                <IoMdCheckmarkCircleOutline />
              </p>
            </div>
            <div className="card1">
              <p className="quantity">
                $2947
                <HiOutlineArrowCircleDown className="hioutIcon" />
                <br />
                <span className="status">TOTAL EARNINGS</span>
              </p>
              <p className="marker">
                <IoMdCheckmarkCircleOutline />
              </p>
            </div>
          </div>
          <div className="charts">
            <div className="lineChart">
              <Charts />
            </div>
            <div className="pieChart">
              <Piechart />
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}
export default Dashboard;
