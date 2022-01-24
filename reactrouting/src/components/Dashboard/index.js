import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../Sidenav";
import "./index.css";

const Dashboard = () => {
    return (
        <>
            <nav className="navbar">
                <h1>NavBar</h1>
            </nav>
            <div className="main">
                <Sidenav />
                <Outlet />
            </div>
        </>
    );
};

export default Dashboard;
