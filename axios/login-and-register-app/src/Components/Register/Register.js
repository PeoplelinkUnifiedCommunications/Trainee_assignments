import React, {useState} from 'react';
import './Register.css'
import axios from "axios"
import { Link } from "react-router-dom";

function Register() {
    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    console.log(user)

    const register = () =>{
        const {name, email, password, reEnterPassword} = user
        if(name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:9003/register", user)
            .then(res=>console.log(res))
        }else{
            alert("invalid input")
        }
    }

    return (
        <div className='register'>
          <h1>Register</h1>
          <input type='text' name="name" value={user.name} placeholder='Enter your Name' onChange={handleChange}/>
          <input type='text' name="email" value={user.email} placeholder='Enter your Email' onChange={handleChange}/>
          <input type='password' name="password" value={user.password} placeholder='Enter you Password' onChange={handleChange}/>
          <input type='password' name="reEnterPassword" value={user.reEnterPassword} placeholder='Re-enter you Password' onChange={handleChange}/>
          <div className='button' onClick={register}>Register</div>
          <div>or</div>
          <Link to='/login'>
            <div className='button'>Login</div>
          </Link>
          </div>)
}

export default Register;
