import React from "react"
import "./dashboard.css"
import MyProjectsDashBoard from "./MY_PROJECTS_DASHBOARD/MyProjectsDashBoard"
import ResourcesDashBoard from "./RESOURCES_DASHBOARD/ResourcesDashBoard"
import BillingDashboard from "./BILLING_DASHBOARD/BillingDashboard"
import ReportsDashBoard from "./REPORTS_DASHBOARD/ReportsDashBoard"
import UserManagementDashBoard from "./USERMANAGEMENT_DASHBOARD/UserManagementDashBoard"

function DashBoard() {
  return (
    <div className="flexWrap dashBoard">
      <div className="square"><MyProjectsDashBoard /></div>
      <div className="square"><ResourcesDashBoard/></div>
      <div className="square"><BillingDashboard/></div>
      <div className="square"><ReportsDashBoard/></div>
      <div className="square"><UserManagementDashBoard/></div>
    </div>
  )
}

export default DashBoard