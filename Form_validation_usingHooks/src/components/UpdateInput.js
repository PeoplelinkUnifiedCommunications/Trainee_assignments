import React, { useState, useEffect } from 'react';

function UpdateInput({
  updatedFormValues,
  //   formError,
  // onHandlerEditInput,
  // onHandlerUpdate,
  // onEventEditClicked,
  onEditCancelClicked,
  updatedEmployee,
}) {
  const id = updatedFormValues.id;

  const [firstname, setFirstBeforeName] = useState(updatedFormValues.firstname);
  const [lastname, setLastBeforeName] = useState(updatedFormValues.lastname);
  const [email, setBeforeEmail] = useState(updatedFormValues.email);
  const [phone, setBeforePhone] = useState(updatedFormValues.phone);
  const [company, setBeforeCompany] = useState(updatedFormValues.company);
  const [gender, setBeforeGender] = useState(updatedFormValues.gender);
  const [dob, setBeforeDob] = useState(updatedFormValues.dob);
  const [password, setBeforePassword] = useState(updatedFormValues.password);
  const [confirm, setBeforeConfirm] = useState(updatedFormValues.confirm);

  const [formError, setFormError] = useState({});
  const [isUpdated, setIsUpdated] = useState(false);

  const updatedEmployeeDetails = {
    id,
    firstname,
    lastname,
    email,
    phone,
    company,
    gender,
    dob,
    password,
    confirm,
  };

  useEffect(() => {
    setFirstBeforeName(updatedFormValues.firstname);
    setLastBeforeName(updatedFormValues.lastname);
    setBeforeEmail(updatedFormValues.email);
    setBeforePhone(updatedFormValues.phone);
    setBeforeCompany(updatedFormValues.company);
    setBeforeGender(updatedFormValues.gender);
    setBeforeDob(updatedFormValues.dob);
    setBeforePassword(updatedFormValues.password);
    setBeforeConfirm(updatedFormValues.confirm);

    // updatedEmployee(id, updatedEmployeeDetails)

    if (Object.keys(formError).length === 0 && isUpdated) {
      return updatedEmployee(id, updatedEmployeeDetails);
    }
  }, [updatedFormValues, formError]);

  const onEventEditCancel = () => {
    onEditCancelClicked(true);
  };

  // const updatedEmployeeDetails = {id, firstname, lastname, email, phone, company, gender, dob, password, confirm}

  const onHandlerUpdateForm = (e) => {
    e.preventDefault();
    setFormError(validation(updatedEmployeeDetails));
    setIsUpdated(true);
    //     updatedEmployee(id, updatedEmployeeDetails)

    //  updatedEmployee(id, updatedEmployeeDetails)
  };

  const validation = (values) => {
    const error = {};

    if (values.firstname === '') {
      error.firstname = 'First Name is required';
      //   console.log(values.firstname === "")
    }

    if (!values.lastname) {
      error.lastname = 'Last Name is required';
    }

    if (!values.email) {
      error.email = 'Email is required';
    }

    if (!values.phone) {
      error.phone = 'Phone Number is required';
    } else if (values.phone.length > 10) {
      error.phone = 'Please Enter Valid Phone Number without +91';
    }

    if (!values.company) {
      error.company = 'Company Name is required';
    }

    if (!values.gender) {
      error.gender = 'Gender is required';
    }

    if (!values.dob) {
      error.dob = 'Date Of Birth is required';
    }

    if (!values.password) {
      error.password = 'Password is required';
    } else if (values.password.length < 6) {
      error.password = 'Password is too short';
    }
    if (!values.confirm) {
      error.confirm = 'Confirm Password is required';
    }
    if (values.password !== values.confirm) {
      error.confirm = 'Your password and confirmation password do not match';
    }

    return error;
  };

  return (
    <form onSubmit={onHandlerUpdateForm}>
      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            className="firstNameInput"
            placeholder="Enter First Name"
            name="firstname"
            // onChange={onHandlerEditInput}
            onChange={(e) => setFirstBeforeName(e.target.value)}
            // value={firstName}
            value={firstname}
            // value = {updatedFormValues.firstname}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.firstname}</p>
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
            onChange={(e) => setLastBeforeName(e.target.value)}
            // onChange={beforeLastName}
            // value={lastName}
            value={lastname}
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
            onChange={(e) => setBeforeEmail(e.target.value)}
            // onChange={onHandlerEditInput}
            value={email}
            autoComplete="username"
            // value={email}
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
            type="tel"
            id="phone"
            className="firstNameInput"
            placeholder="Enter Your Phone Number"
            name="phone"
            onChange={(e) => setBeforePhone(e.target.value)}
            // onChange={onHandlerEditInput}
            // value={updatedFormValues.phone}
            value={phone}
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
            // onChange={onHandlerEditInput}
            onChange={(e) => setBeforeCompany(e.target.value)}
            value={company}
            // value={company}
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
                onChange={(e) => setBeforeGender(e.target.value)}
                value="male"
                checked={gender === 'male'}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                id="female"
                type="radio"
                name="gender"
                onChange={(e) => setBeforeGender(e.target.value)}
                value="female"
                checked={gender === 'female'}
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
            // onChange={onHandlerEditInput}
            onChange={(e) => setBeforeDob(e.target.value)}
            // value={updatedFormValues.dob}
            value={dob}
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
            // onChange={onHandlerEditInput}
            onChange={(e) => setBeforePassword(e.target.value)}
            // value={updatedFormValues.password}
            value={password}
            autoComplete="new-password"
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
            onChange={(e) => setBeforeConfirm(e.target.value)}
            // value={updatedFormValues.confirm}
            value={confirm}
            autoComplete="new-confirm"
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.confirm}</p>
        </div>
      </div>

      <div className="buttonContainer">
        <button type="submit">Update</button>
        <button type="button" onClick={onEventEditCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default UpdateInput;
