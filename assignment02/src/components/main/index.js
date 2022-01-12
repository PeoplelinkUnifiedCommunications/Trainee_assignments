import React, { useState } from "react";
import FormData from "../formData";
import DisplayData from "../displayData";
import axios from "../../server";
import "./index.css";

const Main = () => {
    const [editableData, setEditableData] = useState([]);

    const onEditGetData = (id) => {
        console.log(id);
        axios
            .get(`/get/${id}`)
            .then((response) => setEditableData(response.data))
            .catch((error) => console.log(error.message));
    };

    const afterEditSetEditableData = () => {
        setEditableData([]);
    };

    //console.log(editableData);

    return (
        <div className="main-container">
            <FormData
                editableData={editableData}
                afterEditSetEditableData={afterEditSetEditableData}
            />
            <DisplayData onEditGetData={onEditGetData} />
        </div>
    );
};

export default Main;
