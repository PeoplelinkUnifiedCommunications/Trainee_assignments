import React,{useState} from 'react';
import {Tooltip} from '@material-ui/core';
import { MdDashboard } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillSetting ,AiFillInfoCircle} from "react-icons/ai";
import { IoDocumentText} from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Modal from "../MuiElements/modal"
import { IconButton } from '@mui/material';

const sideData=[{id:1,icon:<MdDashboard/>,path:"/",text:"Dashboard"},
  {id:2,icon:<BsFillCartCheckFill />,path:"cart",text:"Cart"},
  {id:3,icon:<AiFillSetting/>,path:"settings",text:"Settings"},
  {id:4,icon:<IoDocumentText/>,path:"documents",text:"Documents"}]
const SideNav = () => {
  const [activeIcon, setActiveIcon] = useState(sideData[0].id);
  const [right,setRight]=useState(false)
  const navigation=useNavigate()

	const onChangeNav = (id,path) => {
    setActiveIcon(id);
    navigation(path)
	};
  const Handle=()=>{
    setRight(true)
  }
  
  return (
  <div className={right?'flexCol alignCntr jcBetween fxdLeftNavExtend':'flexCol alignCntr jcBetween fxdLeftNav'}>
    <div className='flexCol alignCntr'>
    {sideData.map(each=>{
      const activeClass = each.id===activeIcon?"active sideButton":"sideButton";
      const onClickNavLink = () => {
						onChangeNav(each.id,each.path);
					};
      return (<div className='flexRow'><Tooltip  title={each.text} key={each.id} placement="right" arrow><button type="button" className={activeClass} onClick={onClickNavLink}>{each.icon}</button></Tooltip>
      {/* <p>{each.text}</p>*/}</div>) 
      })}
    </div>
    <div className='flexCol alignCntr'>
    <Tooltip title="Info" placement="right" arrow><div className='sideImage'><IconButton><AiFillInfoCircle /></IconButton></div></Tooltip>
    <Tooltip title="Logout" placement="right" arrow><div className='sideImage'><Modal/></div></Tooltip>
    </div>
  </div>
  );
};
export default SideNav;
