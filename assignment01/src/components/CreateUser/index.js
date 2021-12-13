import DataContext from "../Context";
import {v4} from "uuid";
import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import "./index.css"

const CreateUser=(props)=> {
    let [name,setName]=useState("")
    let [email,setEmail]= useState("")
    let [dob,setDob]= useState("")
    let [ValidName,setNameDetails]=useState('')
    let [ValidEmail,setEmailDetails]=useState('')
    let [ValidDob,setDobDetails]=useState('')

    const BlurName=(event)=>{
      if (event.target.value===""){
        setNameDetails("Required")
      }
    }
    const BlurEmail=(event)=>{
      if (event.target.value===""){
        setEmailDetails("Required")
      }
    }
    const BlurDob=(event)=>{
      if (event.target.value===""){
        setDobDetails("Required")
      }
    }
    
    const nameInput=(event)=> {
        setName(event.target.value)
        if ((event.target.value).match(/^[A-Za-z ]+$/)){
          setNameDetails('')
        }else{
          setNameDetails('Invalid Name')
        }
     }

     const emailInput=(event)=>{
        setEmail(event.target.value)
        var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
        if (regex.test(event.target.value)){
            setEmailDetails("")
        }else{
          setEmailDetails("Invalid E-mail")
        }
        if (event.target.value===""){
          setEmailDetails("Required")
        }
    }

    const dateInput=(event)=>{
         const userDateBirth=new Date(event.target.value)
         const nowDate=new Date()
         if(event.target.value===""){
             setDobDetails("Required")
         }else{
            if(userDateBirth.toString() ==="Invalid Date"){
                setDobDetails("Invalid Date Format")
                setDob(event.target.value)
            }else if (userDateBirth>nowDate){
                setDobDetails("Please Enter Valid Date")
                setDob(event.target.value)
            }else {
                const diff=nowDate.getFullYear()-userDateBirth.getFullYear()
                setDob(diff)
            }
        }
    }
        

    return <DataContext.Consumer>
        {value=>{
          const {list,addList}=value
          const submtDetails=(event)=>{
                  event.preventDefault()
                  const newList={
                    id:v4(),
                    name:name,
                    email:email,
                    date:dob,
                  }
            if (name===""){
                setNameDetails("Required")
            }
            if (email===""){
                setEmailDetails("Required")
            }
            if (dob===""){
                setDobDetails("Required")
            }
            if(name!=="" && email!=="" && dob!==""){
              const emailAvalibel=list.find(each=>each.email===newList.email)
              const valid=name.match(/^[A-Za-z ]+$/)
              const regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/
              const greaterDate=new Date(dob)>new Date()
              const invalidDate=new Date(dob).toString() ==="Invalid Date"
              if(emailAvalibel){
                setEmailDetails("E-mail Already Exist") 
              }else if (!regex.test(email)){
                setEmailDetails("Please Enter Valid E-mail")
              }else if (!valid){
                setNameDetails("Please Enter Valid Name")
              }else if (greaterDate || invalidDate){
                setDobDetails("Please Enter Valid Date")
              }else{
                addList(newList)
                const {history}=props 
                history.replace('/')
              }   
            }
        }
        return (
        <div className="bg-container">
            <form className="form" onSubmit={submtDetails}>
                <label htmlFor="text">Name</label>
                <div className="margin">
                    <div className="input-container" id="text">
                        <div className="icon-container">
                            <FaUserAlt className="image" />
                        </div>
                        <input type="text" id="text" value={name} className="inputText" placeholder="Enter Name" onChange={nameInput} onBlur={BlurName}/> 
                    </div>
                    <p className="errorMsg">{ValidName}</p>
                    <br/>
                </div>
                <label htmlFor="email">Email</label>
                <div className="margin">
                    <div className="input-container" id="email">
                        <div className="icon-container">
                            <AiFillMail className="image" />
                        </div>
                        <input type="text" id="text" className="inputText" placeholder="Enter E-Mail" onChange={emailInput}  onBlur={BlurEmail} />
                    </div>
                    <p className="errorMsg">{ValidEmail}</p>
                    <br/>
                </div>
                <label htmlFor="date">Date Of Birth: MM/DD/YY</label>
                <div className="margin">
                    <div className="input-container" id="date">
                        <div className="icon-container">
                            <AiFillMail className="image" />
                        </div>
                        <input type="text" id="text" className="inputText" placeholder="Enter Date Of Birth" onChange={dateInput}  onBlur={BlurDob} />
                    </div>
                    <p className="errorMsg">{ValidDob}</p>
                    <br/>
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>
    </div>)
        }
    }
        </DataContext.Consumer>
        
        
}

export default CreateUser