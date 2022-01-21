import { React } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="nav_bar">
        <div className="logo_container">
            <img src="./logo.png" alt="logo" className="logo" />
        </div>
        <h1 className="heading_logo">eCommerec web page</h1>
    </nav>
);

export default Navbar;
