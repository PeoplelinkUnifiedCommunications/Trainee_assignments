import React from "react"
import "./myprojectdashboard.css"
import Button from "@material-ui/core/Button";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import { createTheme, ThemeProvider } from "@material-ui/core";
function MyProjectsDashBoard() {
  const theme = createTheme({
    palette : {
      primary :  {
        main : "#215288"
      }
      
    }
  });
  return (
    <div className="card flexCol" >
      <div className="cardHead flexRow">
        <span className="cardName">My Projects</span>
        <span className="blueTxt">More</span>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Project Name</th>
            <th>Project Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><small>1</small></td>
            <td><small>inClass</small></td>
            <td><small>Multi Party</small></td>
            <td className="actionBtnCntnr flexRow">
              <EditOutlinedIcon className="actionBtn"/>
              <DeleteOutlineOutlinedIcon className="actionBtn"/>
              <VideocamOutlinedIcon className="actionBtn"/>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><small>2</small></td>
            <td><small>inSop</small></td>
            <td><small>P2P</small></td>
            <td className="actionBtnCntnr flexRow">
              <EditOutlinedIcon className="actionBtn"/>
              <DeleteOutlineOutlinedIcon className="actionBtn"/>
              <VideocamOutlinedIcon className="actionBtn"/>
            </td>
          </tr>
        </tbody>
        
      </table>
      <div className="cardBtnCntnr flexCol">
        {/* <button className="cardBtn">Create project</button> */}
        <ThemeProvider theme={theme}>
          <Button variant="contained" color="primary" disableElevation>create</Button>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default MyProjectsDashBoard