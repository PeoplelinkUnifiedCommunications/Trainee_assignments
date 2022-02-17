/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

function Form({
  formData,
  onHandlerSubmit,
  handleFirstName,
  formError,
  onEventClicked,
}) {
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [nameList, setNameList] = useState([]);

  const onKeyDownHandler = (e) => {
    const { name } = e.target;
    setNameList([...new Set([...nameList, name])]);
    if (e.target.value) {
      setIsKeyDown(true);
    }
    // if ({[name]:value}){
    //     setIsKeyDown(true)
    // }
    // }
  };

  // const onBlurHandler = (e) => {
  //     const { name, value } = e.target;

  //     if (value === null){

  //         return formError.firstname = "Enter valid First Name"
  //     }
  // }

  useEffect(() => {
    if (isKeyDown === true) {
      nameList.map((eachItem) => {
        formError[eachItem] = '';
      });
    }
    //  if (formData.firstname === ""){
    //      console.log(true)
    //  }
  }, [nameList]);


  return (
    <form onSubmit={onHandlerSubmit}>
      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="firstNameInput"
            placeholder="Enter First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            // autoComplete='new-firstname'
            // onBlur={onBlurHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.firstname}</p>
          {/* {
                    formError && isSubmit ? (
                      <span> First name is required</span>
                    ) : null
                  } */}
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="firstNameInput"
            placeholder="Enter Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.lastname}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="firstNameInput"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            autoComplete='username'
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.email}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            className="firstNameInput"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.phone}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="firstNameInput"
            placeholder="Enter Company Name"
            name="company"
            value={formData.company}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.company}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="genderInformationContainer formContainer">
          <label>Gender</label>
          <div className="radioInformation">
            <div>
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={handleFirstName}
                checked={formData.gender === 'male'}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={handleFirstName}
                checked={formData.gender === 'female'}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="errorMessageContainer">
          <p>{formError.gender}</p>
        </div>
      </div>
      {/* gender element */}

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            id="dob"
            className="firstNameInput"
            name="dob"
            value={formData.dob}
            onChange={handleFirstName}
            // required pattern="\d{2}-\d{2}-\d{4}"
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.dob}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="firstNameInput"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            autoComplete='new-password'
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.password}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="firstNameInput"
            placeholder="Enter Confirm Password"
            name="confirm"
            value={formData.confirm}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            autoComplete='new-confirm'
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.confirm}</p>
        </div>
      </div>

      <div className="buttonContainer">
        <button type="submit">Register</button>
        <button type="button" onClick={onEventClicked}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;
