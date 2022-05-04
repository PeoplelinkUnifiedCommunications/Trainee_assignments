import React from "react"
import "./mydashboard.css"
import MyProjectsDashBoard from "./MY_PROJECTS_DASHBOARD/MyProjectsDashBoard"
import ResourcesDashBoard from "./RESOURCES_DASHBOARD/ResourcesDashBoard"
import BillingDashboard from "./BILLING_DASHBOARD/BillingDashboard"
import ReportsDashBoard from "./REPORTS_DASHBOARD/ReportsDashBoard"
import UserManagementDashBoard from "./USERMANAGEMENT_DASHBOARD/UserManagementDashBoard"
function MyDashboard() {
  return (
    <div className="myDashboard">
      <div className="square1"><MyProjectsDashBoard /></div>
      <div className="square1"><ResourcesDashBoard/></div>
      <div className="square1"><BillingDashboard/></div>
      <div className="square1"><ReportsDashBoard/></div>
      <div className="square1"><UserManagementDashBoard/></div>
    </div>
  )
}

export default MyDashboard