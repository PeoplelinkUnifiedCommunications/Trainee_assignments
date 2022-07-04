import Button from '@material-ui/core/Button';

function TableRow(props) {
    const { details , acceptRequest} = props
    const { _id, bookId, title, author, publication, requestedBy } = details
    const accept=()=>{
        acceptRequest(_id)
    }

    return (
        <tr key={_id}>
            <td className='maxWidthTableRow'><center>{requestedBy}</center></td>
            <td className='maxWidthTableRow'><center>{title}</center></td>
            <td className='maxWidthTableRow'><center>{author}</center></td>
            <td className='maxWidthTableRow'><center>{publication}</center></td>
            <td className='maxWidthTableRow'><center>{bookId}</center></td>
            <td className='maxWidthTableRow'>
                <Button onClick={accept} variant="contained" color="primary">
                    Issue
                </Button>
            </td>
            
        </tr>
    )

}
export default TableRow