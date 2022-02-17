import React from "react"
import './index.css'

function MainForm ({formValues, handleChange, formErrors, handleSubmit, cancelRegistration}){
    return(
      <form onSubmit={handleSubmit}>
        <div className="formDiv">
          <label className="formLabel" htmlFor="fName">
            First Name
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="fName"
              type="text"
              name="fname"
              value={formValues.fname}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.fname}</span>
          </div>
        </div>

        <div className="formDiv">
          <label className="formLabel" htmlFor="lName">
            Last Name
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="lName"
              type="text"
              name="lname"
              value={formValues.lname}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.lname}</span>
          </div>
        </div>

        <div className="formDiv">
          <label className="formLabel" htmlFor="email">
            Email
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="email"
              type="text"
              name="email"
              value={formValues.email}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.email}</span>
          </div>
        </div>

        <div className="formDiv">
          <label className="formLabel" htmlFor="phone">
            Phone
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="phone"
              type="number"
              name="phone"
              value={formValues.phone}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.phone}</span>
          </div>
        </div>

        <div className="formDiv">
          <label className="formLabel" htmlFor="company">
            Company
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="company"
              type="text"
              name="company"
              value={formValues.company}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.company}</span>
          </div>
        </div>

        <div className="formRadioDiv">
          <label className="formLabel" htmlFor="gender">
            Gender
          </label>
          <div className="divSpanC">
            <div className="radioDiv">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={handleChange}
                checked={formValues.gender === "male"}
              />
              <label htmlFor="male" className="maleB">
                Male
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={handleChange}
                checked={formValues.gender === "female"}
              />
              <label htmlFor="female" className="maleB">
                Female
              </label>
            </div>
            <span className="genderErrorMessage">{formErrors.gender}</span>
          </div>
        </div>

        <div className="formDiv">
          <label className="formLabel" htmlFor="date">
            Date
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="date"
              type="date"
              name="date"
              value={formValues.date}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.date}</span>
          </div>
        </div>

        <div className="formDiv">
          <label className="formLabel" htmlFor="password">
            Password
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="password"
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.password}</span>
          </div>
        </div>
        <div className="formDiv">
          <label className="formLabel" htmlFor="cpassword">
            Confirm Password
          </label>
          <div className="divSpanC">
            <input
              className="formInput"
              id="cpassword"
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
            <span className="errorMessage">{formErrors.confirmPassword}</span>
          </div>
        </div>
        <div className="formButtonDiv">
          <button className="formRegister" type="submit">
            Register
          </button>
          <button
            className="formRegister"
            type="button"
            onClick={cancelRegistration}
          >
            Cancel
          </button>
        </div>
      </form>

    )
  }

  export default MainForm