import { React } from "react";
import logoImage from "../Images/logo.jpg";
import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => (
	<nav className="nav_bar">
		<div className="logo_container">
			<img src={logoImage} alt="logo" className="logo" />
		</div>
		<h1 className="heading_logo">eCommerce web page</h1>
		<ul className="ancorEle">
			<li className="ancorLink">
				<Link to="/"> Login</Link>
			</li>
			<li className="ancorLink">
				<Link to="/signup">Sing up</Link>
			</li>
		</ul>
	</nav>
);

export default NavBar;
