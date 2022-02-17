import React, { useState } from 'react';

function EditCom({ updatedObject, updatedEmployee, editCancel }) {

    const id = updatedObject.id
    const [firstName, setFirstName] = useState(updatedObject.firstName)
    const [lastName, setLastName] = useState(updatedObject.lastName)
    const [email, setEmail] = useState(updatedObject.email)
    const [phone, setPhone] = useState(updatedObject.phone)
    const [company, setCompany] = useState(updatedObject.company)
    const [gender, setGender] = useState(updatedObject.gender)
    const [dob, setDob] = useState(updatedObject.dob)
    const [password, setPassword] = useState(updatedObject.password)
    const [confirmPassword, setConfirmPassword] = useState(updatedObject.confirmPassword)

    const updatedEditObject = { id, firstName, lastName, email, phone, company, gender, dob, password, confirmPassword }

    const updatedSubmit = (e) => {
        e.preventDefault()
        updatedEmployee(id, updatedEditObject)
    }
    const cancelClick = () => {
        editCancel()
    }

    return (
        <form onSubmit={updatedSubmit}>
            <h2>Edit</h2><br />
            <label htmlFor="firstName">First name:</label>
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></input><br />

            <label htmlFor="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}></input><br />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input><br />

            <label htmlFor="phone">Phone:</label>
            <input type="number" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input><br />

            <label htmlFor="company">Company:</label>
            <input type="text" id="company" name="company" value={company} onChange={(e) => setCompany(e.target.value)}></input><br />

            <label> Gender</label><br />

            <input type="radio" id="male" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}></input>
            <label htmlFor="male">Male</label><br />

            <input type="radio" id="female" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}></input>
            <label htmlFor="female">Female</label><br />

            <label htmlFor="dob">Date of birth:</label>
            <input type="date" id="dob" name="dob" value={dob} onChange={(e) => setDob(e.target.value)}></input><br />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input><br />

            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input><br />

            <button type="submit">Update</button>

            <button type="button" onClick={cancelClick}>Cancel</button>


        </form>
    );
}

export default EditCom;