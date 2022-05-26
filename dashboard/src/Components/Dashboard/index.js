import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import Charts from "../Charts";
import Piechart from "../Piechart";
import "./style.css";



function Dashboard() {
    return (
        <>
        <div className="flexRow header">
            <BsArrowLeftCircle className="arrCircle"/>
            <BiSearch className="searchIcon" />
            <p className="paragraph">Find Projects or clients</p>
            <div className="headerRight">
            <MdOutlineNotificationAdd className="notifyIcon"/>
            <BsEnvelope className="envelopeIcon"/>
            <FiSettings className="settingIcon"/>
            </div>
        </div>
        <div className="bottomCntnr">
            <div className="cards">
            <div className="card1">
                <p className="quantity">5390 <HiOutlineArrowCircleUp className="hioutIcon"/><br/><span className="status">ORDER RECEIVED</span></p>
                <p className="marker"><IoMdCheckmarkCircleOutline /></p>
            </div>
            <div className="card1">
                <p className="quantity">2390 <HiOutlineArrowCircleDown className="hioutIcon"/><br/><span className="status">TOTAL CHARGES</span></p>
                <p className="marker"><IoMdCheckmarkCircleOutline /></p>
            </div>
            <div className="card1">
                <p className="quantity">$2947<HiOutlineArrowCircleDown className="hioutIcon"/><br/><span className="status">TOTAL EARNINGS</span></p>
                <p className="marker"><IoMdCheckmarkCircleOutline /></p>
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
        
        </>
    )
}
export default Dashboard;