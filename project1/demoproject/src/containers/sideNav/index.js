// import React,{useState} from 'react';
// import {Tooltip} from '@material-ui/core';
// import { MdDashboard } from "react-icons/md";
// import { BsFillCartCheckFill } from "react-icons/bs";
// import { AiFillSetting ,AiFillInfoCircle} from "react-icons/ai";
// import { IoDocumentText, IoLogOutOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";
// const sideData=[{id:1,icon:<MdDashboard/>,path:"/",text:"Dashboard"},
//   {id:2,icon:<BsFillCartCheckFill />,path:"cart",text:"Cart"},
//   {id:3,icon:<AiFillSetting/>,path:"settings",text:"Settings"},
//   {id:4,icon:<IoDocumentText/>,path:"documents",text:"Documents"}]
// const SideNav = () => {
//   const [activeImage, setActiveImage] = useState(sideData[0].id);
//   const navigation=useNavigate()

// 	const changeNav = (id,path) => {
//     setActiveImage(id);
//     navigation(path)
// 	};
//   return (
//   <div className='flexCol alignCntr jcBetween fxdLeftNav'>
//     <div className='flexCol alignCntr'>
//     {sideData.map(each=>{
//       const activeClass = each.id===activeImage?"active sideButton":"sideButton";
//       const onClickNavLink = () => {
// 						changeNav(each.id,each.path);
// 					};
//       return (<button type="button" className={activeClass} key={each.id} onClick={onClickNavLink}>{each.icon}</button>)
//       })}
//     </div>
//     <div className='flexCol alignCntr'>
//     <Tooltip title="Info" placement="right" arrow><div className='sideImage'><AiFillInfoCircle/></div></Tooltip>
//     <Tooltip title="Logout" placement="right" arrow><div className='sideImage'><IoLogOutOutline/></div></Tooltip>
//     </div>
//   </div>
//   );
// };
// export default SideNav;





import React, { useState } from 'react';
import './index.css'
import { MdDashboard } from "react-icons/md";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { IoDocumentText } from "react-icons/io5";
import { AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'
import Modal from '../../muiElements/modal'
// import { Tooltip } from '@mui/material';
import { Tooltip } from '@material-ui/core';

const sideNavData =[{id:1, icon:<MdDashboard/>, path:'/',text:'Dashboard'},
                    {id:2, icon:<BsFillCartCheckFill/>, path:"cart", text:'Cart'},
                    {id:3, icon:<AiFillSetting/>, path:"settings", text:'Settings'},
                    {id:4, icon:<IoDocumentText/>, path:"documents", text:'Documents'}
                   ]
                    
const SideNav = () => {

    const [activeIcon, setActiveIcon] = useState(sideNavData[0].id);


    const navigation = useNavigate()

    const onChangeNav = (id,path) =>{
        setActiveIcon(id);
        navigation(path);
    }

    const navTo = ()=>{
        navigation('/miniDrawer');
    }
   
  return (
        <div className='flexCol fxdLeftNav alignCntr jcBetween'>
            <div className='flexCol alignCntr'>
            {sideNavData.map(each=>{
                console.log(activeIcon)
                const activeClass = each.id===activeIcon?"active iconMrgn":"iconMrgn";

                const onClickNavLink = () => {
                    onChangeNav(each.id,each.path);
                };
                 return (<Tooltip title={each.text} placement='right' arrow><h1 key={each.id} className={activeClass} onClick={onClickNavLink}>{each.icon}</h1></Tooltip>)   
            })}
            </div>
            <div className='flexCol alignCntr jcBetween alignCntr'>
                <Tooltip title="info" placement='right' arrow>
                    <div className='iconMrgn'>
                      <AiFillInfoCircle  onClick={navTo}/>
                    </div>
                </Tooltip>
                 <Modal />
                 


            </div>
        </div>
    );
};

export default SideNav;
