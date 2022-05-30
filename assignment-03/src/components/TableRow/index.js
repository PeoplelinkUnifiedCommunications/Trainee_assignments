import {RiEdit2Fill} from 'react-icons/ri'
import {MdDelete} from 'react-icons/md'
import './index.css'

function TableRow(props) {
    const { content, onDelete, onChange } = props
    const id = content[0]
    const name = content[1]
    const email = content[2]
    const gender = content[3]
    const aCount = content[4]
    const childrenCount = content[5]
    const date = content[6]

    const onDeleteTicket = () => {
        onDelete(id)
    }

    const onEditTicket = () => {
        onChange(id)
    }


    return (
        <tr key={id}>
            <td className='table-heading1'>{id}</td>
            <td className='table-heading1'>{name}</td>
            <td className='table-heading1 email-text '>{email}</td>
            <td className='table-heading1'>{gender}</td>
            <td className='child-count'>{aCount}</td>
            <td className='table-heading1 child-count'>{childrenCount}</td>
            <td className='table-heading1'>{date}</td>
            <td className='table-heading1'>
                <button className='edit-button' onClick={onEditTicket} ><RiEdit2Fill/></button>
                <button onClick={onDeleteTicket}><MdDelete/></button>
            </td>
        </tr>
    )
}
export default TableRow
