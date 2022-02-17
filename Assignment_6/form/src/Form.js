import React from 'react';

function Form({ submit, userDetails, userInput, formError, cancelFn }) {
  return (
    <div>
      <form className="flexCol centerAlignment" onSubmit={submit}>
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
              type="number"
              name="phone"
              value={userDetails.phone}
              className="inputFields"
              placeholder="Enter Your Phone Number"
              onChange={userInput}
            ></input>
            <span>{formError.phone}</span>
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
          <p className="labels" style={{ width: '8rem' }}>
            Gender
          </p>
          <div>
            <div className="flexRow">
              <div>
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
          <button className="btn" type="submit">
            Register
          </button>
          <button className="btn" type="button" onClick={cancelFn}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
