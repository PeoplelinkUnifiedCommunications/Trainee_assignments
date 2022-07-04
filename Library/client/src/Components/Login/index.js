import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./styles.css"
import { store } from '../../App';
import { useContext } from 'react'
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import { config } from '../../config';


function Login() {

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const [errorMsg, setErrorMsg] = useState("")
    const [token, setToken] = useContext(store)
    const navigate = useNavigate()

    const loginNewUser = () => {
        Axios.post(`${config.url}/loginUser`,
            credentials).then((res) => {
                console.log("register response", res)
                setToken(res.data)
                localStorage.setItem("TOKEN", res.data)
                navigate("/")
            }).catch((err) => {
                console.log(err)
                setErrorMsg(err.response.data)
            })
    }

    const loginUser = () => {
        loginNewUser()
    }

    useEffect(() => {
        console.log("...token log in page", token)
        if (token !== null) {
            navigate("/")
        }
    }, [token, navigate])

    useEffect(() => {
        if (localStorage.getItem("TOKEN") !== null) {
            const tokenExist = localStorage.getItem("TOKEN")
            setToken(tokenExist)
        }
    })



    const submitHandle = (e) => {
        e.preventDefault();
        if (credentials.userType === "") {
            setErrorMsg("user type is required")
        } else {
            setErrorMsg("")
            loginUser()
        }

    }



    return (
        <div className="flexRow fullHeight jcCntr alignCntr">
            <div className="flexAuto borderRadius borderWidth solidBorder borderRed pdngHLG">
                <form onSubmit={submitHandle} className='flexCol alignCntr mrgnVLG'>
                    <h1 className='Login-heading'>Log in to Library</h1>
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            label="Email"
                            value={credentials.email}
                            onChange={(e) => { setCredentials({ ...credentials, email: e.target.value }) }}
                            variant="outlined"
                            margin='dense'
                            fullWidth
                        />
                    </div>
                    <div className='flexRow jcCntr'>
                        <TextField
                            type="password"
                            required
                            label="Password"
                            margin='dense'
                            value={credentials.password}
                            onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }}
                            variant="outlined"
                            fullWidth
                        />

                    </div>

                    {<p className="errorMsg">{errorMsg}</p>}
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