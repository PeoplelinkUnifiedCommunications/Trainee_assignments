import React, {useState, useEffect} from "react";

function EditComponent({details, updatedEmployee, cancelRegistration, setImageSelected, isEdit, isSubmit, setisEdit}){
    const _id = details._id
    // console.log(details.fname)

    const [fname, setFirstName] = useState(details.fname)
    const [lname, setLastName] = useState(details.lname)
    const [email, setEmail] = useState(details.email)
    const [phone, setPhone] = useState(details.phone)
    const [company, setCompany] = useState(details.company)
    const [gender, setGender] = useState(details.gender)
    const [designation, setDesignation] = useState(details.designation)
    const [date, setDOB] = useState(details.date)
    const [password, setPassword] = useState(details.password)
    const [confirmPassword, setConPassword] = useState(details.confirmPassword)
    const [errr, setErr]=useState({})

    const updatedEditObject = {_id, fname, lname, email, phone, company, designation, gender, date, password, confirmPassword}

    // console.log(updatedEditObject)
    

    

    const updatedSubmit = (e) => {
        e.preventDefault();
        if((fname && lname && email && phone && company && designation && gender && date && password && confirmPassword)){
            updatedEmployee(_id, updatedEditObject)    
        }else{
            const err ={}
            if(fname===""){
                err.fname="Firstname is Required!"
            }
            if(lname===""){
                err.lname="Lastname is Required!"
            }
            if(email===""){
                err.email="Email is Required!"
            }
            if(phone===""){
                err.phone="Number is Required!"
            }
            if(company===""){
                err.company="Company is Required!"
            }
            if(designation===""){
                err.designation="Designation is Required!"
            }
            if(gender===""){
                err.gender="Gender is Required!"
            }            
            if(date===""){
                err.date="Date of Birth is Required!"
            }            
            if(password===""){
                err.password="Password is Required!"
            }
            if(confirmPassword===""){
                err.confirmPassword="Password is Required!"
            }
            setErr(err)
            return err
        }
        console.log(updatedEditObject)
      };

      const cancelEdit = () => {
        cancelRegistration()
      }

    // useEffect(() =>{


    // }, [formErrors])

    
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
                {<span className="errorMessage">{errr.fname}</span>}
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
                {<span className="errorMessage">{errr.lname}</span> }
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
                {<span className="errorMessage">{errr.email}</span> }
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
                {<span className="errorMessage">{errr.phone}</span>}
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
                { <span className="errorMessage">{errr.company}</span>}
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
                { <span className="errorMessage">{errr.gender}</span>}
            </div>
            </div>
            <div className="formDiv">
                <label className="formLabel" htmlFor="state">
                    Designation
                </label>
            <div className="divSpanC" style={{marginBottom: "10px"}}>
            <select className="selectInput" onChange={(e) => {setDesignation(e.target.value)}} value={designation} id="state" name="designation">
              <option  value="">Select your option</option>
              <option value='Frontend Developer' >Frontend Developer</option>
              <option  value="Backend Developer">Backend Developer</option>
              <option  value="Fullstack Developer">Fullstack Developer</option>
            </select>
            <span className="errorMessage">{errr.designation}</span>
          </div>
        </div>
            <div className="formDiv">
            <label className="formLabel" htmlFor="date">
                Date of Birth
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
                {<span className="errorMessage">{errr.date}</span>}
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
                {<span className="errorMessage">{errr.password}</span>}
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
                {<span className="errorMessage">{errr.confirmpassword}</span> }
            </div>
            </div>
            <div className="formButtonDiv">
            <button className="formRegister" type="submit">
                Update
            </button>
            <button
                className="formRegister"
                type="button"
                onClick={cancelEdit}>
                Cancel
            </button>
            </div>
        </form>
    </div>
    )
}

export default EditComponent