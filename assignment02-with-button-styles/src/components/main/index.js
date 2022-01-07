import React from "react";
import FormData from "../formData";
import DisplayData from "../displayData";
import "./index.css";

const Main = () => {
    return (
        <div className="main-container">
            <FormData />
            <DisplayData />
        </div>
    );
};

export default Main;
