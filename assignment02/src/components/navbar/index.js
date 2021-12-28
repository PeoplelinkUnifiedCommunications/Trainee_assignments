import React from "react";
import { BsSearch } from "react-icons/bs";
import "./index.css";

const Navbar = () => {
    return (
        <nav className="navbar-bg">
            <div className="navbar-content">
                <div className="logo-title">
                    <img className="logo" src="./logo.png" alt="logo" />
                    <h1 className="title">OnLine-Parking Lot</h1>
                </div>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search your Car/Bike"
                        className="search-box"
                    />
                    <BsSearch className="search-icon" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
