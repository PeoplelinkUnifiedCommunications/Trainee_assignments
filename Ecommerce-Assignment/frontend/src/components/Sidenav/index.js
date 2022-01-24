import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Sidenav = () => {
    return (
        <div className="side">
            <h1>Welcome User!</h1>
            <Link to="." className="txt">
                <p>Create Product</p>
            </Link>
            <Link to="productlist" className="txt">
                <p>Products</p>
            </Link>
            <Link to="mycart" className="txt">
                <p>My Cart</p>
            </Link>
        </div>
    );
};

export default Sidenav;
