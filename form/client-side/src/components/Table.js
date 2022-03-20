import React from 'react';

// onClick={() => handleEditInput(details.id)}
// onClick={() => handleDeletTr(details.id)}

function Table({ deleteDisable,setDeleteDisable,details, handleDeletTr, handleEditInput }) {


  const isEditCliked = (e) => {
    handleEditInput(details._id)
    setDeleteDisable(true)
    // setDeleteDisable(!deleteDisable)
  }

  // setDeleteDisable(false)
  
  // () => handleEditInput(details._id)
  return (
    <tr>
      <td><img src={details.image} alt={details.firstname} className="image-width"/></td>
      <td>{details.firstname}</td>
      <td>{details.lastname}</td>
      <td>{details.email}</td>
      <td>{details.phone}</td>
      <td>{details.company}</td>
      <td>{details.role}</td>
      <td>{details.dob}</td>
      <td>
        <button type="button" id={details._id} onClick={isEditCliked}>
          Edit
        </button>
      </td>
      <td>
        <button type="button" id={details._id} disabled={deleteDisable} onClick={() => handleDeletTr(details._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Table;
