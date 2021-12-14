import { useState } from 'react';
import {v4} from 'uuid';
import '../css/Login.css';
import  Validator  from 'validator';
import ListContext from '../Context/ListContext';

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

return <ListContext.Consumer>{
        value =>{
            const {list, addList} = value;
        
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
            eerror = "Enter Valid Email*"
        }else if(list !== null){
            const isEmailExist = list.find(eachdata => eachdata.email === email)
            if(isEmailExist){
                setEmailError("Email already exist")
                eerror = "Email already exist"
            }else{
                setEmailError("")
            }
        }else{
            setEmailError("")
        }
        

        if(date === ""){
            setDateError("required*")
            derror = "required*"
        }else if(!(Validator.isDate(date))) {
            setDateError('Enter Valid Date!')
            derror = 'Enter Valid Date!'
        }else if(dob > today){
            setDateError('Enter Valid Date!')
            derror = 'Enter Valid Date!'
        }

        else{
            setDateError("")
        }

        if (nerror === "" && eerror === "" && derror === ""){
            addList(data)
            const {history}=props
            history.replace('/')
        }
    }
    
    return(        
        <div className="loginContainer">
            <div className="login">
                <form type="submit" onSubmit={addItem}>
                    <h1 className="heading">Login Page</h1>
                    <label htmlFor="name" className="name">Name : </label><br/>
                    <input type="text" id="name" className="nameInput" placeholder="Enter Name" value={name} onChange={e =>setName(e.target.value)}/>
                    <p className='error'>{nameError}</p>
                    <br/><br/>
                    <label htmlFor="email" className="email">Email : </label><br/>
                    <input type="text" id="email" className="emailInput" placeholder="Enter Email" value={email} onChange={e =>setEmail(e.target.value)}/>
                    <p className='error'>{emailError}</p>
                    <br/><br/>
                    <label htmlFor="dob" className="dob">Date of Birth : </label><br/>
                    <input type="text" id="dob" className="dobInput" value={date} onChange={e =>setDate(e.target.value)} placeholder='YYYY-MM-DD'/>
                    <p className='error'>{dateError}</p>
                    <br/><br/>
                    <button className="button" type="submit">Add</button><br/>
                </form>
            </div>
        </div>
        
    )
    }
}</ListContext.Consumer>}

export default Login;