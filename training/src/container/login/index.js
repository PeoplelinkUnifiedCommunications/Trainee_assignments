import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import { FormHelperText } from '@material-ui/core';
import "../login/style.css"

import { Link, useNavigate } from 'react-router-dom';
const Index = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState({});
    const handelChange = (e) => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("................", data)
        const {
            email,
            password
        } = data

        const validateEmail = function (d) {
            var re =
                /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,4})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
            return re.test(d);
        };
        const validatePassword = function (a) {
            var pss = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
            return pss.test(a);
        }
        let form_error = {};
        if (email === "") {
            form_error["email"] = "Enter your Email Id";
        } else if (email !== "" && !validateEmail(email)) {
            form_error["email"] = "Please Enter Valid Email";
        }
        if (password === "") {
            form_error["password"] = "Enter Your Password"
        }
        else if (password !== "" && !validatePassword(password)) {
            form_error["password"] = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        }
        setErrorMessage(form_error)

        if (
            Object.keys(form_error).length <= 0
        ) {
            // setFormSubmit(true);
            navigate("/dashboard");
        }
    }

    return (


        <div className='flexCol fullHeight'>
            {/* <Header /> */}
            <div className='flexMinWidthCol alignCntr justifyCntr  pdngLG'>
                <div className=' width50'>
                    <div className='flexRow titleHeading alignCntr justifyCntr'>
                        <span className='headingXL'> Login</span>
                    </div>
                    <form autoComplete='off' onSubmit={handleSubmit}>

                        <div className='flexCol pdngBMD'>
                            <TextField id="standard-basic" label="Email" type="text" fullWidth name='email' value={data.email} onChange={handelChange} />
                            {/* <span>{errorMessage}</span> */}
                            {errorMessage &&
                                <FormHelperText className='errorMsg'>
                                    {errorMessage["email"]}
                                </FormHelperText>
                            }
                        </div>
                        <div className='flexCol'>
                            <TextField id="standard-basic" label="Password" type="password" fullWidth name='password' value={data.password} onChange={handelChange} />
                            <span className='errorMsg'>
                                {errorMessage["password"]}
                            </span>
                        </div>
                        <div className='flexRow justifyEnd pdngVSM'>
                            <span className='subHdngBlackTxtSM'>
                                Forgot Password ?
                            </span>
                        </div>
                        {/* <Link to="/dashboard"> */}
                        <div className='flexRow   pdngTMD'>
                            <Button variant="contained" color="primary" fullWidth type='submit' name="submit">
                                Login
                            </Button>
                        </div>
                        {/* </Link> */}

                    </form>
                    <div className='flexRow pdngVMD alignCntr justifyCntr'>
                        <span className='lightTxt'>
                            Don't have an account ? <Link to="/signUp">Sign Up</Link>
                        </span>
                    </div>
                </div>

            </div>
            <div className='flexRow txtCntr pdngVMD alignCntr justifyCntr brdrTSM'>
                <span>© 2021 · inVC · PeopleLink Unified Communications Pvt. Ltd.
                    I agree to the
                    Terms & Conditions
                </span>
            </div>
        </div>
    )
}

export default Index;