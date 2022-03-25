import React from 'react';

function Table({details, deleteFunction, updateFunction }) {

    const onHandleDeleteFn = () =>{
        deleteFunction(details._id)
    }

    const onHandleEditFn = () => {
        updateFunction(details._id)
    }

  return (
    <tr>
      {/* <td><img src={details.url} alt="profile"/></td> */}
      {/* <td>{details.url}</td> */}
      <td>{details.firstName}</td>
      <td>{details.lastName}</td>
      <td>{details.email}</td>
      <td>{details.phone}</td>
      <td>{details.dob}</td>
      <td>{details.company}</td>
      <td>{details.role}</td>
      <td>
        <button type="button" onClick={onHandleEditFn} className='tableBtn'>
          Edit
        </button>
      </td>
      <td>
        <button type="button" onClick={onHandleDeleteFn} className='tableBtn'>
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
