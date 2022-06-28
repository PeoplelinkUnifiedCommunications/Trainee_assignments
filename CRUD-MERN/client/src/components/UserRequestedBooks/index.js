import React, { useContext, useEffect, useState } from "react";
import { store } from "../../App";
import Axios from "axios";
import "./styles.css"
import './BookItem'
import UserNav from "../UserNav";
import BookItem from "./BookItem";

function UserRequestedBooks() {


    const [token] = useContext(store)
    const [booksList, setBooksList] = useState([])
    const [loading, setLoading] = useState(true)

    const deleteBookRequest=(id)=>{
        Axios.delete(`http://localhost:3000/deleteIssueRequest/${id}`).then((res)=>{
            alert(res.data)
            getList()
        })
    }

    const getList =()=>{
        setLoading(true)
        Axios.get('http://localhost:3000/userRequestedBooks',
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

    }


    useEffect(() => {
        getList()
    },[])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidthSideNav">
                {<UserNav />}
            </div>
            <div className="flexMinWidthCol pdngHLG">
                {loading && <h1>Loading...</h1>}
                {((!loading) && (booksList[0] !== undefined)) ? <>
                    <h1>List of Books</h1>
                    <ul className="noPdng booksListFlex">
                        {booksList.map((each) => <BookItem deleteBook={deleteBookRequest} key={each._id} details={each}/>)}
                    </ul>
                </> : <h1>No books Available</h1>}
            </div>
        </div>
    )
}
export default UserRequestedBooks