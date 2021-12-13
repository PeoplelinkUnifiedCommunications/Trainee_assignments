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

    const navigation = useNavigate()
    const [nameErrMsg, setNameErrMsg] = useState(false)
    const [emailErrMsg, setEmailErrMsg] = useState(false)
    const [dateErrMsg, setDateErrMsg] = useState(false)
    const [emaiExistErrMsg, setEmailExistErrMsg] = useState(false)

    const todayDate = format(new Date(), 'yyyy-MM-dd')

    const formSubmit = (event) => {
        event.preventDefault()

        if(name === ""){
            setNameErrMsg(true)
        } else {
            let regex = /^([a-zA-Z ]+)$/;
            regex.test(name) ? setNameErrMsg(false) : setNameErrMsg(true)
        }

        if(email === ""){
            setEmailErrMsg(true)
        } else {
            let regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
            if(regex.test(email)){
                setEmailErrMsg(false)
                const usersDataFromLocalStorage = JSON.parse(localStorage.getItem("userData"))
                const isEmailExist = usersDataFromLocalStorage.find(eachUser => eachUser.email === email)                
                isEmailExist ? setEmailExistErrMsg(true) : setEmailExistErrMsg(false)
            } else {
                setEmailErrMsg(true)
            }
        }

        if(dob === ""){
            setDateErrMsg(true)
        } else {
            const formatedDob = format(new Date(dob), 'yyyy-MM-dd')
            let regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
            (!regex.test(dob) && formatedDob <= todayDate) ? setDateErrMsg(false) : setDateErrMsg(true)
        }

        if(!nameErrMsg && !emailErrMsg && !emaiExistErrMsg && !dateErrMsg && dob !== ""){

            const newUserDetails = {id: v4(), name, email, dob}
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
            navigation("/")
        } else {
            console.log("siva")
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
    
    return(
        <div className="user-app-container">
            <div className="form-container">
            <h1 className="heading">Enter Your Details</h1>
                <form className="user-form-container" onSubmit={formSubmit}>
                    
                        <label className="label-text" htmlFor="name">Name: <span className="star">*</span></label>
                        <input className="user-input" type="text" value={name} id="name" onChange={onChangeName} placeholder="Enter Name Here"/>
                        {nameErrMsg && <p className="error-msg">Please Enter Valid Name</p>}
                        <br/>
  
                        <label className="label-text" htmlFor="email">Email: <span className="star">*</span></label>
                        <input className="user-input" type="text" value={email} id="email" onChange={onChangeEmail} placeholder="Enter Email Here" />                        
                        {emailErrMsg && <p className="error-msg">Please Enter Valid Email</p>}
                        {emaiExistErrMsg && <p className="error-msg">Email Already Exist</p>}
                        <br/>

                        <label className="label-text" htmlFor="date">Date Of Birth: <span className="star">*</span></label>                    
                        <input className="user-input" type="date" max={todayDate} value={dob} id="date" onChange={onChangeDob} />                        
                        {dateErrMsg && <p className="error-msg">Please Enter Valid Date</p>}
                        <br/>

                    <div className="button-container">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
    

}

export default EnterUserDetailsForm;