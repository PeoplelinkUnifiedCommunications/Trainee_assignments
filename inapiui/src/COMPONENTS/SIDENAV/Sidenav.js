import React from "react"
import "./sidenav.css"
import WidgetsOutlinedIcon from "@material-ui/icons/WidgetsOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import SupervisorAccountOutlinedIcon from "@material-ui/icons/SupervisorAccountOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

function Sidenav() {
  return (
    <div className="sideNav flexCol">
      <div className="navigation flexCol" >
        <div className="navigate flexRow" >
          <div className="iconCntnr1">
            <WidgetsOutlinedIcon />
          </div>
          <p >Dashboard</p>
        </div>
        <div className="navigate flexRow" >
          <div className="iconCntnr1">
            <WorkOutlineOutlinedIcon />
          </div>
          <p >My projects</p>
        </div>
        <div className="navigate flexRow" >
          <div className="iconCntnr1">
            <PaymentOutlinedIcon />
          </div>
          <p >Billing And Payments</p>
        </div>
        <div className="navigate flexRow" >
          <div className="iconCntnr1">
            <AssessmentOutlinedIcon />
          </div>
          <p >Reports</p>
        </div>
        <div className="navigate flexRow" >
          <div className="iconCntnr1">
            <SupervisorAccountOutlinedIcon />
          </div>
          <p >User-Management</p>
        </div>
        <div className="navigate flexRow" >
          <div className="iconCntnr1">
            <HelpOutlineOutlinedIcon />
          </div>
          <p > Support</p>
        </div>
      </div>
      <div className="logOut flexCol">
        <div className="navigate flexRow" >
          <div className="iconCntnr1">
            <ExitToAppOutlinedIcon />
          </div>
          <p > Log Out</p>
        </div>
      </div>
    </div>
  )
}

export default Sidenav