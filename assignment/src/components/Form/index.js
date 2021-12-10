import { useState } from "react"
import {v4} from "uuid"
import {Link} from 'react-router-dom'
import { format } from 'date-fns'

import './index.css'
import CartContext from "../../context/cartContext"
import {validateEmail,validateCharecters} from '../../context/validateEmail'

const Form = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [errorMsg,setErrorMsg] = useState(false)
    const [nameErrorMsg,setNameErrorMsg] = useState(false) 
    const [emailErrorMsg,setEmailErrorMsg] = useState(false) 
    const [dateErrorMsg,setDateErrorMsg] = useState(false)
    const [userExist,setUserExist] = useState(false) 
    const [successMsg,setSuccessMsg] = useState(false) 
    const [invalidEmail,setInvalidEmail] = useState(false) 
    const [invalidName,setInvalidName] = useState(false) 

    const maxDate = format(new Date(),"yyyy-MM-dd")

    function onBlurName(){
        if (name === ""){
            setNameErrorMsg(true)
            setInvalidName(false)
        }
    }

    function onBlurEmail(){
        if (email === ""){
            setEmailErrorMsg(true)
            setInvalidEmail(false)
            setUserExist(false)
        }
    }

    function onBlurDate(){
        if (date === ""){
            setDateErrorMsg(true)
        }
    }

    function onChangeName(event){
        setSuccessMsg(false)
        setName(event.target.value)
        setNameErrorMsg(false)
        setInvalidName(false)
    }

    function onChangeEmail(event){
        setSuccessMsg(false)
        setEmail(event.target.value)
        setEmailErrorMsg(false)
        setInvalidEmail(false)
    }

    function onChangeDate(event){
        setSuccessMsg(false)
        setDate(event.target.value)
        setDateErrorMsg(false)
    }

    return(
        <CartContext.Consumer>
            {value =>{
            const {dataList,onSubmitForm} = value
            const onSubmit = event =>{
                event.preventDefault()
                if (name === '' || email === '' || date === '' ){
                    setErrorMsg(true)
                }
                else{
                    setErrorMsg(false)
                    const isEmailExists = dataList.find(eachData => eachData.email ===  email)
                    if(isEmailExists){
                        setUserExist(true)
                    }
                    else if(!validateCharecters(name)){
                        setInvalidName(true)
                    }
                    else if (!validateEmail(email)){
                        setNameErrorMsg(false)
                        setInvalidEmail(true)
                    }
                    else{
                    const newFormData = {
                        id:v4(),
                        name,email,date
                    }
                    setName('')
                    setEmail('')
                    setDate('')
                    setSuccessMsg(true)
                    setInvalidName(false)
                    setUserExist(false)
                    setInvalidEmail(false)
                    onSubmitForm(newFormData)
                    }
                }
            }
            return(
                <div className="main-container">
                    <div className = "sub-container">
                    <div className="form-container">
                        <form className="form" onSubmit={onSubmit}>
                            <h1 className="heading">DATA FORM</h1>
                            <div className="input-container">
                                <label className="input-label" htmlFor='name'>NAME <span className="star-symbol">*</span></label>
                                <input className='input-field' value={name} onBlur={onBlurName} onChange={onChangeName} placeholder="Enter your name" id='name'/>
                                {invalidName && <p className="error-msg">** Enter the valid name</p>}
                                {nameErrorMsg && <p className="error-msg">** Enter the name</p>}
                            </div>
                            <div className="input-container">
                                <label className="input-label" htmlFor='email'>EMAIL <span className="star-symbol">*</span></label>
                                <input className='input-field' value={email} onBlur={onBlurEmail} onChange={onChangeEmail} placeholder="Enter your email" id='email'/>
                                {emailErrorMsg && <p className="error-msg">** Enter the email</p>}
                                {invalidEmail && <p className="error-msg">** Enter the valid email</p>}
                                {userExist && <p className="error-msg">** Email already used</p>}
                            </div>
                            <div className="input-container">
                                <label className="input-label" htmlFor='dob'>DATE OF BIRTH <span className="star-symbol">*</span></label>
                                <input className='input-field' value={date} onBlur={onBlurDate} onChange={onChangeDate} max={maxDate} id='dob' type="date"/>
                                {dateErrorMsg && <p className="error-msg">** Enter the date of birth</p>}
                            </div>
                            <button type="submit" className='button'>Submit</button>
                            {errorMsg && <p className="error-msg">** Fill the required fields</p>}
                            {successMsg && (<p className="success">* User Added succesfully *</p>)}
                            <Link to = '/' className="links"><span>Click here to see user data</span></Link>
                        </form>
                    </div>
                    </div>
                </div>
        )
}}
        </CartContext.Consumer>)     
}

export default Form