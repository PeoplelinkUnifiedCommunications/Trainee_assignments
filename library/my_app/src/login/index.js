import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../common/components/footer";

const Login = () => {
  const navigate = useNavigate();
  const [inputvalues, setInputvalues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setInputvalues({ ...inputvalues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputvalues);
    const regex = /\S+@\S+\.\S+/;
    const pwdregex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let errorObj = {};
    if (inputvalues.email === "") {
      errorObj.email = "Enter email address";
    } else if (inputvalues.email !== "" && !regex.test(inputvalues.email)) {
      errorObj.email = "Enter valid Email address";
    }
    if (inputvalues.password === "") {
      errorObj.password = "Enter the password";
    } else if (
      inputvalues.password !== "" &&
      !pwdregex.test(inputvalues.password)
    ) {
      errorObj.password =
        "Password length should be max 8 value, one capital letter, one number, one special character ";
    }
    if(!errorObj.email && !errorObj.password){
      navigate("/dashboard")
    }
    console.log("errorrOnj===",errorObj)
    // console.log("ftshjgdytujh", inputvalues.email !== "" && inputvalues.password !==  "" && errors !== {})
    setErrors(errorObj);
  };

  const handleClickShowPassword = () => {
    setInputvalues({
      ...inputvalues,
      showPassword: !inputvalues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <div className="flexMinWidthCol alignCntr jcCntr fullHeight brdrBtm">
      <div className="flexCol HalfWidth brdrSM pdngMD brdrRadiusXSM whiteBG">
        <div className="flexRow alignCntr jcCntr pdngTLG">
          <span className="mainHdngTxt">Login</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flexCol pdngVMD pdngTLG">
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              size="small"
              dense="margin"
              type="text"
              fullWidth
              onChange={handleChange}
              value={inputvalues.email}
            />
            {errors.email && <span className="alertTXt">{errors.email}</span>}
          </div>
          <div className="flexCol alignCntr jcCntr pdngVSM">
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              size="small"
              fullWidth
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                name="password"
                type={inputvalues.showPassword ? "text" : "password"}
                value={inputvalues.password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {inputvalues.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              {errors.password && (
                <span className="alertTXt">{errors.password}</span>
              )}
            </FormControl>
          </div>
          <div className="flexRow jcFE pdngTSM">
            <span className="txtMD ">
              <Link to="">Forgot Password?</Link>
            </span>
          </div>
          <div className="flexRow pdngVMD">
            <Button
              color="primary"
              size="medium"
              variant="contained"
              type="submit"
              fullWidth
              disableElevation
            >
              Login
            </Button>
          </div>
        </form>
        <div className="flexRow pdngBSM jcCntr">
          <span className="txtCntr">
            Don't have an Account? <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
