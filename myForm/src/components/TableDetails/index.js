import React from "react";

function Table({eachItem, editFunction, deleteFunction}){

    const onHandleEdit = () => {
        editFunction(eachItem.id)
    }

    console.log(eachItem)
    return(
        <tr>
            <td>{eachItem.fname}</td>
            <td>{eachItem.lname}</td>
            <td>{eachItem.email}</td>
            <td>{eachItem.phone}</td>
            <td>{eachItem.company}</td>
            <td>{eachItem.date}</td>
            <td>
                <button type='button' onClick={onHandleEdit}>Edit
                </button>
            </td>
            <td>
                <button
                    type="button"
                    onClick={() => deleteFunction(eachItem.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default Table