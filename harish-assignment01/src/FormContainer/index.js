import ListContext from "../Context/ListContext";
import {v4} from "uuid";
import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import "./index.css"
import  moment from 'moment';

const FormContainer=(props)=> {
    const [validation1,setvalidation1]=useState({nameValidation:""})
    const [validation2,setvalidation2]=useState({emailValidation:""})
    const [validation3,setvalidation3]=useState({dateValidation:""})
    let [name,setname]=useState("")
    let [email,setemail]= useState("")
    let [date,setdate]= useState("")
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
            console.log("1")
            setdate("")
        } else {
            setvalidation3({dateValidation:""})
        }
    };

    
    const nameInput=(event)=> {

        setvalidation1({nameValidation:""})
        setname(event.target.value)
        if(event.target.value.match(/^[A-Za-z]+$/)){
            setvalidation1({nameValidation:""})
        }else if(event.target.value.match(/^[A-Za-z]+$/)===null && event.target.value!==""){
            setvalidation1({nameValidation:"**Name formate is wrong**"})
        }
        
    }
    const emailInput=(event)=>{
        setvalidation2({emailValidation:""})
        setemail(event.target.value)
        setvalidation2({emailValidation:""})
    }
    const dateInput=(event)=>{
        setvalidation3({dateValidation:""})
        
        let result = moment(event.target.value, 'MM/DD/YYYY').isValid();
        
        
        if(event.target.value===""){
            setvalidation3({dateValidation:"**Required**"})
            console.log("2")
            setdate("")
           
            
        }else{
            if(result===true ){
                const d=event.target.value
                if(new Date(event.target.value) > new Date()){
                    setvalidation3({dateValidation:"**Date is invalid**"})
                    
                }else{
                    setvalidation3({dateValidation:""})
                    setdate(d)
                }
                
                
            }
            else{
                setvalidation3({dateValidation:"**Date is invalid**"})
                
                
                
            }
        }
        }
        var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
        return <ListContext.Consumer>
            {value=>{
                const {list,addList}=value
                const submtDetails=(event)=>{
                    event.preventDefault()
                    let age;
                    console.log(date)
                    if(date!==""){
                        const userDate=new Date(date)
                        const nowDate=new Date()
                    
                        age=nowDate.getFullYear()-userDate.getFullYear()
                      
                    }
                    
                  
                    const newList={
                        id:v4(),
                        name:name,
                        email:email,
                        date:age,
                    }
                   
                    if(name==="" ){
                        setvalidation1({nameValidation:"**Required**"})
                        setvalidation2({emailValidation:""})
                    }
                    if(email==="" ){
                       setvalidation2({emailValidation:"**Required**"})
                    }
                    
                    if(date===""){
                        setvalidation3({dateValidation:"**Required**"})
                        console.log("3")
                        setdate("")
                       
                    }
                    if(name==="" || email==="" || date===""){
                        

                    }else{
                        
                    if(moment(event.target.value, 'MM/DD/YYYY').isValid()){
                        setvalidation3({dateValidation:"**Date formation is wrong**"})
                    }
                    if(newList.name.match(/^[A-Za-z]+$/)===null && newList.name!==""){
                        setvalidation1({nameValidation:"**Name formate is wrong**"})
                    }
                    if(moment(event.target.value, 'MM/DD/YYYY').isValid()===false){
                        setvalidation3({dateValidation:"**Date is invalid**"})

                    }
                    if(newList.email.match(regex)){
                       
                        const emailAvalibel=list.find(each=>each.email===newList.email)
                        if(emailAvalibel){
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