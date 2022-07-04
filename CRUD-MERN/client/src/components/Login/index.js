import React, { useState, useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { store } from "../../App";
import { Navigate } from "react-router";
import Button from '@material-ui/core/Button';
import Axios from "axios";
import { useNavigate } from 'react-router';
// import { createUser } from '../../config'

import "./styles.css"
import { config } from '../../config';

function Login() {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const [token, setToken] = useContext(store)
    const [errMsg, setErrorMsg] = useState("")

    const navigate = useNavigate()

    const logInUser = () => {
        Axios.post(`${config.url}/login`,
            credentials).then((res)=>{
                setToken(res.data)
                console.log("....", res.data)
                localStorage.setItem("tokenLogin", res.data)
                navigate("/myprofile")
            }).catch((err) => {
                setErrorMsg(err.response.data)
            })
    }

    const isLoggedIn = localStorage.getItem("tokenLogin") !== null
    if(isLoggedIn){
        setToken(localStorage.getItem("tokenLogin"))
    }
    

    const submitHandle = (e) => {
        e.preventDefault();
        logInUser()
    }

    useEffect(() => {
        if (token) {
            console.log("....login return token...", token)
            return <Navigate to="/" />
        }
    }, [token])


    return (
        <div className="flexRow fullHeight jcCntr alignCntr">
            <div className="flexAuto borderRadius borderRed pdngHLG">
                <form onSubmit={submitHandle} className='flexCol alignCntr mrgnVLG'>
                    <h1 className='Login-heading'>Log in to Library</h1>
                    {errMsg.length > 0 && <p className='errMsg'>{errMsg}</p>}
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            label="Email"
                            value={credentials.email}
                            onChange={(e) => { setCredentials({ ...credentials, email: e.target.value }) }}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow jcCntr'>
                        <TextField
                            type="password"
                            required
                            label="Password"
                            margin='dense'
                            value={credentials.password}
                            onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }}
                            variant="outlined" />
                    </div>
                    <div className='flexRow jcCntr mrgnTMD'>
                        <Button type="submit" variant="contained" color="secondary">
                            Login
                        </Button>
                    </div>
                    <p>Don't have account sign in <a href='/register'>here</a></p>
                </form>
            </div>
        </div>
    )
}
export default Login