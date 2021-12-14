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

    const validateName =(name) => {
        let regex = /^([a-zA-Z ]+)$/;
        return regex.test(name)
    }

    const validateEmail = (email) =>{
        let regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
        return regex.test(email)
    }

    const validate=(parsedUsersData)=>{
        let re = true
        if(name === ""){
            setNameErrMsg(true)
            re = false
        } else if (!validateName(name)){
            setNameErrMsg(true)
            re = false
        }

        if(email === ""){
            setEmailErrMsg(true)
            re = false
        } else if (!validateEmail(email)){
            setEmailErrMsg(true)
            re = false
        }
        else if (parsedUsersData===null) {
            setEmailExistErrMsg(false)
        }
        else if (parsedUsersData!==null){
            const isEmailExist = parsedUsersData.find(eachUser => eachUser.email === email)  
            if (isEmailExist){
                setEmailExistErrMsg(true)
                re = false
            }
            else{
                setEmailExistErrMsg(false)
            }
        }
        /*if(dob === ""){
            setDateErrMsg(true)
            re = false
        } else {
            const formatedDob = format(new Date(dob), 'yyyy-MM-dd')
            let regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;
            (!regex.test(dob) && formatedDob <= todayDate) ? setDateErrMsg(false) : setDateErrMsg(true)
            re = false
        }*/
        dob === "" ? setDateErrMsg(true) : setDateErrMsg(false)
        return re

    }

    const formSubmit = (event) => {
        event.preventDefault()
        const usersDataFormLocalStorage = localStorage.getItem("userData")
        const parsedUsersData = JSON.parse(usersDataFormLocalStorage)
        console.log(parsedUsersData)
        console.log(validate(parsedUsersData))
        if(validate(parsedUsersData)){

            const newUserDetails = {id: v4(), name, email, dob}
    

            //updateArray(prevstate => [...prevstate, newUserDetails])

            if (parsedUsersData === null){
                const newData = [newUserDetails]
                localStorage.setItem("userData", JSON.stringify(newData))
            }
            else{
                const newData = [...parsedUsersData, newUserDetails]
                localStorage.setItem("userData", JSON.stringify(newData))
            }
            
            setName("")
            setEmail("")
            setDob("")
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