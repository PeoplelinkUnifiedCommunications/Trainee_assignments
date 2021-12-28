import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import "./index.css";

const Footer = () => {
    return (
        <div className="footer-bg">
            <div className="copy-right-container">
                <AiOutlineCopyright className="copy-right-text" />
                <p className="copy-right-text">
                    2021.PeopleLink. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
