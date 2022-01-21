import React,{useState} from 'react';
import './Loginpage.css'
import axios from 'axios';
import { Link } from "react-router-dom";

function Loginpage() {
    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    console.log(user)

    const login = ()=>{
        axios.post("http://localhost:9003/login", user)
        .then(res => {
            alert(res.data.message)
        })
    }
  return (
    <div className='login'>
      <h1>Log in</h1>
      <input type='text' name="email" value={user.email} placeholder='Enter your Email'  onChange={handleChange}/>
      <input type='password' name="password" value={user.password} placeholder='Enter you Password' onChange={handleChange}/>
      <div className='button' onClick={login}>Login</div>
      <div>or</div>
      <Link to="/">
        <div className='button'>Home Page</div>
      </Link>
      </div>)
}

export default Loginpage;
