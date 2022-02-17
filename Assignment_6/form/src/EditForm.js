import React, {useState} from 'react';

function EditForm({updatedObject, updatedEmployee, editFormCancelFunction}) {
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

    const updatedEditObject = {id,firstName, lastName, email, phone, company, gender, dob, password, confirmPassword}

    const updatedSubmit = (e) => {
        e.preventDefault()
        updatedEmployee(id, updatedEditObject)
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
                    {/* <span>{formError.firstName}</span> */}
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
                    {/* <span>{formError.lastName}</span> */}
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
                    {/* <span>{formError.email}</span> */}
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
                        className="inputFields"
                        placeholder="Enter Your Phone Number"
                        onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    {/* <span>{formError.phone}</span> */}
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
                    {/* <span>{formError.company}</span> */}
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
                                checked
                                name="gender"
                                value={gender}
                                className="radioFields"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="male" className="radioText">
                                Male
                            </label>
                            <br />

                            <input
                                id="female"
                                type="radio"
                                name="gender"
                                value={gender}
                                className="radioFields"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label htmlFor="female" className="radioText">
                                Female
                            </label>
                        </div>
                    </div>
                    {/* <span>{formError.gender}</span> */}
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
                    {/* <span>{formError.dob}</span> */}
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
                    {/* <span>{formError.password}</span> */}
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
                    {/* <span>{formError.confirmPassword}</span>
                    <span>{formError.passwordMatching}</span> */}
                </div>
            </div>
            <div>
            <button type="submit" style={{marginRight: "1rem"}}>Update</button>
            <button type="button" onClick={cancelTriggered}>Cancel</button>
            </div>
        </form>
  </div>;
}

export default EditForm;
