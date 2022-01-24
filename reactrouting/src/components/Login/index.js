import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Login = () => {
    return (
        <div className="login">
            <Link to="dashboard">
                <button className="button">Login</button>
            </Link>
        </div>
    );
};

export default Login;
