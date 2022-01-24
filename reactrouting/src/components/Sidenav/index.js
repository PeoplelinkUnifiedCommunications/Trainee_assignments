import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Sidenav = () => {
    return (
        <div className="side">
            <Link to=".">
                <p className="txt">Home</p>
            </Link>
            <Link to="content">
                <p className="txt">Content</p>
            </Link>
            <Link to="videos">
                <p className="txt">Videos</p>
            </Link>
        </div>
    );
};

export default Sidenav;
