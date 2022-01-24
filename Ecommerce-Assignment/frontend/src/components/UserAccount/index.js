import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../Sidenav";
import "./index.css";

const UserAccount = () => {
    return (
        <div className="user">
            <div className="main">
                <Sidenav />
                <Outlet />
            </div>
        </div>
    );
};

export default UserAccount;
