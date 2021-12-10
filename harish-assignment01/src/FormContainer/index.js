import {v4} from "uuid";
import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import "./index.css"

const FormContainer=(props)=> {
    let [blurMssg1, setblurMssg1] = useState(false);
    const blurNameInput = (event) => {
        if (event.target.value === "") {
            setblurMssg1(blurMssg1 = true);
        } else {
            setblurMssg1(blurMssg1 = false);
        }
    };
    let [blurMssg2, setblurMssg2] = useState(false);
    const blurEmailInput = (event) => {
        if (event.target.value === "") {
            setblurMssg2(blurMssg2 = true);
        }
        else {
            setblurMssg2(blurMssg2 = false);
        }
    };
    let [blurMssg3, setblurMssg3] = useState(false);
    const blurDateInput = (event) => {
        if (event.target.value === "") {
            setblurMssg3(blurMssg3 = true);
        } else {
            setblurMssg3(blurMssg3 = false);
        }
    };


    let [name,setname]=useState("")
    let [email,setemail]= useState("")
    let [date,setdate]= useState("")
    let [errorDate,seterrorDate]= useState(false)
    let [emailError,setemailError]=useState(false)
    let [validation,setvalidation]=useState(false)
    let [eamilChecking,seteamilChecking]=useState(false)
    


    const nameInput=(event)=> {
        setblurMssg1(blurMssg1=false)
        setname(name=event.target.value)
        
     }
     const emailInput=(event)=>{
        setblurMssg2(blurMssg2=false)
         const j=event.target.value
         if(j===""){
             console.log("email")
         }else{
            if(j.endsWith(".com") && j.includes("@")){
                setemailError(emailError=false)
                setemail(email=event.target.value)
            }else{
                setemailError(emailError=true)
               
            }
         }
         
         
     }
     const dateInput=(event)=>{
        setblurMssg3(blurMssg3=false)
         const userDateBirth=new Date(event.target.value)
         const nowDate=new Date()
         if(event.target.value===""){
             console.log("date")
         }else{
            if(userDateBirth.toString() ==="Invalid Date"){
                seterrorDate(errorDate=true)
            }else{
                seterrorDate(errorDate=false)
                const diff=nowDate.getFullYear()-userDateBirth.getFullYear()
                
                setdate(date=diff)
            }
         }
         

        }

        const submtDetails=(event)=>{
            event.preventDefault()
            

            const newList={
                id:v4(),
                name:name,
                email:email,
                date:date,

            }
            if(name==="" || email==="" || date===""){
                setvalidation(validation=true)
            }else{
                setvalidation(validation=false)
                const getData=localStorage.getItem("userData")
            const parsedGetData=JSON.parse(getData)
            if(parsedGetData===null){
                localStorage.setItem("userData",JSON.stringify([newList]))

            }else{
                const emailAvalibel=parsedGetData.find(each=>each.email===newList.email)
                if(emailAvalibel){
                    seteamilChecking(eamilChecking=true)
                }else{
                    seteamilChecking(eamilChecking=false)
                    const newData=[...parsedGetData,newList]
                    localStorage.setItem("userData",JSON.stringify(newData))
                    const {history}=props 
                    history.replace('/')
                }
                
            }
            
            
                
                
                

            }
            

            
        
            
    
            
        }
     

     

    return (<div className="bg-container">
        <div className="from-container">
            <form className="form" onSubmit={submtDetails}>
                <label htmlFor="text">Name</label>
                <div className="margin">
                    <div className="input-container" id="text">
                        <div className="icon-container">
                            <FaUserAlt className="image" />
                        </div>
                        <input type="text" id="text" className="inputText" onChange={nameInput} onBlur={blurNameInput} />
                    </div>
                    {blurMssg1 ? <p className="errorMsg">**required**</p> : <p></p>}
                </div>
                <label htmlFor="email">Email</label>
                <div className="margin">
                    <div className="input-container" id="email">
                        <div className="icon-container">
                            <AiFillMail className="image" />
                        </div>
                        <input type="text" id="text" className="inputText" onChange={emailInput} onBlur={blurEmailInput} />
                    </div>
                    {blurMssg2 ? <p className="errorMsg">**required**</p> : <p></p>}
                    {emailError? <p className="errorMsg">Email worng</p>:<p></p>}
                </div>
                <label htmlFor="date">Date Of Birth: MM/DD/YY</label>
                <div className="margin">
                    <div className="input-container" id="date">
                        <div className="icon-container">
                            <AiFillMail className="image" />
                        </div>
                        <input type="text" id="text" className="inputText" onChange={dateInput} onBlur={blurDateInput} />
                    </div>
                    {blurMssg3 ? <p className="errorMsg">**required**</p> : <p></p>}
                    {errorDate? <p className="errorMsg">Date formate is worng</p>:<p></p>}
                </div>
                {validation? <p className="errorMsg">Fileds Required</p>:<p></p>}
                {eamilChecking? <p className="errorMsg">Email alredy exits</p>:<p></p> }
                <button type="submit" className="btn">Submit</button>

            </form>
            <div className="image-container">
            <img src="https://www.magezon.com/pub/media/magezon-pagebuilder/core-builder/magento-2-login-registration-page.png" alt="logo" className="image-logo" />
            </div>
            

        </div>
    </div>)
}

export default FormContainer