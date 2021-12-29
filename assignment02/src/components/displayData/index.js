import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delData, editData } from "../../parkingReducer";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import "./index.css";

const DisplayData = () => {
    const parkingDataList = useSelector((state) => state.addReducer.dataList);
    const disPatch = useDispatch();

    return (
        <div className="display-data-container-bg">
            <table>
                <thead>
                    <tr>
                        <th>Sl_Num</th>
                        <th>Registration_Number</th>
                        <th>Owner_Name</th>
                        <th>Car/Bike Color</th>
                        <th>Remove/Update</th>
                    </tr>
                </thead>
                <tbody>
                    {parkingDataList.map((eachData) => (
                        <tr>
                            <td>{eachData.slotNumber}</td>
                            <td>{eachData.registrationNumber}</td>
                            <td>{eachData.ownerName}</td>
                            <td>{eachData.vehicleColor}</td>
                            <td>
                                <MdDeleteOutline
                                    className="icon"
                                    onClick={() =>
                                        disPatch(delData(eachData.id))
                                    }
                                />{" "}
                                <FiEdit
                                    className="icon"
                                    onClick={() =>
                                        disPatch(editData(eachData.id))
                                    }
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayData;
