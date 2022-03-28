import React from 'react'

function Table({ oneUser, onDeleteHandler, editFn }) {
    const _id = oneUser._id


    // const onDelete = () => {
    //     onDeleteHandler(_id)
    // }
    // const editDetails = () => {
    //     editFn(_id)
    // }


    return (
        <tr key={oneUser._id}>
            <td><img src={oneUser.imgUrl} alt="dp" /></td>
            <td>{oneUser.name}</td>
            <td>{oneUser.email}</td>
            <td>{oneUser.phone}</td>
            <td>{oneUser.dob}</td>
            <td>{oneUser.role}</td>
            <td><button className="input2" type="button" onClick={() => { editFn(_id) }} >Edit</button></td>
            <td> <button className="inputD" type="button" onClick={() => { onDeleteHandler(_id) }}>Delete</button></td>


        </tr>
    );
}

export default Table;


