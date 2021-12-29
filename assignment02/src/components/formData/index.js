import React, { useState } from "react";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { addSlots, addData, onUpdate } from "../../parkingReducer";
import "./index.css";

const FormData = () => {
    const [generateSlots, setGeneratedSlots] = useState(0);

    const slots = useSelector((state) => state.addReducer.slots);
    const parkingDataList = useSelector((state) => state.addReducer.dataList);

    const onClickEdit = useSelector((state) => state.addReducer.clickEdit);
    console.log(onClickEdit);

    const editableData = useSelector((state) => state.addReducer.editableData);
    const editableObject = editableData[0];

    let [ownerName, setOwenerName] = useState(
        onClickEdit === true ? editableObject.ownerName : ""
    );
    let [registrationNumber, setRegistrationNumber] = useState(
        onClickEdit === true ? editableObject.registrationNumber : ""
    );
    let [vehicleColor, setVehicleColor] = useState(
        onClickEdit === true ? editableObject.vehicleColor : ""
    );
    let [slotNumber, setslotNumber] = useState(
        onClickEdit === true ? editableObject.slotNumber : ""
    );
    console.log(ownerName, registrationNumber, slotNumber);

    const disPatch = useDispatch();

    const onClickGenerateSlots = () => {
        disPatch(addSlots(generateSlots));
        setGeneratedSlots(0);
    };

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (onClickEdit === false) {
            const userObject = {
                id: v4(),
                slotNumber,
                registrationNumber,
                ownerName,
                vehicleColor,
            };
            //console.log(userObject);

            if (slots - parkingDataList.length > 0) {
                disPatch(addData(userObject));
            } else {
                alert("No Slot Available");
            }
            setOwenerName("");
            setRegistrationNumber("");
            setVehicleColor("");
            setslotNumber("");
        } else {
            const editableId = editableObject.id;
            const userObject = {
                id: editableId,
                slotNumber,
                registrationNumber,
                ownerName,
                vehicleColor,
            };
            disPatch(onUpdate(userObject));
            setOwenerName("");
            setRegistrationNumber("");
            setVehicleColor("");
            setslotNumber("");
        }
    };

    return (
        <div className="form-data-container">
            <form className="form-input" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    placeholder="Owner_Name"
                    className="input-field"
                    value={ownerName}
                    onChange={(e) => setOwenerName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Registration_Number"
                    className="input-field"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Car/Bike_Color"
                    className="input-field"
                    value={vehicleColor}
                    onChange={(e) => setVehicleColor(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Slot_Number"
                    className="input-field"
                    value={slotNumber}
                    onChange={(e) => setslotNumber(e.target.value)}
                />
                <button type="submit" className="slot-button">
                    Allot the Slot
                </button>
            </form>

            <div className="slot-generator-bg">
                <div className="slot-input-container">
                    <label htmlFor="slotInput" className="generate-text">
                        Generate Slots :
                    </label>
                    <input
                        value={generateSlots === 0 ? "" : generateSlots}
                        id="slotInput"
                        type="number"
                        placeholder=""
                        className="slot-input"
                        onChange={(e) => setGeneratedSlots(e.target.value)}
                    />
                </div>
                <button
                    className="generate-button"
                    onClick={onClickGenerateSlots}
                >
                    Generate
                </button>
                <p className="generate-text">
                    Available Slots:{" "}
                    <span className="available-slot">
                        {slots - parkingDataList.length}
                    </span>
                </p>
                <p className="generate-text">
                    Alloted Slots:{" "}
                    <span className="available-slot">
                        {parkingDataList.length}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default FormData;
