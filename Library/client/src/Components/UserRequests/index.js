import UserNav from '../UserNav'
import { store } from '../../App'
import { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { config } from '../../config'
import CircularProgress from '@material-ui/core/CircularProgress';
import EachRequestedBook from './EachRequestedBook'

function UserRequests(){

    const [token] = useContext(store)
    const [booksData, setBooksData] = useState([])
    const [loading, setLoading] = useState(false)
  

    const handleDelete=(id)=>{
        Axios.delete(`${config.url}/userCancleBooksRequest/${id}`, {
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res)=>{
            const newList = booksData.filter((each)=>each._id !== id)
            setBooksData(newList)
        })
    }

    useEffect(() => {
        setLoading(true)
        Axios.get(`${config.url}/userRequestedBooks`, {
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
                {<UserNav/>}
            </div>
            <div className='flexMinWidthCol'>
                {loading ? <CircularProgress disableShrink /> : <div>
                    <h1>books requested</h1>
                    {
                        booksData[0] === undefined ? <h1>No Books</h1> : 
                        <div className="flexMinWidthCol vrtlScroll hideScroll">
                            {booksData.map((each)=><li className='flexRow' key={each._id}>
                                    {<EachRequestedBook details={each} deleteRequest={handleDelete}/>}
                            </li>)}
                        </div>
                    }
                    </div>}
            </div>
        </div>
    )

}
export default UserRequests