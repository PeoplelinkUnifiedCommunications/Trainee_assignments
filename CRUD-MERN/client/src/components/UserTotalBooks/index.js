import React, { useContext, useEffect, useState } from "react";
import { store } from "../../App";
import Axios from "axios";
import BookListItem from "../BookListItem";

import "./styles.css"
import UserNav from "../UserNav";

function TotalBooks() {


    const [token] = useContext(store)
    const [booksList, setBooksList] = useState([])
    const [loading, setLoading] = useState(true)

    const handleBookRequest=(id)=>{
        const requestedBook = booksList.filter((each)=> each._id === id)
        const book = requestedBook[0]
        console.log("....book requested", book)
        Axios.post("http://localhost:3000/addBooKRequest",
        book,{
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res)=>{
            alert(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(() => {
        setLoading(true)
        Axios.get('http://localhost:3000/totalBooks',
            {
                headers: {
                    'x-token': [token]
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
    }, [token])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidthSideNav">
                {<UserNav />}
            </div>
            <div className="flexMinWidthCol pdngHLG">
                {loading && <h1>Loading...</h1>}
                {((!loading) && booksList) ? <>
                    <h1>List of Books</h1>
                    <ul className="noPdng booksListFlex">
                        {booksList.map((each) => <BookListItem key={each._id} request={handleBookRequest} details={each}/> )}
                    </ul>
                </> : <h1>No books Available</h1>}
            </div>
        </div>
    )
}
export default TotalBooks