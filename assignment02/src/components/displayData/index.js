import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoCarSportSharp, IoCarSportOutline } from "react-icons/io5";
import axios from "../../server";

import "./index.css";

const DisplayData = (props) => {
    //const parkingDataList = useSelector((state) => state.addReducer.dataList);
    const [parkingDataList, setParkingDataList] = useState([]);
    const searchData = useSelector((state) => state.addReducer.search);
    //const disPatch = useDispatch();

    useEffect(() => {
        axios
            .get("/")
            .then((response) => setParkingDataList(response.data))
            .catch((error) => console.log(error.message));
    }, [parkingDataList]);

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

    const onEdit = (id) => {
        //console.log(id);
        props.onEditGetData(id);
    };

    const onDelete = (id) => {
        //console.log(id);
        axios
            .delete(`/delete/${id}`)
            .then((response) => console.log(response))
            .catch((error) => console.log(error.message));
    };
    // console.log(parkingDataList);

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
                        <tr key={eachData._id}>
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
                                    onClick={() => onDelete(eachData._id)}
                                />{" "}
                                <FiEdit
                                    className="icon"
                                    onClick={() => onEdit(eachData._id)}
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
