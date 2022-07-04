import AdminNav from "../AdminNav"
import React, { useContext, useEffect, useState } from "react";
import { store } from "../../App";
import Axios from "axios";
import './styles.css'


function Users() {


    const [token] = useContext(store)
    const [usersList, setUsersList] = useState([])
    const [loading, setLoading] = useState(true)
    console.log("...Available users...", usersList)

    useEffect(() => {
        setLoading(true)
        Axios.get('http://localhost:3000/users',
            {
                headers: {
                    'x-token': [localStorage.getItem("tokenLogin")]
                },
                contentType: "application/json"
            }
        )
            .then((res) => {
                setLoading(false)
                setUsersList(res.data);
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)
            })
    }, [token])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidthSideNav">
                {<AdminNav />}
            </div>
            <div className="flexMinWidthCol pdngHLG">
                {loading && <h1>Loading...</h1>}
                {((!loading) && usersList) ?
                    <>
                        <h1>Users</h1>
                        <ul>
                            {usersList.map((each) =>
                                <li key={each._id} className="noneList goastBg mrgnVLG flexRow">
                                    <div className="flexAuto minWidth">
                                        <h3 className="pdngHLG">{`User Name: ${each.username}`}</h3>
                                    </div>
                                    <div className="flexMinWidthCol">
                                        <h3 className="pdngHLG">{`Year: ${each.year}`}</h3>
                                    </div>

                                </li>)}
                        </ul>
                    </> :
                    <h1>No books Available</h1>}
            </div>
        </div>
    )
}
export default Users