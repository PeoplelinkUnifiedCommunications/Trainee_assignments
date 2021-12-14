
import { useState } from 'react';
import {v4} from 'uuid';
import '../css/Login.css';
import  Validator  from 'validator';
import {Link} from 'react-router-dom'

const Login=(props)=>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [dateError, setDateError] = useState("")

    let nerror = "";
    let eerror = "";
    let derror = "";

    const nameInput = e => {
        setName(e.target.value)       
    }
    

    const emailInput = e => {
        setEmail(e.target.value)        
    }
    

    const dateInput = e => {
        setDate(e.target.value)
    } 

    const addItem = (event) =>{
        event.preventDefault();             
        const dob = new Date(date)
        const today = new Date()
        const by = dob.getFullYear()
        const py = today.getFullYear()
        let age = py-by
        const m = today.getMonth() - dob.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age = age -1;
        }
        const data = {
            id : v4(),
            name,
            email,
            age
        }
        let userDetailsList = JSON.parse(localStorage.getItem("userDetails"))
        if(name === ""){
            setNameError("required*")
            nerror = "required*"
        }else if(!(name.match(/^[A-Za-z" "]+$/))){
                setNameError("Enter Valid Name")
                nerror = "Enter Valid Name*"
        }else{
            setNameError("")
        }

        var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;

        if (email === ""){
            setEmailError("required*")
            eerror = "required*"
        }else if(!(email.match(regex))){
            setEmailError("Enter Valid Email")
            nerror = "Enter Valid Email*"
        }else if(userDetailsList !== null){
            const isEmailExist = userDetailsList.find(eachData => eachData.email === email)
            if(isEmailExist){
                setEmailError("Email already exist")
                nerror = "Email already exist"
            }else{
                setEmailError("")
            }
        }else{
            setEmailError("")
        }
        

        if(date ===""){
            setDateError("required*")
            derror = "required*"
        }else if(!(Validator.isDate(date))) {
            setDateError('Enter Valid Date!')
            derror = 'Enter Valid Date!'
        }else if(py < by){
            setDateError('Enter Valid Date!')
            derror = 'Enter Valid Date!'
        }else if(py === by){
            if(today.getMonth() < dob.getMonth()){
                setDateError('Enter Valid Date!')
                derror = 'Enter Valid Date!'
            }else if(today.getMonth() === dob.getMonth()){
                if(today.getDate() < dob.getDate()){
                    setDateError('Enter Valid Date!')
                    derror = 'Enter Valid Date!'
                }
            }
        }
        else{
            setDateError("")
        }


        if (nerror === "" && eerror === "" && derror === ""){
            if(userDetailsList === null){
                const Item = ([data]);
                localStorage.setItem('userDetails', JSON.stringify(Item))
                const {history}=props 
                history.replace("/")
                    
            } else {
                const Item = ([...userDetailsList, data]);
                localStorage.setItem('userDetails', JSON.stringify(Item))  
                const {history}=props 
                history.replace("/")              
            }
        }
    }
    
    return(        
        <div className="loginContainer">
            <div className="login">
                <form type="submit" onSubmit={addItem}>
                    <h1 className="heading">Login Page</h1>
                    <label htmlFor="name" className="name">Name : </label><br/>
                    <input type="text" id="name" className="nameInput" placeholder="Enter Name" value={name} onChange={nameInput}/>
                    <p className='error'>{nameError}</p>
                    <br/><br/>
                    <label htmlFor="email" className="email">Email : </label><br/>
                    <input type="text" id="email" className="emailInput" placeholder="Enter Email" value={email} onChange={emailInput}/>
                    <p className='error'>{emailError}</p>
                    <br/><br/>
                    <label htmlFor="dob" className="dob">Date of Birth : </label><br/>
                    <input type="text" id="dob" className="dobInput" value={date} onChange={dateInput} placeholder='YYYY-MM-DD'/>
                    <p className='error'>{dateError}</p>
                    <br/><br/>
                    <button className="button" type="submit">Add</button><br/>
                </form>
            </div>
        </div>
        
    )
}

export default Login;