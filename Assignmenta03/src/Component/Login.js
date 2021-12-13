
import { useState } from 'react';
import {v4} from 'uuid';
import '../css/Login.css';
import {Link} from"react-router-dom";

function Login(){
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [date, setDate] = useState("")

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
        const dob1 = new Date(date)
        const by = dob1.getFullYear()
        const pdob = new Date()
        const py = pdob.getFullYear()
        const age = py-by
        const data = {
            id : v4(),
            name,
            email,
            age
        }
        let userDetailsList = JSON.parse(localStorage.getItem("name"))
        if(name === "" && email === "" && date === ""){
            alert("all sections are mandatory")
        }else if(name === ""){
            alert("name is mandatory")
        }else if(email===""){
            alert("email is mandatory")
        }else if(date ===""){
            alert("date is mandatory")
        } else{
            if(userDetailsList === null){
                const Item = ([data]);
                localStorage.setItem('name', JSON.stringify(Item))
                
            } else {
                const Item = ([...userDetailsList, data]);
                localStorage.setItem('name', JSON.stringify(Item))}
                
        }       
    }
    
    return(        
        <div className="loginContainer">
            <div className="login">
                <form type="submit" onSubmit={addItem}>
                    <h1 className="heading">Login Page</h1>
                    <label htmlFor="name" className="name">Name : </label><br/>
                    <input type="text" id="name" className="nameInput" placeholder="Enter Name" value={name} onChange={nameInput}/>
                    <br/><br/>
                    <label htmlFor="email" className="email">Email : </label><br/>
                    <input type="email" id="email" className="emailInput" placeholder="Enter Email" value={email} onChange={emailInput}/>
                    <br/><br/>
                    <label htmlFor="dob" className="dob">Date of Birth : </label><br/>
                    <input type="date" id="dob" className="dobInput" value={date} onChange={dateInput}/>
                    <br/><br/>
                    <button class="button" type="submit">Add</button><br/>
                    <Link to='/'>list</Link>
                </form>
            </div>
        </div>
        
    )
}

export default Login;