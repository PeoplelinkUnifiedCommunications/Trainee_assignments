import React from 'react'

function Table({ users }) {

    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(each => (
                        <tr key={each._id}>
                            <td>{each.name}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table