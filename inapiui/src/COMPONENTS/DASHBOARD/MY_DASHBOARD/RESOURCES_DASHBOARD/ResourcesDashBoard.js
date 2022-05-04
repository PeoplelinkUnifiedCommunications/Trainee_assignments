import React from "react"
import "./resourcesdashboard.css"
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

function ResourcesDashBoard() {
  return (
    <div className="card flexCol" >
      <div className="cardHead flexRow">
        <span className="cardName">Resources</span>
        <span className="blueTxt">More</span>
      </div>
      <div className="resources flexRow">
        <div className="resource flexRow">
          <div className="resL flexCol">
            <AssignmentOutlinedIcon className="icon"
            />
          </div>
          <div className="resR flexCol">
            <span className="blueTxt">Get Documentation</span>
            <small className="txt">Get the required documet here note that as we have added various plugins we need to first install them so run the following command to install them as devDependencies  </small>
          </div>
        </div>
        <div className="resource flexRow">
          <div className="resL flexCol">
            <SettingsOutlinedIcon className="icon"/>
          </div>
          <div className="resR flexCol">
            <span className="blueTxt">API Reference </span>
            <small className="txt">Get the required documet here note that as we have added various plugins we need to first install them so run the following command to install them as devDependencies  </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResourcesDashBoard