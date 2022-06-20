import React, { useState } from "react";

function EditComponent({ editData, updatedEmployee, formErrors, fileInput }) {
  const _id = editData._id;
  const [fname, setFirstName] = useState(editData.fname);
  const [lname, setLastName] = useState(editData.lname);
  const [email, setEmail] = useState(editData.email);
  const [phone, setPhone] = useState(editData.phone);
  const [company, setCompany] = useState(editData.company);
  const [designation, setDesignation] = useState(editData.designation);
  const [gender, setGender] = useState(editData.gender);
  const [dob, setDOB] = useState(editData.dob);
  const [password, setPassword] = useState(editData.password);
  const [confirmPassword, setConfirmPassword] = useState(
    editData.confirmPassword
  );
  const [image, setImage] = useState(editData.profile);
  const updatedEditObject = {
    _id,
    fname,
    lname,
    email,
    phone,
    company,
    designation,
    gender,
    dob,
    password,
    confirmPassword,
    image
  };
  // console.log(updatedEditObject);

  const updatedSubmit = (e) => {
    e.preventDefault();
    updatedEmployee(_id, updatedEditObject);
  };

  const cancelRegistration = () => { };

  return (
    <>
      <center>
        <h3>Reactive form example</h3>
        <div className="flexCol">
          <form onSubmit={updatedSubmit}>
            <label htmlFor="fname">First Name</label>
            <input
              className="in2"
              placeholder="Enter first name..."
              type="text"
              id="fname"
              name="fname"
              value={fname}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={lname}
              onChange={(e) => setLastName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <div>
              <span className="err">{formErrors.company}</span>
            </div>
            <br />
            <br />
            <label htmlFor="designation">Designation</label>
            <select className="dropdown" placeholder="Enter designation..." id="designation" name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option defaultValue="selected">Select your option</option>
              <option value="UI/UX Developer">UI/UX Developer</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
            </select>
            <div>
              <span className="err">{formErrors.designation}</span>
            </div>
            <br />
            <div className="flexRow mainDiv">
              <label htmlFor="gen">Gender</label>
              <br />
              <div className="flexRow radioDiv">
                <input
                  className="in7"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
                <br />
                <input
                  className="inf"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </div>
            </div>
            <div>
              <span className="err">{formErrors.gender}</span>
            </div>
            <br />
            <label htmlFor="dob">DOB</label>
            <input
              className="in8"
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
            <br />
            <div>
              <span className="err">{formErrors.dob}</span>
            </div>
            <br />
            <label htmlFor="pass">Password</label>
            <input
              className="in9"
              placeholder="Enter password..."
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div>
              <span className="err">{formErrors.confirmPassword}</span>
            </div>
            <br />
            <div className="image">
              <label htmlFor="profile">Upload image</label>
              <input className="form-input" type="file" name="profile" onChange={fileInput} />
            </div>
            <div className="btnDiv">
              <button className="btn1">Update</button>
              <button className="btn1" onClick={cancelRegistration}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </center>
    </>
  );
}
export default EditComponent;