import {useState} from 'react'
import {login} from '../../Api'
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
        const response = await login(value)
        if(response.data.status === 200){
          navigate('/home',{ replace: true })
        }else{
          setData({
                   ...data,
                   showSubmitError:true,
                   errorMsg:response.data.message
               })
        }
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