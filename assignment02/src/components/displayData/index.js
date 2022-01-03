import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { delData, editData } from "../../parkingReducer";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoCarSportSharp, IoCarSportOutline } from "react-icons/io5";

import "./index.css";

const DisplayData = () => {
    const parkingDataList = useSelector((state) => state.addReducer.dataList);
    const searchData = useSelector((state) => state.addReducer.search);
    const disPatch = useDispatch();

    const filteredDataList = parkingDataList.filter((item) => {
        return Object.keys(item).some((key) => {
            if (key !== "id") {
                return item[key]
                    .toLowerCase()
                    .includes(searchData.toLowerCase());
            } else {
                return null;
            }
        });
    });

    return (
        <div className="display-data-container-bg">
            <table>
                <thead className="table-head">
                    <tr>
                        <th>Sl_Num</th>
                        <th>Registration_Number</th>
                        <th>Owner_Name</th>
                        <th>Car/Bike Color</th>
                        <th>Remove/Update</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredDataList.map((eachData) => (
                        <tr key={eachData.id}>
                            <td>{eachData.slotNumber}</td>
                            <td>{eachData.registrationNumber}</td>
                            <td>{eachData.ownerName}</td>
                            <td>
                                {eachData.vehicleColor}
                                {eachData.vehicleColor.toLowerCase() !==
                                "white" ? (
                                    <IoCarSportSharp
                                        style={{
                                            color: eachData.vehicleColor,
                                            marginLeft: "10px",
                                            paddingTop: "5px",
                                            fontSize: "30px",
                                        }}
                                    />
                                ) : (
                                    <IoCarSportOutline
                                        style={{
                                            marginLeft: "10px",
                                            paddingTop: "5px",
                                            fontSize: "30px",
                                        }}
                                    />
                                )}
                            </td>
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
