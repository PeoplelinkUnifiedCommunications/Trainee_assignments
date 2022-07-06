import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { config } from '../../config';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";


function Register() {

    const [userDetails, setUserDetails] = useState({ name: "", userType:"User", email: "", password: "", confirmPassword: "", year: "" })
    const [errMsg, setErrorMsg] = useState("")
    const navigate = useNavigate()

    const registerNewUser=()=>{
        Axios.post(`${config.url}/registerUser`,
            userDetails,{
                headers: {
                    'x-token': ["newUser"]
                },
                contentType: "application/json"
            }).then((res)=>{
              console.log("register response", res)
              alert(res.data)
              navigate("/login")
            }).catch((err) => {
               console.log(err)
               setErrorMsg(err.response.data)
            })
        
    }

    const submitHandle = (e) => {
        e.preventDefault()
        if (userDetails.userType === "") {
            setErrorMsg("Select User Type")
        }else if(userDetails.year === ""){
            setErrorMsg("Select Year")
        }else if(userDetails.password !== userDetails.confirmPassword){
            setErrorMsg("Password Does Not Match")
        } else {
            setErrorMsg("")
            registerNewUser()
        }
    }


    return (
        <div className="flexRow fullHeight jcCntr alignCntr">
            <div className="flexAuto borderRadius borderWidth solidBorder borderRed pdngHLG">
                <form onSubmit={submitHandle} className='flexCol alignCntr mrgnVLG'>
                    <h1 className='Login-heading'>Register to Library</h1>

                    <div className='flexRow'>
                        <TextField
                            fullWidth
                            required
                            label="Name"
                            value={userDetails.name}
                            onChange={(e) => { setUserDetails({ ...userDetails, name: e.target.value }) }}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow'>
                        <TextField
                            fullWidth
                            required
                            type="email"
                            label="Email"
                            value={userDetails.email}
                            onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }}
                            variant="outlined"
                            margin='dense' />
                    </div>
                    <div className='flexRow'>
                        <TextField
                            fullWidth
                            type="password"
                            required
                            label="Password"
                            margin='dense'
                            value={userDetails.password}
                            onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }}
                            variant="outlined" />
                    </div>
                    <div className='flexRow'>
                        <TextField
                            fullWidth
                            type="password"
                            required
                            label="Confirm Password"
                            margin='dense'
                            value={userDetails.confirmPassword}
                            onChange={(e) => { setUserDetails({ ...userDetails, confirmPassword: e.target.value }) }}
                            variant="outlined" />
                    </div>
                    <div className='flexRow pdngHLG'>
                        <div className='flexMinWidthCol mrgnRLG'>
                            <FormControl variant="outlined" margin="dense" className="flexRow ">
                                <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={userDetails.userType}
                                    label="age"
                                    onChange={(e) => { setUserDetails({ ...userDetails, userType: e.target.value }) }}
                                >
                                    <MenuItem value={"User"}>User</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div  className='flexMinWidthCol'>
                            <FormControl variant="outlined" margin="dense" className="flexRow ">
                                <InputLabel id="demo-select-outlined-label">Year</InputLabel>
                                <Select
                                    labelId="demo-select-outlined-label"
                                    id="demo-select-outlined"
                                    value={userDetails.year}
                                    label="age"
                                    onChange={(e) => { setUserDetails({ ...userDetails, year: e.target.value }) }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"1"}>1 st</MenuItem>
                                    <MenuItem value={"2"}>2 nd</MenuItem>
                                    <MenuItem value={"3"}>3 rd</MenuItem>
                                    <MenuItem value={"4"}>4 th</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    {<p className="errorMsg">{errMsg}</p>}
                    <div className='flexRow jcCntr mrgnTMD'>
                        <Button type="submit" variant="contained" color="secondary">
                            Register
                        </Button>
                    </div>
                    <p>Don't have account sign in <a href='/login'>here</a></p>
                </form>
            </div>
        </div>
    )
}
export default Register