import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";

const Signup = () => {
  const [values, setValue] = useState();
  const [inputvalues, setInputvalues] = useState({
    fullName: "",
    rollNo: "",
    className: "",
    email: "",
    password: "",
    country: "",
    state: "",
  });
  const [errorData, seterrorData] = useState({});
  const handleChange = (e) => {
    setInputvalues({ ...inputvalues, [e.target.name]: e.target.value });
    // console.log(...inputvalues);
  };
  // const handlePhoneChange = (e) => {
  //   setInputvalues({ ...values, [e.target.phone]: e.target.value });
  //   console.log("...inputvalues",e);
  // };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let errorObj = {};
    const regname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const rexemail = /\S+@\S+\.\S+/;
    const regpwd =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (inputvalues.fullName === "") {
      errorObj.fullName = "Please enter fullname";
    } else if (
      inputvalues.fullName !== "" &&
      !regname.test(inputvalues.fullName)
    ) {
      errorObj.fullName = "Fullname should contain letters";
    }

    if (inputvalues.rollNo === "") {
      errorObj.rollNo = "Please enter Roll no";
    } else if (inputvalues.rollNo !== "" && inputvalues.rollNo.length <= 5) {
      errorObj.rollNo = "Please enter valid Roll no";
    }

    if (inputvalues.className === "") {
      errorObj.className = "Please enter ClassName";
    }

    if (inputvalues.email === "") {
      errorObj.email = "Please enter Email";
    } else if (inputvalues.email !== "" && !rexemail.test(inputvalues.email)) {
      errorObj.email = "Please enter valid Email";
    }

    if (inputvalues.password === "") {
      errorObj.password = "Please enter password";
    } else if (
      inputvalues.password !== "" &&
      !regpwd.test(inputvalues.password)
    ) {
      errorObj.password =
        "Password length should be max 8 value, one capital letter, one number, one special character ";
    }
    if (values === "") {
      errorObj.phone = "Please enter phoneno";
    } 
    // else if (value !== "" && value.length === 10) {
    //   errorObj.phone = "Please enter valid phoneno";
    // }
    seterrorData(errorObj);
    setValue(errorObj);
  };

  return (
    <>
     <div className="flexMinWidthCol alignCntr jcCntr fullHeight brdrBtm">
      <div className="flexCol HalfWidth brdrSM pdngMD brdrRadiusXSM whiteBG">
        <div className="flexRow alignCntr jcCntr pdngTLG">
          <span className="mainHdngTxt">Sign Up</span>
        </div>
        <div className="flexCol jcCntr pdngVSM pdngTLG">
          <TextField
            name="fullName"
            label="FullName"
            variant="outlined"
            size="small"
            dense="margin"
            type="text"
            value={inputvalues.fullName}
            onChange={handleChange}
            fullWidth
          />
          {errorData.fullName && (
            <span className="alertTXt">{errorData.fullName}</span>
          )}
        </div>
        <div className="flexCol jcCntr pdngVSM">
          <TextField
            name="rollNo"
            label="Roll No"
            variant="outlined"
            size="small"
            type="text"
            value={inputvalues.rollNo}
            onChange={handleChange}
            fullWidth
          />
          {errorData.rollNo && (
            <span className="alertTXt">{errorData.rollNo}</span>
          )}
        </div>
        <div className="flexCol jcCntr pdngVSM">
          <TextField
            name="className"
            label="Class Name"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={inputvalues.className}
            type="text"
            fullWidth
          />
          {errorData.className && (
            <span className="alertTXt">{errorData.className}</span>
          )}
        </div>

        <div className="flexCol jcCntr pdngVSM">
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            size="small"
            type="email"
            onChange={handleChange}
            value={inputvalues.email}
            fullWidth
          />
          {errorData.email && (
            <span className="alertTXt">{errorData.email}</span>
          )}
        </div>
        <div className="flexCol jcCntr pdngVSM">
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            size="small"
            dense="margin"
            onChange={handleChange}
            value={inputvalues.password}
            fullWidth
          />
          {errorData.password && (
            <span className="alertTXt">{errorData.password}</span>
          )}
        </div>
        <div className="flexCol jcCntr pdngVSM">
          <PhoneInput
            name="phone"
            placeholder="Enter phone number"
            value={values}
            limitMaxLength="10"
            onChange={setValue}
          />
          {/* {errorData.phone && (
            <span className="alertTXt">{errorData.phone}</span>
          )} */}
        </div>
        <div className="flexRow pdngVMD">
          <Button
            color="primary"
            size="medium"
            variant="contained"
            fullWidth
            disableElevation
            onClick={handleFormSubmit}
          >
            Sign Up
          </Button>
        </div>
        <div className="flexRow pdngBSM jcCntr">
          <span className="txtCntr">
            Already have an Account? <Link to="/">Login</Link>
          </span>
        </div>
      </div>
      </div>
    </>
  );
};

export default Signup;
