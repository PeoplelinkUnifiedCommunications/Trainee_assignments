import React from "react"
import "./innercntnr.css"
import DashBoard from "./DASHBOARD/DashBoard"

function InnerCntnr() {
  return (
    <div className="flexCol innerCntnr">
      <div className="title flexCol">
        <h1>
           My DashBoard
        </h1>
      </div>
      <DashBoard/>
      
    </div>
  )
}

export default InnerCntnr