
import React ,{useState} from 'react';

import "./index.css"
import LoginSuccess from "../LoginSuccess";


const LoginForm=()=> {
    let [loginTrue,setLogin]=useState(false)
    let [name,setName]=useState("")
    
    let [pwd,setPwd]= useState("")
    let [ValidName,setNameDetails]=useState('')
    
    let [ValidPwd,setPwdDetails]=useState('')
    
    const logoutData=()=>{
        setLogin(false)
    }
    const LoginDetails=(event)=>{
            event.preventDefault()
            const data=JSON.parse(localStorage.getItem(`${name}`))
            console.log(data)
            
            if (name===""){
                setNameDetails("Required")
            }
            if (pwd===""){
                setPwdDetails("Required")
            }

            if(name!=="" && pwd!==""){
              const validName=name.match(/^[A-Za-z ]+$/)
              const validPwd=pwd.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
              
            if (data===null){
                setNameDetails("UserName doesn't exists")
            }else if (!validName){
                setNameDetails("Please Enter Valid Name")
            }else if (!validPwd){
                setPwdDetails("Password must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters")
            }else if (name!==data.name){
                setNameDetails("Username Doesn't exists...")
            }else if(pwd!==data.pwd){
                setPwdDetails("Invalid Password")
            }else{
                setLogin(true)
                setPwdDetails("")
                setNameDetails("")
            }   
        }
    
        }
        return (
        <div>
            <form className="form" onSubmit={LoginDetails}>
                <div>
                  <label htmlFor="name">Username</label>
                  <input type="text" id="name" className="inputText" value={name} placeholder="Enter Username" onChange={e=>setName(e.target.value)}/>
                </div>
                <p className="errorMsg">{ValidName}</p>
                <div>
                  <label htmlFor="password">Username</label>
                  <input type="password" id="password" className="inputText" value={pwd} placeholder="Enter Password" onChange={e=>setPwd(e.target.value)} />
                </div>
                <p className="errorMsg">{ValidPwd}</p>
                <div>
                <button type="submit" className="btn">Login</button>
                </div>
            </form>
            {loginTrue && <LoginSuccess name={name} logoutData={logoutData}/>}
        </div>
    )
       
}
export default LoginForm;