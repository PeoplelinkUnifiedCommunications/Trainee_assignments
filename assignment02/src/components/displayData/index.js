import React from "react";
import "./index.css";

const DisplayData = () => {
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
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                        <td>February</td>
                        <td>$80</td>
                        <td>February</td>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                        <td>February</td>
                        <td>$80</td>
                        <td>February</td>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                        <td>February</td>
                        <td>$80</td>
                        <td>February</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DisplayData;
