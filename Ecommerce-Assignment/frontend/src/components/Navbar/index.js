import { React } from "react";
import "./index.css";
// import { Link } from "react-router-dom";
import logo from "../../Images/logo.jpeg";

const Navbar = () => (
    <nav className="nav_bar">
        <div className="logo_container">
            <img src={logo} alt="logo" className="logo" />
        </div>
        <h1 className="heading_logo">eCommerec web page</h1>
    </nav>
);

export default Navbar;
