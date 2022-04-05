import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Form({ submit, imagePathReset, userDetails, setUserDetails, userInput, formError, cancelFn, setCheck1, setCheck2, check1, check2 }) {
  const checking = () => {
    const { firstName, lastName, email, phone, gender, dob, company, role, password, confirmPassword, url } = userDetails
    let val
    if (!(firstName && lastName &&
      email && phone && gender && dob && company && role && password && confirmPassword && check1 && check2)) {
      return val = true
    } else {
      return val = false
    }
    return val
  }

  const imageFunction = async (e) => {
    setUserDetails({ ...userDetails, url: e.target.files[0] })
  }

  const mobileNumberValidation = (e) => {
    const mobile = e.target.value
    if (Number(mobile) || mobile === "") {
      setUserDetails({ ...userDetails, phone: mobile })
    }
  }

  return (
    <div>
      <form className="flexCol centerAlignment" onSubmit={submit} encType='multipart/form-data'>
        <div className="flexRow container">
          <label htmlFor="firstName" className="labels">
            First Name
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={userDetails.firstName}
              className="inputFields"
              placeholder="Enter Your First Name"
              onChange={userInput}
            ></input>
            <span>{formError.firstName}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="lastName" className="labels">
            Last Name
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={userDetails.lastName}
              className="inputFields"
              placeholder="Enter Your Last Name"
              onChange={userInput}
            ></input>
            <span>{formError.lastName}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="email" className="labels">
            Email
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="email"
              type="email"
              name="email"
              value={userDetails.email}
              className="inputFields"
              placeholder="Enter Your Email"
              onChange={userInput}
            ></input>
            <span>{formError.email}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="phone" className="labels">
            Phone
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="phone"
              type="tel"
              name="phone"
              minLength="10"
              maxLength="10"
              value={userDetails.phone}
              className="inputFields"
              placeholder="Enter Your Phone Number"
              onChange={mobileNumberValidation}
            ></input>
            <span>{formError.phone}</span>
          </div>
        </div>

        <div className="flexRow container">
          <p className="labels" style={{ width: '7rem' }}>
            Gender
          </p>
          <div>
            <div className="flexRow">
              <div className="flexRow" style={{ marginTop: "0.5rem" }}>
                <input
                  id="male"
                  type="radio"
                  name="gender"
                  value="male"
                  className="radioFields"
                  onChange={userInput}
                  checked={userDetails.gender === 'male'}
                />
                <label htmlFor="male" className="radioText">
                  Male
                </label>
                <br />

                <input
                  id="female"
                  type="radio"
                  name="gender"
                  value="female"
                  className="radioFields"
                  onChange={userInput}
                  checked={userDetails.gender === 'female'}
                />
                <label htmlFor="female" className="radioText">
                  Female
                </label>
              </div>
            </div>
            <span>{formError.gender}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="dob" className="labels">
            Date Of Birth
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="dob"
              type="date"
              name="dob"
              value={userDetails.dob}
              className="inputFields"
              onChange={userInput}
            ></input>
            <span>{formError.dob}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="company" className="labels">
            Company
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="company"
              type="text"
              name="company"
              value={userDetails.company}
              className="inputFields"
              placeholder="Enter Your Company Name"
              onChange={userInput}
            ></input>
            <span>{formError.company}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="role" className="labels">
            Role
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <select id="role" className="inputFields default" name="role" value={userDetails.role}
              onChange={userInput}>
              <option defaultValue="selected"> Select Your Option</option>
              <option value="Frontend">Frontend Developer</option>
              <option value="Backend">Backend Developer</option>
              <option value="Full Stack">Full Stack Developer</option>
            </select>
            <span>{formError.role}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="password" className="labels">
            Password
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="password"
              type="password"
              name="password"
              value={userDetails.password}
              className="inputFields"
              placeholder="Enter Password"
              onChange={userInput}
            ></input>
            <span>{formError.password}</span>
          </div>
        </div>

        <div className="flexRow container">
          <label htmlFor="confirmPassword" className="labels">
            Confirm Password
          </label>
          <div style={{ width: '100%' }} className="flexCol">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={userDetails.confirmPassword}
              className="inputFields"
              placeholder="Enter Confirm Password"
              onChange={userInput}
            ></input>
            <span>{formError.confirmPassword}</span>
            <span>{formError.passwordMatching}</span>
          </div>
        </div>

        <div>
          <div className="flexCol">
            <input
              id="url"
              type="file"
              name="url"
              style={{ marginTop: "0.5rem" }}
              onChange={imageFunction}
              accept='image/'
              ref={imagePathReset}
            ></input>
            <span>{formError.upload}</span>
          </div>
        </div>

        <div className="container" style={{ marginTop: "1rem" }}>
          <div className="flexRow">
            <input
              id="checkbox1"
              type="checkbox"
              name="checkbox1"
              value="checkbox1"
              className='checkbox'
              onChange={() => setCheck1(!check1)}
              checked={check1}
            ></input>
            <label htmlFor="checkbox1" className="labels checkboxText">
              I accept the Terms and Conditions
            </label>
          </div>
          <div className="flexRow">
            <input
              id="checkbox2"
              type="checkbox"
              name="checkbox2"
              value="checkbox2"
              className='checkbox'
              onChange={() => setCheck2(!check2)}
              checked={check2}
            ></input>
            <label htmlFor="checkbox2" className="labels checkboxText">
              I agree to the Privacy policy
            </label>
          </div>
        </div>

        <div>
          <button className="btn register" type="submit" disabled={checking()}>
            Register
          </button>

          <button className="btn" type="reset" onClick={cancelFn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;