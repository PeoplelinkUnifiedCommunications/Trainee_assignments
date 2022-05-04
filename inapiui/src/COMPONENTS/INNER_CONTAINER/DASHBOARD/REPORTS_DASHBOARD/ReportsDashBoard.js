import React from "react"
import "./reportdashboard.css"
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";

function ReportsDashBoard() {
  return (
    <div className="card flexCol" >
      <div className="cardHead flexRow">
        <span className="cardName">Reports</span>
        <span className="blueTxt">More</span>
      </div>
      <div className="billings flexRow">
        <div className="billingSub flexCol">
          <div className="totalNumberOf flexCol">
            <small>Total Number Of Completed Calls</small>
          </div>
          <div className="totalInfo flexRow">
            
            <div className="iconCntnr1">
              <CallOutlinedIcon className="icon  "/>
            </div>
            
            <span>0</span>

          </div>
        </div>
        <div className="billingSub flexCol">
          <div className="totalNumberOf flexCol">
            <small>Total Number Of Calls</small>
          </div>
          <div className="totalInfo flexRow">
            
            <div className="iconCntnr1">
              <CallOutlinedIcon className="icon iconW "/>
            </div>
            
            <span>0</span>

          </div>
        </div>
        <div className="billingSub flexCol">
          <div className="totalNumberOf flexCol">
            <small>Total Number Of Sessions</small>
          </div>
          <div className="totalInfo flexRow">
            <div className="iconCntnr1">
              <CallOutlinedIcon className="icon  "/>
            </div>
            <span>0</span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ReportsDashBoard