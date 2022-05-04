import React from "react"
import "./header.css"
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

function Header() {
  return (
    <div className='header flexRow'>
      <div className='logo flexAutoCol'>
        <h1>INAPI</h1>
      </div>
      <div className='hRight flexRow'>
        <span>Welcome! Shantanu</span>
        <div className='profile flexAutoCol'><AccountCircleOutlinedIcon className="icon"/></div>
      </div>

    </div>
  )
}

export default Header