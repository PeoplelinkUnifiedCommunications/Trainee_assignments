import { useEffect } from 'react'
import { config } from '../../config';
import Axios from 'axios'
import {store} from '../../App'
import './styles.css'
import { useContext } from "react"
import { useState } from 'react'

function AdminHome() {
    const [token] = useContext(store)
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState([])



    useEffect(() => {
        Axios.get(`${config.url}/adminHome`,{
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res)=>{
            console.log(res)
            setDetails(res.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[token])

    return (
        <div className="fullDiv jcSpaceAround flexWrap">
            {loading ? <h1>Loading....</h1> : 
            <>
            <a href='/totalBooks' className="card-container noTextDecoration jcCntr alignCntr goastBg borderRadius mrgnVLG mrgnLG">
                <div>
                    <h1>{`Total Books ${details.booksCount}`}</h1>
                </div>
            </a>
            <a href='/users' className="card-container noTextDecoration jcCntr alignCntr goastBg borderRadius mrgnVLG mrgnLG">
                <div>
                    <h1>{`Total Users ${details.usersCount}`}</h1>
                </div>
            </a>
            <a href='/issuedBooks' className="card-container noTextDecoration jcCntr alignCntr goastBg borderRadius mrgnVLG mrgnLG">
                <div>
                    <h1>{`Issued Books ${details.issuedBooks}`}</h1>
                </div>
            </a>
            <a href='/requetedBooks' className="card-container noTextDecoration jcCntr alignCntr goastBg borderRadius mrgnVLG mrgnLG">
                <div>
                    <h1>{`New Requests ${details.requests}`}</h1>
                </div>
            </a>
            </>}
        </div>

    )
}
export default AdminHome