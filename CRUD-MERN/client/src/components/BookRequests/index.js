import AdminNav from "../AdminNav"
import React from "react";
import { useEffect, useState } from "react";
import { store } from "../../App";
import { useContext } from "react";
import Axios from "axios";
import BookItem from "./BookItem";


function BookRequests() {


    const [token] = useContext(store)
    const [requestedBooksList, setBooksList] = useState([])
    const [loading, setLoading] = useState(true)

    const issueBook=(id)=>{
        Axios.delete(`http://localhost:3000/issueBook/${id}`).then((res)=>{
            console.log(res.data)
        })
    }

    useEffect(() => {
        setLoading(true)
        Axios.get('http://localhost:3000/requestedBooks',
            {
                headers: {
                    'x-token': [localStorage.getItem("tokenLogin")]
                },
                contentType: "application/json"
            }
        )
            .then((res) => {
                setLoading(false)
                setBooksList(res.data);
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    },[token])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidthSideNav">
                {<AdminNav />}
            </div>
           <div className="flexMinWidthCol">
                <h1 className="pdngHLG">Books requested</h1>
                {loading && <h1>Loading...</h1>}
                {(!loading) && (requestedBooksList[0] !== undefined) ? 
                <ul className="booksListFlex">
                    {requestedBooksList.map((each)=><BookItem issueBook={issueBook} key={each._id} details={each}/>)}

                </ul> : <h1>No book requests</h1>}
           </div>
        </div>
    )
}
export default BookRequests