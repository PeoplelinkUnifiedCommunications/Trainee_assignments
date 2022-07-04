import UserNav from "../UserNav";
import React, { useContext, useEffect, useState } from "react";
import { store } from "../../App";
import Axios from "axios";


function TotalBooks() {


    const [token] = useContext(store)
    const [booksList, setBooksList] = useState([])
    const [loading, setLoading] = useState(true)
    console.log("...My books...", booksList)

    useEffect(() => {
        setLoading(true)
        Axios.get('http://localhost:3000/myBooks',
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
                        {booksList.map((each) => <li className="flexRow goastBg borderRadius mrgnVLG" key={each._id}>
                            <div className="flexMinWidthCol pdngHLG mrgnVLG">
                                <div className="flexRow">
                                    <div className="flexMinWidthCol">
                                        <p>Book Name: {each.title}</p>
                                    </div>
                                    <div className="flexAuto">
                                        <p>Author : {each.author}</p>
                                    </div>
                                </div>
                                <div className="flexRow">
                                    <div className="flexMinWidthCol">
                                        <p>Year: {each.year}</p>
                                    </div>
                                    <div className="flexAuto">
                                    <p>Published by: {each.publication}</p>
                                    </div>
                                </div>
                                
                            </div>
                        </li>

                        )}
                    </ul>
                </> : <h1>No books Available</h1>}
            </div>
        </div>
    )
}
export default TotalBooks