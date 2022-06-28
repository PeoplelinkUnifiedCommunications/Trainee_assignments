import React, { useContext, useState } from "react";
import { store } from "../../App";
import Axios from "axios";
import { useEffect } from "react";
import AdminNav from "../AdminNav";
import UserNav from "../UserNav";
import './styles.css'

const MyProfile = () => {

    const [token] = useContext(store)
    const [data, setData] = useState([])

    const renderNav = () => {
        if (!data) {
            return <>
                {<h1>Loading...</h1>}</>
        } else if (data["userType"] === "User") {
            return <>{<UserNav/>}</>
        }else if (data["userType"] === "Admin"){
            return <>{<AdminNav/>}</>
        }

    }

    useEffect(()=>{
        console.log(".......", data["email"])
    }, [data])


    useEffect(() => {
        Axios.get('http://localhost:3000/myprofile',
            {
                headers: {
                    'x-token': [token]
                },
                contentType: "application/json"
            }
        )
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [token])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidthSideNav">{renderNav()}</div>
            <div className="flexMinWidthCol alignCntr jcCntr">
                <div>
                    <img src="./Images/profile.jpg" alt="profilepic" />
                </div>
                <div className="flexRow">
                    <div className="flexAutoCol mrgnRLG pdngHLG">
                        {data && <h3>{`Name  `}</h3>}
                        {data && <h3>{`User Type  `}</h3>}
                        {data && <h3>{`Email  `}</h3>}

                    </div>
                    <div className="flexMinWidthCol pdngHLG">
                        {data && <h3 className="blueFont">{` : ${data["username"]}`}</h3>}
                        {data && <h3 className="blueFont">{` : ${data["userType"]}`}</h3>}
                        {data && <h3 className="blueFont">{` : ${data["email"]}`}</h3>}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyProfile;