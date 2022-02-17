import React, {useState, UseE} from "react";

function EditComponent({details, updatedEmployee, formErrors}){
    const id = details.id
    // console.log(details.fname)

    const [fname, setFirstName] = useState(details.fname)
    const [lname, setLastName] = useState(details.lname)
    const [email, setEmail] = useState(details.email)
    const [phone, setPhone] = useState(details.phone)
    const [company, setCompany] = useState(details.company)
    const [gender, setGender] = useState(details.gender)
    const [date, setDOB] = useState(details.date)
    const [password, setPassword] = useState(details.password)
    const [confirmPassword, setConPassword] = useState(details.confirmPassword)

    const updatedEditObject = {id, fname, lname, email, phone, company, gender, date, password, confirmPassword}

    // console.log(updatedEditObject)

    const updatedSubmit = (e) => {
        e.preventDefault();
        updatedEmployee(id, updatedEditObject) 
      };

    const cancelRegistration = () => {

      };
    
    return(
        <div>
            <form onSubmit={updatedSubmit}>
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
                value={fname}
                onChange={(e) => setFirstName(e.target.value)}
                />
                {<span className="errorMessage">{formErrors.fname}</span>}
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
                value={lname}
                onChange={(e) => setLastName(e.target.value)}
                />
                {<span className="errorMessage">{formErrors.lname}</span> }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                {<span className="errorMessage">{formErrors.email}</span> }
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
                {<span className="errorMessage">{formErrors.phone}</span>}
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
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                />
                { <span className="errorMessage">{formErrors.company}</span>}
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
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="male" className="maleB">
                    Male
                </label>
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="female" className="maleB">
                    Female
                </label>
                </div>
                { <span className="errorMessage">{formErrors.gender}</span>}
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
                value={date}
                onChange={(e) => setDOB(e.target.value)}
                />
                {<span className="errorMessage">{formErrors.date}</span>}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {<span className="errorMessage">{formErrors.password}</span>}
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
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConPassword(e.target.value)}
                />
                {<span className="errorMessage">{formErrors.confirmpassword}</span> }
            </div>
            </div>
            <div className="formButtonDiv">
            <button className="formRegister" type="submit">
                Update
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
    </div>
    )
}

export default EditComponent