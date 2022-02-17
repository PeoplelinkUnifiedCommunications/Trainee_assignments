import React from 'react';

function Table({ details, deleteFunction, updateFunction }) {

    const onHandleDeleteFn = () =>{
        deleteFunction(details.id)
    }

    const onHandleEditFn = () => {
        updateFunction(details.id)
    }

  return (
    <tr>
      <td>{details.firstName}</td>
      <td>{details.lastName}</td>
      <td>{details.email}</td>
      <td>{details.phone}</td>
      <td>{details.company}</td>
      <td>{details.dob}</td>
      <td>
        <button type="button" onClick={onHandleEditFn}>
          Edit
        </button>
      </td>
      <td>
        <button type="button" onClick={onHandleDeleteFn}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Table;







// import React from 'react';

// function Table() {
//     return
//     (<thead><tr>
//         <td>{eachData.firstName}</td>
//         <td>{eachData.lastName}</td>
//         <td>{eachData.email}</td>
//         <td>{eachData.phone}</td>
//         <td>{eachData.company}</td>
//         <td>{eachData.dob}</td>
//         <td>
//             <button>
//                 Edit
//             </button>
//         </td>
//         <td>
//             <button>
//                 Delete
//             </button>
//         </td>
//     </tr>
//     </thead>)
// }

// export default Table;
