function TableCom({ details, deleteFunction, updateFunction }) {

    const onHandleDeleteFn = () => {
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

export default TableCom;