import {useState} from 'react'
import axios from '../../Api';
import { useNavigate } from "react-router-dom";
import './index.css'


const Login = ()=>{
    const navigate = useNavigate()
    const [data,setData] = useState({
        userName:"",
        password:"",
        showSubmitError:false,
        errorMsg:""
    })

    const onChangeInputField=(e)=>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }

    const submitForm = async (e) =>{
        e.preventDefault()
        const value={
            userName:data.userName,
            password:data.password
        }
       await axios.post("/login/",value).then((response)=>{
            navigate('/home')
            setData({
                userName:"",
                password:"",
                showSubmitError:false,
                errorMsg:""
            })
       }).catch(()=>{
         setData({
             ...data,
             showSubmitError:true,
             errorMsg:"Invalid UserName or Password"
         })
       })
        
        
    }

    
    return(
        <div className="login-container">
        <form className="form-container" onSubmit={submitForm}>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              name="userName"
              value={data.userName}
              className="username-input-field"
              onChange={onChangeInputField}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              className="password-input-field"
              onChange={onChangeInputField}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {data.showSubmitError && <p className="error-message">*{data.errorMsg}</p>}
        </form>
      </div>
    )
}


export default Login;