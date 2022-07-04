import AdminNav from "../AdminNav"
import CircularProgress from '@material-ui/core/CircularProgress';
import { store } from '../../App'
import { useContext } from 'react'
import Axios from 'axios'
import { config } from '../../config'
import { useState, useEffect } from 'react'
import TableRow from "./TableRow";



function RequestedBooks() {

    const [token] = useContext(store)
    const [RequestsList, setRequestsList] = useState([])
    const [isLoading, setisLoading] = useState(true)
    console.log(RequestsList, ".......RequestsList")


    const handleAccept = (id) => {
        Axios.delete(`${config.url}/acceptBookRequest/${id}`).then((res) => {
            console.log(res.data)
            const newList = RequestsList.filter((each) => each._id !== id)
            setRequestsList(newList)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        Axios.get(`${config.url}/getRequestList`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res) => {
            setRequestsList(res.data)
            setisLoading(false)
        }).catch((err) => {
            console.log(err)
            setisLoading(false)
        })
    }, [token])



    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidth jcCntr">
                {<AdminNav />}
            </div>
            <div className="flexMinWidthCol jcCntr pdngHLG alignCntr">
                {RequestsList.length > 0 && <h1 className="alignSelfStart">Requests</h1>}
                {isLoading ? <CircularProgress /> :
                    <div className="pdngHLG fullWidth booksListFlex">
                        {RequestsList[0] === undefined ? <h1>No New Requests</h1> :
                            <table>
                                <tr>
                                    <th className='maxWidthTableRow'>Requested By</th>
                                    <th className='maxWidthTableRow'>Title</th>
                                    <th className='maxWidthTableRow'>Author</th>
                                    <th className='maxWidthTableRow'>Publication</th>
                                    <th className='maxWidthTableRow'>Book Id</th>
                                    <th className='maxWidthTableRow'>Issue</th>
                                </tr>
                                {RequestsList.map((each) => <TableRow acceptRequest={handleAccept}
                                    details={each} key={each._id} />)}
                            </table>}
                    </div>}
            </div>
        </div>
    )

}
export default RequestedBooks