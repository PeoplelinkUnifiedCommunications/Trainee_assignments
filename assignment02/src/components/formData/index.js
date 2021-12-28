import React from "react";
import "./index.css";

const FormData = () => {
    return (
        <div className="form-data-container">
            <form className="form-input">
                <input
                    type="text"
                    placeholder="Owner_Name"
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Registration_Number"
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Car/Bike_Color"
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Slot_Number"
                    className="input-field"
                />
                <button className="slot-button">Allot the Slot</button>
            </form>
            <div className="slot-generator-bg">
                <div className="slot-input-container">
                    <label htmlFor="slotInput" className="generate-text">
                        Generate Slots :
                    </label>
                    <input
                        id="slotInput"
                        type="number"
                        placeholder="_ _ _"
                        className="slot-input"
                    />
                </div>
                <button className="generate-button">Generate</button>
                <p className="generate-text">Available Slots: _ _ _</p>
                <p className="generate-text">Alloted Slots: _ _ _</p>
            </div>
        </div>
    );
};

export default FormData;
