import React,{ useRef} from "react";
import './index.css'
import {useNavigate} from 'react-router-dom'


const Menu= (props) => {

	const navigation = useNavigate();
    const NavigateToHome = ()=>{
        navigation("home")
	}
	const { onClose } = props;

	const menuRef = useRef(null);
	const mainRef = useRef(null)

	const onClickOutSide = (e) => {
		console.log(menuRef.current);
		console.log(mainRef.current);

		if (menuRef.current !== mainRef.current){
			onClose();
		}
	};
	return (
		<div ref={mainRef} onClick={onClickOutSide} className='ref'>
		<ul ref={menuRef} className='menuCard'>
			<li className='menuList' onClick={NavigateToHome}>Home</li>
			<li className='menuList'>Profile</li>
			<li className='menuList'>Log Out</li>
			<li className='menuList lastItem'>Settings</li>
		</ul>
		</div>
	);
};

export default Menu;