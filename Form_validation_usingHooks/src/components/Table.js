import React from 'react';

function Table({ details, handleDeletTr, handleEditInput }) {
  return (
    <tr>
      <td>{details.firstname}</td>
      <td>{details.lastname}</td>
      <td>{details.email}</td>
      <td>{details.phone}</td>
      <td>{details.company}</td>
      <td>{details.dob}</td>
      <td>
        <button type="button" onClick={() => handleEditInput(details.id)}>
          Edit
        </button>
      </td>
      <td>
        <button type="button" onClick={() => handleDeletTr(details.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Table;
