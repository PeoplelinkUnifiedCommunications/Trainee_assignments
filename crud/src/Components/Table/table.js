import React from "react";
import "./table.css";
function Table(props) {
    const {formDetails} = props;
    // console.log(formDetails);
    return (
        <tr>
            <td className="field">{formDetails[0]}</td>
            <td className="field">{formDetails[1]}</td>
            <td className="field">{formDetails[2]}</td>
            <td className="field">{formDetails[3]}</td>
            <td className="field">{formDetails[4]}</td>
            <td className="field">{formDetails[5]}</td>
        </tr>
    )
}
export default Table;
