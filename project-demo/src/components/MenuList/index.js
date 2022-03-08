
import React,{ useEffect, useRef} from "react";
import {useNavigate} from 'react-router-dom'

const Menu= (props) => {
	const { onClose } = props;
	const menuRef = useRef(null);
    const mainRef=useRef(null)
	const navigation=useNavigate()
	
	const onClickOutSide = (e) => {
		if (menuRef.current === mainRef.current) {
			onClose();
		}
		// console.log(menuRef.current)
		// const element=e.target
		// console.log(element)
		// if (menuRef.current.contains(element)){
		// 	console.log("Hai")
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	onClose();
		// }
		
	};
    
	const NavigateTOHome=()=>{
		navigation("/home")
	}

	// useEffect(()=>{return(document.body.addEventListener("click", onClickOutSide))})

	return (
		<div ref={mainRef} className='mainRefCntnr' onClick={onClickOutSide}>
		<ul ref={menuRef} className='Card' onClick={onClickOutSide}>
			<li className='List' onClick={NavigateTOHome}>Home</li>
			<li className='List' onClick={()=>{navigation("/profile")}}>Profile</li>
			<li className='List' onClick={()=>{navigation("/logout")}}>Logout</li>
			<li className='List lastItem' onClick={()=>{navigation("/settings")}}>Settings</li>
		</ul>
		 </div>
	);
};

export default Menu;