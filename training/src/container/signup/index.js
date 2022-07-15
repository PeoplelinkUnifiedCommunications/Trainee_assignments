import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import "./style.css"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import PhoneInput from 'react-phone-number-input';
import PhoneInput, {
    isValidPhoneNumber,
    parsePhoneNumber,
} from "react-phone-number-input";
import { FormControl } from '@material-ui/core';
import 'react-phone-number-input/style.css'
import { FormHelperText } from '@material-ui/core';
import 'react-phone-number-input/style.css'
const SignUp = () => {
    const [tab, setTab] = useState("S")
    const [value, setValue] = useState()
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        libraryName: "",
        email: "",
        dateOfBirth: "",
        // gender: "",
        // country: "",
        // state: "",
        // city: "",
        // pinCode: "",
        password: ""

    });
    const {
        // firstName,
        // lastName,
        // phoneNumber,
        email,
        // country,
        // state,
        // city,
        // pinCode,
        password
    } = formInputs
    const [errorMessage, setErrorMessage] = useState({});
    const fname = /^[a-zA-Z ]{2,40}$/;
    const lsName = /^[A-Z][-a-zA-Z]+$/;
    const phNumber = /^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$/;
    const emailA = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    const pss = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/


    const handleClick = (value) => {
        console.log("value--------", value)
        setTab(value)
    }
    const handelChange = (e) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
    }
    const validateEmail = function (data) {
        var re =
            /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,4})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
        return re.test(data);
    };
    const validatePassword = function (data) {
        var pss = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

        return pss.test(data);
    }
    const validateFirstName = function (data) {
        var fName = /^([A - Z]{ 1})([a - z] +)(\s)([A - Z]{ 1})([a - z] +){ 1 }/;

        return fName.test(data);
    }
    const handleSubmitData = (e) => {
        e.preventDefault()
        console.log(formInputs)
        const {
            firstName,
            // lastName,
            phoneNumber,
            email,
            // country,
            // state,
            // city,
            // pinCode,
            password
        } = formInputs

        let formData = {};
        if (firstName === "") {
            formData["firstName"] = "Please Enter Your Name"
        }
        // }
        // else if (firstName !== "" && !validateFirstName(firstName)) {
        //     formData["firstName"] = "Please enter valid text"
        // }

        // if (lastName === "") {
        //     formData["lastName"] = "Please Enter Your LastName"
        // }
        // else if (lastName !== "" && !lsName("lastName")) {
        //     formData["lastName"] = "Please enter valid text"
        // }

        if (phoneNumber === "") {
            formData["phoneNumber"] = "Please Enter Your Phone Number"
        }
        else if (phoneNumber !== "" && !phNumber("phoneNumber")) {
            formData["phoneNumber"] = "phone Number Is Invalid"
        }

        if (email === "") {
            formData["email"] = "Please Enter Your Email ID "
        }
        else if (email !== "" && !validateEmail("email")) {
            formData["email"] = "Please Enter Valid Email"
        }

        if (password === "") {
            formData["password"] = "Enter Your Password"
        }
        else if (password !== "" && !validatePassword(password)) {
            formData["password"] = "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        }
        setErrorMessage(formData)
    }

    return (
        <div className='flexCol alignCntr justifyCntr  fullHeight'>
            <div className='flexInline width75 pdngMD '>
                <div className='flexCol alignCntr justifyCntr'>
                    <div className='flexRow alignCntr justifyCntr pdngVLG'>
                        <h1>
                            SignUp
                        </h1>
                    </div>
                    <div className="flexRow  titleHeading pdngHMD">
                        <div className={`brdrBlackSM flexGrow cursourPointer brdrRadiusL alignCntr justifyCntr ${tab === "S" ? "tabActive" : ""}`} onClick={() => handleClick("S")}>
                            <span className="lineHeight negMrgnT2" onClick={() => handleClick("S")}> Student </span>
                        </div>
                        <div className={`brdrBlackSM flexGrow alignCntr jcCntr cursourPointer alignCntr justifyCntr ${tab === "L" ? "tabActive" : ""}`} onClick={() => handleClick("L")} >
                            <span className="lineHeight negMrgnT2" onClick={() => handleClick("L")}> Library</span>
                        </div>

                    </div>
                    <div className='flexCol'>
                        <form className="flexCol " autoComplete="on" onSubmit={handleSubmitData} >
                            {tab === "S" &&
                                <>
                                    <div className='flexCol pdngMD'>
                                        <TextField label="Full Name" fullWidth name='firstName' value={formInputs.firstName} onChange={handelChange} />
                                        {errorMessage &&
                                            <FormHelperText className='errorMsg'>
                                                {errorMessage["firstName"]}
                                            </FormHelperText>
                                        }
                                    </div>

                                    {/* <div className='flexCol pdngMD'>
                                        <TextField label="Last Name" fullWidth name='lastName' value={lastName} onChange={handelChange} />
                                        {
                                            errorMessage &&
                                            <FormHelperText className='errorMsg'>
                                                {errorMessage["lastName"]}
                                            </FormHelperText>
                                        }
                                    </div> */}
                                    <div className='flexCol pdngMD relativePosition'>
                                        {/* <TextField label="Phone Number" fullWidth name='phoneNumber' value={phoneNumber} /> */}
                                        {/* <FormControl
                                            fullWidth
                                            margin="dense"
                                            aria-describedby="phone"
                                            className=""
                                            variant="outlined"
                                        > */}
                                        {/* <PhoneInput
                                                defaultCountry="IN"
                                                international
                                                id="phone"
                                                name="phone"
                                                className="brdrBSM pdngBSM'"
                                                placeholder="Phone number"
                                                label="Phone number"
                                                value={phoneNumber}
                                                // variant="outlined"
                                                // fullWidth
                                                onChange={handelChange}

                                            /> */}

                                        {/* <PhoneInput
                                                placeholder="Enter phone number"
                                                onChange={handelChange}
                                                fullWidth
                                                className='brdrBSM pdngBSM'
                                                label="Phone number"
                                                value={phoneNumber}
                                            /> */}

                                        {/* </FormControl > */}
                                        {/* {errorMessage &&
                                            <FormHelperText className='errorMsg'>
                                                {errorMessage["phoneNumber"]}
                                            </FormHelperText>
                                        } */}
                                        <PhoneInput
                                            placeholder="Enter phone number"
                                            value={formInputs.phoneNumber}
                                            onChange={setValue}
                                            // limitMaxLength={10}
                                            label="Phone number"
                                            className="brdrBMD pdngBSM"
                                            error={value ? (isValidPhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'} />

                                        {errorMessage &&
                                            <FormHelperText className='errorMsg'>
                                                {errorMessage["phoneNumber"]}
                                            </FormHelperText>
                                        }

                                    </div>

                                    <div className='flexCol pdngMD'>
                                        <TextField label="Email" fullWidth name='email' value={email} onChange={handelChange} />
                                        {
                                            errorMessage &&
                                            <FormHelperText className='errorMsg'>
                                                {errorMessage["email"]}
                                            </FormHelperText>
                                        }
                                    </div>
                                    <div className='flexCol pdngMD'>
                                        <TextField label="Password" fullWidth name='password' type="password" value={password} onChange={handelChange} />
                                        {
                                            errorMessage &&
                                            <FormHelperText className='errorMsg'>
                                                {errorMessage["password"]}
                                            </FormHelperText>
                                        }
                                    </div>
                                    {/* <div className='flexCol pdngMD'>
                                        <TextField label="Country" fullWidth name='country' value={country} onChange={handelChange} />
                                    </div> */}
                                    {/* <div className='flexCol pdngMD'>
                                        <TextField label="State" fullWidth name='state' value={state} onChange={handelChange} />
                                    </div> */}
                                    {/* <div className='flexCol pdngMD'>
                                        <TextField label="City" fullWidth name='city' value={city} onChange={handelChange} />
                                    </div> */}
                                    {/* <div className='flexCol pdngMD'>
                                        <TextField label="Pincode" fullWidth name='pinCode' value={pinCode} onChange={handelChange} />
                                    </div> */}
                                </>
                            }

                            {/* library && { */}
                            {tab === "L" &&
                                <>
                                    <div className='flexCol'>
                                        <div className='flexRow pdngMD'>
                                            <TextField id="standard-basic" label="First Name" fullWidth />
                                        </div>
                                        <div className='flexRow pdngMD'>
                                            <TextField id="standard-basic" label="Last Name" fullWidth />
                                        </div>
                                        <div className='flexRow pdngMD'>
                                            <TextField id="standard-basic" label="Phone Number" fullWidth />
                                        </div>
                                        {/* <div className='flexRow pdngMD'>
                                            <TextField id="standard-basic" label="Email" fullWidth />
                                        </div> */}
                                    </div>
                                </>
                            }
                            {/* } */}
                            <div className='flexRow pdngSM '>
                                <Button variant='contained' color='primary' type='submit' fullWidth className='pdngVMD'>SignUp</Button>
                            </div>
                            <div className='flexRow alignCntr justifyCntr pdngTMD'>
                                <span className='txtCntr'>Already have an account?<Link to="/"> Login </Link></span>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default SignUp