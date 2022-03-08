
import {v4} from "uuid";
import React ,{useState} from 'react';
import "./index.css"



const SignUpForm=()=> {
  
    let [name,setName]=useState("")
    let [email,setEmail]= useState("")
    let [pwd,setPwd]= useState("")
    let [ValidName,setNameDetails]=useState('')
    let [ValidEmail,setEmailDetails]=useState('')
    let [ValidPwd,setPwdDetails]=useState('')

    const submtDetails=(event)=>{
                  event.preventDefault()
                  const newList={
                    id:v4(),
                    name,
                    email,
                    pwd,
                  }
    
            if (name===""){
                setNameDetails("Required")
            }
            if (email===""){
                setEmailDetails("Required")
            }
            if (pwd===""){
                setPwdDetails("Required")
            }

            if(name!=="" && email!=="" && pwd!==""){
              const data=JSON.parse(localStorage.getItem(`${name}`))
              const validName=name.match(/^[A-Za-z ]+$/)
              const regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/
              const validPwd=pwd.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
              if (!regex.test(email)){
                setEmailDetails("Please Enter Valid E-mail")
              }else if (!validName){
                setNameDetails("Please Enter Valid Name")
              }else if (!validPwd){
                setPwdDetails("Password must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters")
              }else{
                if (data===null){
                  localStorage.setItem(`${name}`,JSON.stringify(newList))
                  setName("")
                  setEmail("")
                  setPwd("")
                }else if (name===data.name){
                  setNameDetails("Username Already exists...")
                }else{
                  localStorage.setItem(`${name}`,JSON.stringify(newList))
                  setName("")
                  setEmail("")
                  setPwd("")
                }
              }   
            }
        }
        return (
        
            <form className="form" onSubmit={submtDetails}>
                <div className="input-container">
                  <label htmlFor="name">Username</label>
                  <input type="text" id="name"  value={name} placeholder="Enter Username" onChange={e=>setName(e.target.value)}/>
                
                <p className="errorMsg">{ValidName}</p>
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input type="text" id="email"  value={email} placeholder="Enter E-Mail" onChange={e=>setEmail(e.target.value)} />
                
                <p className="errorMsg">{ValidEmail}</p>
                </div>
                <div className="input-container">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" className="inputText" value={pwd} placeholder="Enter Password" onChange={e=>setPwd(e.target.value)} />
                
                <p className="errorMsg">{ValidPwd}</p>
                </div>
                <div><button type="submit" className="btn">Submit</button></div>
            </form>
   )
       
}
export default SignUpForm;