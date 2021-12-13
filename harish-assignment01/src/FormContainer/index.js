import ListContext from "../Context/ListContext";
import {v4} from "uuid";
import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import "./index.css"

const FormContainer=(props)=> {
    const [validation1,setvalidation1]=useState({nameValidation:""})
    const [validation2,setvalidation2]=useState({emailValidation:""})
    const [validation3,setvalidation3]=useState({dateValidation:""})
    const blurNameInput = (event) => {
        if (event.target.value === "") {
           setvalidation1({nameValidation:"**Required**"})
        } else {
            setvalidation1({nameValidation:""})
        }
    };
    const blurEmailInput = (event) => {
        if (event.target.value === "") {
           setvalidation2({emailValidation:"**Required**"})
        }
        else {
          setvalidation2({emailValidation:""})
        }
    };
    const blurDateInput = (event) => {
        if (event.target.value === "") {
            setvalidation3({dateValidation:"**Required**"})
        } else {
            setvalidation3({dateValidation:""})
        }
    };

    let [name,setname]=useState("")
    let [email,setemail]= useState("")
    let [date,setdate]= useState("")
    const nameInput=(event)=> {
        setvalidation1({nameValidation:""})
        setname(event.target.value)
    }
    const emailInput=(event)=>{
        setvalidation2({emailValidation:""})
        setemail(event.target.value)
        setvalidation2({emailValidation:""})
    }
    const dateInput=(event)=>{
        setvalidation3({dateValidation:""})
        const userDateBirth=new Date(event.target.value)
        const nowDate=new Date()
        
        if(event.target.value===""){
            console.log("date")
        }else{
            if(userDateBirth.toString() ==="Invalid Date"){
                setvalidation3({dateValidation:"**Date is invalid**"})
                setdate(" ")
            }else if(nowDate.getDate()===userDateBirth.getDate() && nowDate.getMonth()+1===userDateBirth.getMonth()+1 && nowDate.getFullYear()===userDateBirth.getFullYear()){
                setvalidation3({dateValidation:"**Date is invalid**"})
                setdate(" ")
            }
            else{
                setvalidation3({dateValidation:""})
                const diff=nowDate.getFullYear()-userDateBirth.getFullYear()
                setdate(diff)
            }
        }
        }
        var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
        return <ListContext.Consumer>
            {value=>{
                const {list,addList}=value
                const submtDetails=(event)=>{
                    event.preventDefault()
                    const newList={
                        id:v4(),
                        name:name,
                        email:email,
                        date:date,
                    }
                    if(newList.name==="" ){
                        setvalidation1({nameValidation:"**Required**"})
                        setvalidation2({emailValidation:""})
                    }
                    if(newList.email==="" ){
                       setvalidation2({emailValidation:"**Required**"})
                    }
                    if(newList.date===""){
                        setvalidation3({dateValidation:"**Required**"})
                    }
                    else if(newList.date===" "){
                        setvalidation3({dateValidation:"**Date is invalid**"})
                    }
                    else if(newList.name.match(/^[A-Za-z]+$/)===null && newList.name!==""){
                        setvalidation1({nameValidation:"**Name formate is wrong**"})
                    }
                    else if(newList.email.match(regex)){
                        setvalidation2({emailValidation:""})
                        const emailAvalibel=list.find(each=>each.email===newList.email)
                        if(emailAvalibel || !newList.date===""){
                            setvalidation2({emailValidation:"**Email alredy exits**"})
                        }else{
                            setvalidation2({emailValidation:""})
                            addList(newList)
                            const {history}=props
                            history.replace('/')
                        }
                    }else if(newList.email!=="" || newList.email.match(regex)){
                        setvalidation2({emailValidation:"**Email wrong**"})
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
                                    <p className="errorMsg">{validation1["nameValidation"]}</p>
                                  <br/>
                                </div>
                                <label htmlFor="email">Email</label>
                                <div className="margin">
                                    <div className="input-container" id="email">
                                       <div className="icon-container">
                                            <AiFillMail className="image" />
                                        </div>
                                        <input type="text" id="text" className="inputText" onChange={emailInput} onBlur={blurEmailInput} />
                                    </div>
                                     <p className="errorMsg">{validation2.emailValidation}</p>
                                   <br/>
                                </div>
                                <label htmlFor="date">Date Of Birth: MM/DD/YY</label>
                                <div className="margin">
                                   <div className="input-container" id="date">
                                        <div className="icon-container">
                                           <AiFillMail className="image" />
                                        </div>
                                        <input type="text" id="text" className="inputText" onChange={dateInput} onBlur={blurDateInput} />
                                    </div>
                                    <p className="errorMsg">{validation3.dateValidation}</p>
                                    <br/>
                                </div>
                                <button type="submit" className="btn">Submit</button>
                            </form>
                        </div>
                    </div>)
            }
            }
        </ListContext.Consumer>
}
export default FormContainer