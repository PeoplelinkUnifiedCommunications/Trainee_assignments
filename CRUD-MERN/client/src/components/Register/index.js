import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [registerDetails, setState] = useState({
        username: "",
        userType: "",
        email: "",
        password: "",
        confirmPassword: "",
        year:""
    })
    const navigate = useNavigate()

    const [errMsg, setErrMsg] = useState("")
    const HandleChange = (e) => {
        setState({ ...registerDetails, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerDetails.password === registerDetails.confirmPassword) {
            setErrMsg("")
            axios.post('http://localhost:3000/register', registerDetails).then((res) => {
                console.log(res.data)
                alert(res.data)

                navigate("/login")
            }).catch((err) => {
                console.log("...error...", err.response.data)
                setErrMsg(err.response.data)
            })
        }else{
            setErrMsg("password Does not match")
        }

    }

    return (
        <div className="flexRow fullHeight jcCntr alignCntr">
            <div className="flexAuto borderRadius borderRed pdngHLG">
                <form onSubmit={handleSubmit} className='flexCol alignCntr mrgnVLG'>
                    <h1 className='Login-heading'>Log in to Library</h1>
                    {errMsg.length > 0 && <p className="errMsg">*{errMsg}</p>}
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            label="UserName"
                            name="username"
                            value={registerDetails.username}
                            onChange={HandleChange}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            label="User Type"
                            name="userType"
                            value={registerDetails.userType}
                            onChange={HandleChange}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            label="Email"
                            name="email"
                            value={registerDetails.email}
                            onChange={HandleChange}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            type="password"
                            label="Password"
                            name="password"
                            value={registerDetails.password}
                            onChange={HandleChange}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            type="password"
                            label="Confirm Password"
                            name="confirmPassword"
                            value={registerDetails.confirmPassword}
                            onChange={HandleChange}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow jcCntr'>
                        <TextField
                            required
                            label="Year"
                            name="year"
                            value={registerDetails.year}
                            onChange={HandleChange}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow jcCntr mrgnTMD'>
                        <Button type="submit" variant="contained" color="secondary">
                            Register
                        </Button>
                    </div>
                    <p>Have account sign in <a href='/login'>here</a></p>
                </form>
            </div>
        </div>


    )
}
export default Register;