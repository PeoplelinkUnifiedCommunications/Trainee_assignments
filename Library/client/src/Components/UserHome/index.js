import { useEffect } from 'react'
import { config } from '../../config';
import Axios from 'axios'
import {store} from '../../App'
import { useContext } from "react"
import { useState } from 'react'

function UserHome() {
    const [token] = useContext(store)
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState([])

    useEffect(() => {
        Axios.get(`${config.url}/userHomeDetails`,{
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
            <a href='/userTotalBooks' className="card-container noTextDecoration jcCntr alignCntr goastBg borderRadius mrgnVLG mrgnLG">
                <div>
                    <h1>{`Total Books ${details.booksCount}`}</h1>
                </div>
            </a>
            <a href='/myIssuedBooks' className="card-container noTextDecoration jcCntr alignCntr goastBg borderRadius mrgnVLG mrgnLG">
                <div>
                    <h1>{`Issued Books ${details.issuedBooks}`}</h1>
                </div>
            </a>
            <a href='/myRequetedBooks' className="card-container noTextDecoration jcCntr alignCntr goastBg borderRadius mrgnVLG mrgnLG">
                <div>
                    <h1>{`My Book Requests ${details.requests}`}</h1>
                </div>
            </a>
            </>}
        </div>

    )
}
export default UserHome