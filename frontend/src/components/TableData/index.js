import React from "react";
function Table({ eachItem, editFunction, deleteFunction }) {
  
  const onHandleEdit = () => {
    editFunction(eachItem._id);
  };
  return (
    <>
          <tr>
            <td>{eachItem.fname}</td>
            <td>{eachItem.lname}</td>
            <td>{eachItem.email}</td>
            <td>{eachItem.phone}</td>
            <td>{eachItem.company}</td>
            <td>{eachItem.designation}</td>
            <td>{eachItem.dob}</td>
            <td><img src={eachItem.profile}  alt={eachItem.fname}/></td>
            <td>
              <button type="button" onClick={onHandleEdit} style = {{padding: "0.2rem 1rem", backgroundColor : "#34ebde"}}>
                Edit
              </button>
            </td>
            <td>
              <button
                type="button" style = {{padding: "0.2rem 1rem", backgroundColor : "#f06269"}}
                onClick={() => deleteFunction(eachItem._id)}
              >
                Delete
              </button>
            </td>
          </tr>
    </>
  );
}
export default Table;