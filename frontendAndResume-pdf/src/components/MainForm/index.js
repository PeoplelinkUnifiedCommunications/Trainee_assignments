import axios from "axios";
import React from "react";
import "./index.css";

function MainForm({
  formValues,
  setFormValues,
  handleChange,
  formErrors,
  handleSubmit,
  cancelRegistration,
  checkBox1,
  setCheckBox1,
  checkBox2,
  setCheckBox2
}) {

  const disableFun = () => {
    let value;
    if (
      !(
        formValues.fname &&
        formValues.lname &&
        formValues.email &&
        formValues.phone &&
        formValues.company &&
        formValues.designation &&
        formValues.gender &&
        formValues.dob &&
        formValues.password &&
        formValues.confirmPassword &&
        checkBox1 &&
        checkBox2
      )
    ) {
      return (value = true);
    } else {
      return (value = false);
    }
  };

  const fileInput = async(e) => {
    const input = e.target.files[0];
    const fileDtls = new FormData();
    fileDtls.append('profile', input);
    try {
      const im = await axios.post("http://localhost:8000/Images/",fileDtls);
    }
    catch(error) {
      console.log(error);
    }
  }



  return (
    <>
      <center>
        <h3>Reactive form example</h3>
        <div className="flexCol">
          <form onSubmit={handleSubmit}>
          <label htmlFor="fname">First Name</label>
          <input
              className="in2"
              placeholder="Enter first name..."
              type="text"
              id="fname"
              name="fname"
              value={formValues.fname}
              onChange={handleChange}
            /> 
            <div>
              <span className="err">{formErrors.fname}</span>
            </div>
            <br />
            <br />
            <label htmlFor="lname">Last Name</label>
            <input
              className="in3"
              placeholder="Enter last name..."
              type="text"
              id="lname"
              name="lname"
              value={formValues.lname}
              onChange={handleChange}
            />
            <div>
              <span className="err">{formErrors.lname}</span>
            </div>
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              className="in4"
              placeholder="Enter email..."
              type="text"
              id="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <div>
              <span className="err">{formErrors.email}</span>
            </div>
            <br />
            <br />
            <label htmlFor="phone">Phone</label>
            <input
              className="in5"
              placeholder="Enter phone number..."
              type="text"
              id="phone"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <div>
              <span className="err">{formErrors.phone}</span>
            </div>
            <br />
            <br />
            <label htmlFor="company">Company</label>
            <input
              className="in6"
              placeholder="Enter company..."
              type="text"
              id="company"
              name="company"
              value={formValues.company}
              onChange={handleChange}
            />
            <div>
              <span className="err">{formErrors.company}</span>
            </div>
            <br />
            <br />
            <label htmlFor="designation">Designation</label>
            <select
              className="dropdown"
              value={formValues.designation}
              onChange={handleChange}
              id="designation"
              name="designation"
            >
              <option defaultValue="selected">Select your option</option>
              <option value="UI/UX Developer">UI/UX Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Fullstack Developer">Fullstack Developer</option>
            </select>
            <div>
              <span className="err">{formErrors.designation}</span>
            </div>
            <div className="flexRow mainDiv">
              <label htmlFor="gender">Gender</label>
              <br />
              <div className="flexRow radioDiv">
                <input
                  className="in7"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={formValues.gender === "male"}
                  onChange={handleChange}
                />
                Male
                <br />
                <input
                  className="inf"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={formValues.gender === "female"}
                  onChange={handleChange}
                />
                Female
                <br />
              </div>
            </div>
            <div>
              <span className="err">{formErrors.gender}</span>
            </div>
            <label htmlFor="dob">DOB</label>
            <input
              className="in8"
              type="date"
              id="dob"
              name="dob"
              value={formValues.dob}
              onChange={handleChange}
            />
            <div>
              <span className="err">{formErrors.dob}</span>
            </div>
            <br />
            <label htmlFor="password">Password</label>
            <input
              className="in9"
              placeholder="Enter password..."
              type="password"
              id="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <br />
            <div>
              <span className="err">{formErrors.password}</span>
            </div>
            <br />
            <label htmlFor="confirm">Confirm Password</label>
            <input
              className="in0"
              placeholder="Enter confirm password..."
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            <div>
              <span className="err">{formErrors.confirmPassword}</span>
            </div>
            <br />
            <div className="status">
              <div className="check1">
                <input
                  type="checkbox"
                  id="box1"
                  name="box1"
                  value="Terms1"
                  onChange={() => setCheckBox1(!checkBox1)}
                  checked={checkBox1}
                />
                <label htmlFor="box1">I accept the Terms and Conditions</label>
              </div>
              <div className="check2">
                <input
                  type="checkbox"
                  id="box2"
                  name="box2"
                  value="Terms2"
                  onChange={() => setCheckBox2(!checkBox2)}
                  checked={checkBox2}
                />
                <label htmlFor="box2">I accept to the Privacy Policy</label>
              </div>
            </div>
            <div className="image">
              <label htmlFor="profile">Upload image</label>
              <input className="form-input" type="file" name="profile" onChange={fileInput}/>
            </div>
            <div className="btnDiv">
              <button className="btn1" disabled={disableFun()} style={{ backgroundColor : "#e9eb7c"}}>
                Register
              </button>
              <button className="btn1" onClick={cancelRegistration} style={{ backgroundColor : "#c9b4ed"}}>
                Cancel
              </button>
            </div> 
          </form>
        </div>         
      </center>
    </>
  );
}
export default MainForm;