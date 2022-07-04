import { useContext, useEffect } from "react"
import { store } from '../../App'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import AdminNav from '../AdminNav'
import { config } from '../../config';
import Axios from 'axios'
import UserNav from "../UserNav";
import UserHome from "../UserHome";
import AdminHome from "../AdminHome";


function Home() {
    const [token, setToken] = useContext(store)
    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();

    const renderHomePageContent=(token)=>{
        Axios.get(`${config.url}/homePage`,{
            headers: {
                'x-token': [token]
            },
            contentType: "application/json"
        }).then((res)=>{
            setUserData(res.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    }

    const renderNav=()=>{
        const {userType} = userData
        if(userType === "User"){
            return <UserNav/>
        }
        return <AdminNav/>
    }



    useEffect(() => {
        if (token === null) {
            const loginToken = localStorage.getItem("TOKEN")
            if (localStorage.getItem("TOKEN") === null) {
                navigate("/login")
            } else {
                setToken(loginToken)
                renderHomePageContent(loginToken)
                console.log(".....loginToken", loginToken)
            }
        }else{
            renderHomePageContent(token)
        } 

    }, [token, navigate, setToken])

    return (
        <div className="flexRow fullHeight">
            <div className="flexAuto minWidth fullHeight jcCntr">
                {loading ? <CircularProgress disableShrink /> : renderNav()}
            </div>
            <div className="flexMinWidthCol alignCntr jcCntr">
                {loading ? <CircularProgress disableShrink /> : <>
                {userData["userType"] === "User" ? <UserHome/> : <AdminHome/>}</>} 
                
            </div>
        </div>
    )
}
export default Home