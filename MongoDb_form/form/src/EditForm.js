import React, { useEffect, useState } from 'react';

function EditForm({ updatedObject, updatedEmployee, editFormCancelFunction, userDetails }) {
    const _id = updatedObject._id
    const [firstName, setFirstName] = useState(updatedObject.firstName)
    const [lastName, setLastName] = useState(updatedObject.lastName)
    const [email, setEmail] = useState(updatedObject.email)
    const [phone, setPhone] = useState(updatedObject.phone)
    const [company, setCompany] = useState(updatedObject.company)
    const [role, setRole] = useState(updatedObject.role)
    const [gender, setGender] = useState(updatedObject.gender)
    const [dob, setDob] = useState(updatedObject.dob)
    const [password, setPassword] = useState(updatedObject.password)
    const [confirmPassword, setConfirmPassword] = useState(updatedObject.confirmPassword)
    const [url, setUrl] = useState(updatedObject.url)
    const [err, setErr] = useState({})

    const updatedEditObject = { _id, firstName, lastName, email, phone, company, role, gender, dob, url, password, confirmPassword }

    const updatedSubmit = (e) => {
        e.preventDefault()
        if (firstName !== "" && lastName !== "" && email !== "" && phone !== "" && company !== "" && role !== "" && gender !== "" && dob !== "" && password !== "" && confirmPassword !== "") {
            updatedEmployee(_id, updatedEditObject)
            setErr({})
        } else {
            const error = {}
            if (firstName === "") {
                error.firstName = "*Firstname required"
            }
            if (lastName === "") {
                error.lastName = "*Lastname required"
            }
            if (email === "") {
                error.email = "*Email required"
            }
            if (phone === "") {
                error.phone = "*Phone required"
            }
            if (gender === "") {
                error.gender = "*Gender required"
            }
            if (dob === "") {
                error.dob = "*DOB required"
            }
            if (company === "") {
                error.company = "*Company name required"
            }
            if (role === "") {
                error.role = "*Role required"
            }
            if (password === "") {
                error.password = "*Password required"
            }
            if (confirmPassword === "") {
                error.confirmPassword = "*Confirm Password required"
            }
            if (confirmPassword !== password) {
                error.passwordMatching = "*Password doesn't match"
            }
            setErr(error)
            return error
        }
    }
    const cancelTriggered = () => {
        editFormCancelFunction()
    }

    return <div>
        <form className="flexCol centerAlignment" onSubmit={updatedSubmit}>

            <div className="flexRow container">
                <label htmlFor="firstName" className="labels">
                    First Name
                </label>
                <div style={{ width: '100%' }} className="flexCol">
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={firstName}
                        className="inputFields"
                        placeholder="Enter Your First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                    <span>{err.firstName}</span>
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
                        value={lastName}
                        className="inputFields"
                        placeholder="Enter Your Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                    ></input>
                    <span>{err.lastName}</span>
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
                        value={email}
                        className="inputFields"
                        placeholder="Enter Your Email"
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <span>{err.email}</span>
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
                        value={phone}
                        maxLength="10"
                        minLength="10"
                        className="inputFields"
                        placeholder="Enter Your Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <span>{err.phone}</span>
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
                                onChange={(e) => setGender(e.target.value)}
                                checked={gender === "male"}
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
                                onChange={(e) => setGender(e.target.value)}
                                checked={gender === "female"}
                            />
                            <label htmlFor="female" className="radioText">
                                Female
                            </label>
                        </div>
                    </div>
                    <span>{err.gender}</span>
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
                        value={dob}
                        className="inputFields"
                        onChange={(e) => setDob(e.target.value)}
                    ></input>
                    <span>{err.dob}</span>
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
                        value={company}
                        className="inputFields"
                        placeholder="Enter Your Company Name"
                        onChange={(e) => setCompany(e.target.value)}
                    ></input>
                    <span>{err.company}</span>
                </div>
            </div>

            <div className="flexRow container">
                <label htmlFor="role" className="labels">
                    Role
                </label>
                <div style={{ width: '100%' }} className="flexCol">
                    <select id="role" className="inputFields default" name="role" value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value=""> Select Your Option</option>
                        <option value="Frontend">Frontend Developer</option>
                        <option value="Backend">Backend Developer</option>
                        <option value="Full Stack">Full Stack Developer</option>
                    </select>
                    <span>{err.role}</span>
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
                        value={password}
                        className="inputFields"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                    <span>{err.password}</span>
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
                        value={confirmPassword}
                        className="inputFields"
                        placeholder="Enter Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                    <span>{err.confirmPassword}</span>
                    <span>{err.passwordMatching}</span>
                </div>
            </div>

            <div>
                <div className="flexCol">
                    <input
                        id="upload"
                        type="file"
                        name="url"
                        files={url}
                        className=""
                        style={{ marginTop: "0.5rem" }}
                        onChange={(e) => setUrl(e.target.files)}
                    ></input>
                    {/* <span>{formError.upload}</span> */}
                </div>
            </div>

            <div style={{ marginTop: "1rem" }}>
                <button type="submit" className='btn' style={{ marginRight: "1rem" }}>Update</button>
                <button type="reset" className='btn' onClick={cancelTriggered}>Cancel</button>
            </div>
        </form>
    </div>;
}

export default EditForm;
