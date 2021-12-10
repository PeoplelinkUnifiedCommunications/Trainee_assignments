import { useState } from "react";

//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { v4 } from "uuid";

import { format } from "date-fns";

import "./index.css";

const EnterUserDetailsForm = (props) => {
    //const [usersArray, updateArray] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dob, setDob] = useState("")
    const [errorMsg, setError] = useState(false)
    const navigation = useNavigate()

    const formSubmit = (event) => {
        event.preventDefault()

        if(name !== "" && email !== "" && dob !== ""){
            //let age = AgeCalculator.getAgeIn(new Date(dob), "years")
            const DateOfBirth = format(new Date(dob), 'yyyy-MM-dd')
            const newUserDetails = {id: v4(), name, email, DateOfBirth}
            const usersDataFormLocalStorage = localStorage.getItem("userData")

            //updateArray(prevstate => [...prevstate, newUserDetails])

            if (usersDataFormLocalStorage === null){
                const newData = [newUserDetails]
                localStorage.setItem("userData", JSON.stringify(newData))
            }
            else{
                const parsedUsersData = JSON.parse(usersDataFormLocalStorage)
                const newData = [...parsedUsersData, newUserDetails]
                localStorage.setItem("userData", JSON.stringify(newData))
            }
            
            setName("")
            setEmail("")
            setDob("")
            setError(false)
            
            navigation("/")

        } else {
            setError(true)

        }
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeEmail = event => {
        setEmail(event.target.value)
    }

    const onChangeDob = event => {
        setDob(event.target.value)
    }

    const todayDate = format(new Date(), 'yyyy-MM-dd')
    
    return(
        <div className="user-app-container">
            <div className="form-container">
                <form className="user-form-container" onSubmit={formSubmit}>
                    <h1 className="heading">Enter Your Details</h1>
                    <div className="input-view">
                        <label className="label-text" htmlFor="name">Name: <span className="star">*</span></label>
                        <input className="user-input" type="text" value={name} id="name" onChange={onChangeName} placeholder="Enter Name Here"/>
                    </div>

                    <div className="input-view">
                        <label className="label-text" htmlFor="email">Email: <span className="star">*</span></label>
                        <input className="user-input" type="email" value={email} id="email" onChange={onChangeEmail} placeholder="Enter Email Here" />
                    </div>

                    <div className="input-view">
                        <label className="label-text" htmlFor="date">Date Of Birth: <span className="star">*</span></label>
                        <input className="user-input" type="date" max={todayDate} value={dob} id="date" onChange={onChangeDob} />
                    </div>

                    {errorMsg && <p className="error-msg">* Fields Are Mandatory</p> }
                    <div className="button-container">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
    

}

export default EnterUserDetailsForm;