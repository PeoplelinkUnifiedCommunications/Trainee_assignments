import React from "react";

function Table({eachItem, editFunction, deleteFunction}){

    const onHandleEdit = () => {
        editFunction(eachItem._id)
    }

    return(
        <tr>
            <td>{eachItem.fname}</td>
            <td>{eachItem.lname}</td>
            <td>{eachItem.email}</td>
            <td>{eachItem.phone}</td>
            <td>{eachItem.company}</td>
            <td>{eachItem.designation}</td>
            <td>{eachItem.date}</td>
            <td><img src={eachItem.image} className="imageSize" alt={eachItem.fname}/></td>
            <td>
                <button className="editButton" type='button' onClick={onHandleEdit}>Edit
                </button>
            </td>
            <td>
                <button
                className="editButton"
                    type="button"
                    onClick={() => deleteFunction(eachItem._id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Table
