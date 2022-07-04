import UserNav from '../UserNav'
import { store } from '../../App'
import { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { config } from '../../config'
import CircularProgress from '@material-ui/core/CircularProgress';
import UserEachBooks from '../UserEachBooks'


function UserBooks(){

    const [token] = useContext(store)
    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState(false)

    const bookRequest=(id)=>{
        const requestedBook = booksData.filter((each)=> each._id === id)
        const book = requestedBook[0]
        Axios.post(`${config.url}/requestBook`,
        book,{
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res)=>{
            alert(res.data)
        }).catch((error)=>{
            alert(error.response.data)
        })
    }

    useEffect(() => {
        setLoading(true)
        Axios.get(`${config.url}/userTotalBooks`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res) => {
            setBooksData(res.data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            setLoading(false)
        })


    }, [token])


    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidth jcCntr">
                {<UserNav />}
            </div>
            <div className='flexMinWidthCol'>
                {loading ? <CircularProgress disableShrink /> : <div>
                    {
                        booksData[0] === undefined ? <h1>No Books</h1> : 
                        <div className="flexMinWidthCol vrtlScroll hideScroll">
                            {booksData.map((each)=><li className='flexRow' key={each._id}>
                                    {<UserEachBooks details={each} request={bookRequest}/>}
                            </li>)}
                        </div>
                    }</div>}
            </div>
        </div>
    )

}
export default UserBooks


