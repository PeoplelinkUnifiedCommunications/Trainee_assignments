import React, {useState} from 'react';
import {Box,Tooltip,Avatar, AppBar, Toolbar, Typography,Badge} from '@mui/material';
import { RiFileCopyFill } from "react-icons/ri";
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuList from "../MenuList"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import "./index.css"
const Header = () => {
  const [isMenuActive,setIsMenuActive]=useState(false)
  const onClickProfile = () => {
		setIsMenuActive((prev) => !prev);
	};

	const onClose = () => {
		setIsMenuActive(false);
	};
  return (
    <Box sx={{flexGrow:1}}>
    <AppBar>
    <Toolbar className='flexRow fxdTopHdr headerCntnr'>
      <div className='flexMinWidth jcCntr alignCntr flexAuto'>
         <div >
         <RiFileCopyFill className='icon' style={{color:"#438FFD"}} /></div>
         <div className='searchCntnr'>
            <SearchIcon color='action'/>
            <input type="search" className='search' placeholder='Search for transaction,item,etc'/>
        </div>
        <Tooltip title="searchButton" arrow><button className='buttonCntnr' type="button">Search</button></Tooltip>
      </div>
      <Box sx={{ display: { xs: 'none', md: 'flex' } ,alignItems:"center",gap:2}}>
         <Tooltip title="messages" arrow>
         <Badge badgeContent={2} color="error">
            <MailIcon color="action" />
          </Badge>
          </Tooltip>
          <Tooltip title="notifications" arrow>
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon color="action" />
          </Badge>
          </Tooltip>
          <Tooltip title="Profile" arrow>
          <Avatar alt="avatar" src="https://res.cloudinary.com/dwvklyiwo/image/upload/v1643868639/avthar_hpljif.jpg" />
          </Tooltip>
          <div onClick={onClickProfile} style={{textAlign:"center"}}>
          <ArrowDropDownCircleIcon color="action" />
          {isMenuActive && <MenuList onClose={onClose} />}
          </div>
      </Box>
  </Toolbar>
  </AppBar>
  </Box>
  );
};
export default Header;
