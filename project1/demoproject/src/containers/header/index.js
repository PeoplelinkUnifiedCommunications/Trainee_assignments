import React, {useState} from "react";
import "./index.css";
import avthar from "../images/avthar.jpg";
import { RiFileCopyFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import {  AppBar, Toolbar, Badge, Box } from "@mui/material";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MenuList from '../menulist/index'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';const Header = () => {
  const [isMenuActive,setIsMenuActive]=useState(false)

  const onClickProfile = () => {
		setIsMenuActive((prev) => !prev);
	};

	const onClose = () => {
		setIsMenuActive(false);
	};
  
  return (
    <Box>
      <AppBar>
        <Toolbar className=" flexRow fxdTopHdr main">
          <div className=" flexMinWidth">
            <div className="icon">
              <RiFileCopyFill className="iconSizeAndClr" />
            </div>
            <div className="searchCntnr">
              <div className="search-icon">
                <FiSearch />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search for transaction,item,etc"
                />
              </div>
              <div className="search-btn">
                <Tooltip title="Search Button" arrow>
                  <button className="btn">Search</button>
                </Tooltip>
              </div>
            </div>
          </div>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <Tooltip title="message" arrow>
              <div className="flexAuto iconCntnr">
                <Badge badgeContent={1} color="error">
                  <SmsIcon className="iconSize" />
                </Badge>
              </div>
            </Tooltip>

            <Tooltip title="Notifications" arrow>
              <div className="Auto iconCntnr">
                <Badge badgeContent={2} color="error">
                  <NotificationsNoneIcon className="iconSize" />
                </Badge>
              </div>
            </Tooltip>

            <Tooltip title="Profile" arrow>
              <Avatar alt="Remy Sharp" src={avthar} />
            </Tooltip>

            <div style={{textAlign:'center'}}>
            <ArrowDropDownIcon color='action' onClick={onClickProfile}/>
            {isMenuActive && <MenuList onClose={onClose}/>}
            </div>
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
