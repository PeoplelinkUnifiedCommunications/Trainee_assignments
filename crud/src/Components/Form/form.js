import React, { useState } from "react";
import Table from "../Table/table";
import "./form.css";
function Form() {
    
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phno, setPhno] = useState("")
    const [gender, setGender] = useState("")
    const [desig, setDesig] = useState("")

    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const changeLastName = (e) => {
        setLastName(e.target.value)
    }

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePhno = (e) => {
        setPhno(e.target.value)
    }

    const changeGender = (e) => {
        setGender(e.target.value)
    }

    const changeDesig= (e) => {
        setDesig(e.target.value)
    }
    
    const [reqFirstName, setReqFirstName] = useState(false)
    const [reqLastName, setReqLastName] = useState(false)
    const [reqEmail, setReqEmail] = useState(false)
    const [reqPhno, setReqPhno] = useState(false)
    const [reqGender, setReqGender] = useState(false)
    const [reqDesig, setReqDesig] = useState(false)

    const [ list, setList] = useState([])


    const formSubmission = (e) => {
        e.preventDefault();

        const newList = [firstname, lastname, email, phno, gender, desig]
        let existingList = list;
        existingList.push(newList)
        setList(existingList)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPhno("")
        setGender("")
        setDesig("")
        console.log(existingList);
        
        if(firstname === "") {
            setReqFirstName(true)
        }
        else {
            setReqFirstName(false) 
        }

        if(lastname === "") {
            setReqLastName(true)
        }
        else {
            setReqLastName(false) 
        }

        if(email === "") {
            setReqEmail(true)
        }
        else {
            setReqEmail(false) 
        }

        if(phno === "") {
            setReqPhno(true)
        }
        else {
            setReqPhno(false) 
        }

        if(gender === "") {
            setReqGender(true)
        }
        else {
            setReqGender(false) 
        }

        if(desig === "") {
            setReqDesig(true)
        }
        else {
            setReqDesig(false) 
        }

}
    return (
        <div className="mainContainer">
            <div className="formOutline">
                <div className="formInline">
                    <form onSubmit={formSubmission} className="fieldCntnr">
                    <label className="fname" htmlFor="fname">First Name</label>
                    <input type="text" placeholder="Enter First name" value={firstname} onChange={changeFirstName}/>
                    {reqFirstName && <p className="errMsg">*Enter First Name</p>}

                    <label className="lname" htmlFor="lnmae">Last Name</label>
                    <input type="text" placeholder="Enter Last name" value={lastname} onChange={changeLastName}/>
                    {reqLastName && <p className="errMsg">*Enter Last Name</p>}

                    <label className="email" htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter E-mail" value={email} onChange={changeEmail}/>
                    {reqEmail && <p className="errMsg">*Enter E-mail Id</p>}

                    <label className="phno" htmlFor="phno">Phone No.</label>
                    <input type="number" placeholder="Enter phone number" value={phno} onChange={changePhno}/>
                    {reqPhno && <p className="errMsg">*Enter Phone Number</p>}

                    <div onChange={changeGender}>
                    <label className="gen" htmlFor="Gender">Gender</label>
                    <input type="radio" value="male" name="gender" />
                    <label className="mal" htmlFor="male">Male</label>

                    <input type="radio" value="female" name="gender" />
                    <label className="fem" htmlFor="female">Female</label><br />
                    {reqGender && <p className="errMsg">*Please select a value</p>}
                    </div>

                    <label className="desig" htmlFor="desig">Designation</label>
                    <select onChange={changeDesig} required>
                       <option value="director" name="desig">Director</option>
                       <option value="manager" name="desig">Manager</option>
                       <option value="trainee" name="desig">Trainee</option>
                       <option value="employee" name="desig">Employee</option>
                       <option value="assistant" name="desig">Assistant</option>
                       <option value="none" name="desig" selected>None</option>

                    </select>
                    {reqDesig && <p className="errMsg">*Please select a value </p>}

                    <button type="submit">Submit</button>


                    </form>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>E-mail</th>
                        <th>Phone Number</th>
                        <th>Gender</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((each) => {
                        return (
                            <Table content={each} />
                        )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}
export default Form;