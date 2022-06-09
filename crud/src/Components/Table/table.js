import React from "react";
import {RiEdit2Fill} from "react-icons/ri";
import {AiFillDelete} from "react-icons/ai";
import "./table.css";
function Table(props) {

    
    const {formDetails, editDetails, deleteDetails} = props;
    const id = formDetails[0];
    
    const changeDetails = (id) => {
        editDetails(formDetails[0])  
    }

    const removeDetails = (id) => {
        deleteDetails(formDetails[0])
    }

    return (
        <tr key={id}>
            <td className="field">{formDetails[1]}</td>
            <td className="field">{formDetails[2]}</td>
            <td className="field">{formDetails[3]}</td>
            <td className="field">{formDetails[4]}</td>
            <td className="field">{formDetails[5]}</td>
            <td className="field">{formDetails[6]}</td>
            <td className="field"><button className="editBtn" onClick={changeDetails}><RiEdit2Fill className="edit2Fill"/></button></td>
            <td className="field"><button className="deleteBtn" onClick={removeDetails}><AiFillDelete className="fillDelete"/></button></td>
        </tr>
    )
}
export default Table;
