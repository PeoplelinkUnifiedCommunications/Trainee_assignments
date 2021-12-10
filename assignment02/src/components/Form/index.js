import {useState} from 'react'
import { format } from 'date-fns'
import {v4} from 'uuid'

import './index.css'



const Form = (props) => {
    const maxDate = format(new Date(),"yyyy-MM-dd")
  
   
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [dob,setDob]=useState("")
    const [emailValidation,setEmailValidation] = useState({isAlreadyExist:false,isEmailValid:false})

    function checkEmailValid(data){
        var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
        return regex.test(data)
        
    }
   
    const onSubmitForm = (event) =>{
        event.preventDefault();
        const newFormData = {
            id:v4(),
            name:name,
            email:email,
            dob:dob
        }
        if ( name!=="" && email!=="" && dob!=="") {
            const isEmailCorrect = checkEmailValid(email)
            console.log(isEmailCorrect)
            
            const getData = localStorage.getItem("userData")
            const parsedGetData = JSON.parse(getData)
            if (parsedGetData === null){
                const newData = [newFormData]
                localStorage.setItem("userData",JSON.stringify(newData))
            }
            else{
                const isEmailValid = parsedGetData.find(eachData=>eachData.email===email)
                if (isEmailValid){
                    setEmailValidation({isAlreadyExist:true,isEmailValid:false})
                }else if(isEmailCorrect){
                        setEmailValidation({isAlreadyExist:false,isEmailValid:true})
                        }else{
                            const newData = [...parsedGetData,newFormData]
                            localStorage.setItem("userData",JSON.stringify(newData))
                            const {history} = props 
                            history.replace('/')
                        }
                
            }   
        }    
    }

    function onChangeName(event){
        if (event.target.value!==""){
            setName(event.target.value)
        }
        else{
            setName("")
        }
        
    }

    const onChangeEmail = (event) =>{
        if (event.target.value!==""){
            setEmail(event.target.value)
        }
        else{
            setEmail("")
        }
    }

    const onChangeDate = (event) =>{
        if (event.target.value!==""){
            setDob(event.target.value)
        }
        else{
            setDob("")
        }
    }
    
    const [nameBlurMsg,setNameBlurErrorMessage] = useState(false)

    const onEnterNameField=(event)=>{
        if (event.target.value===""){
            setNameBlurErrorMessage(true)
        }
    }

    const [emailBlurMsg,setEmailBlurErrorMessage] = useState(false)

    const onEnterEmailField=(event)=>{
        if (event.target.value===""){
            setEmailBlurErrorMessage(true)
        }
    }

    const [dobBlurMsg,setDobBlurErrorMessage] = useState(false)

    const onEnterDobField=(event)=>{
        if (event.target.value===""){
            setDobBlurErrorMessage(true)
        }else{
            setDobBlurErrorMessage(false)
        }
    }
    

    return(
            
            <div className="main-container">
                <div className = "sub-container">
                <div className="form-container">
                    <form className="form" onSubmit={onSubmitForm}>
                        <h1 className="form-heading">FORM DATA</h1>
                        <div className="input-container">
                            <label className="input-label" htmlFor='name'>NAME <span className="star-symbol">*</span></label>
                            <input className='input-field' value={name} onChange={onChangeName} onBlur={onEnterNameField} placeholder="Enter your name" id='name'/>
                            {nameBlurMsg?<p className="error-message"> Required**</p>:null}
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='email'>EMAIL <span className="star-symbol">*</span></label>
                            <input className='input-field' value={email} onChange={onChangeEmail} onBlur={onEnterEmailField} placeholder="Enter your email" id='email'/>
                            {emailBlurMsg?<p className="error-message"> Required**</p>:null}
                            {emailValidation.isAlreadyExist?<p className="error-message"> Email Already Existed</p>:null}
                            {emailValidation.isEmailValid?<p className="error-message"> Please Enter a valid Email Address</p>:null}
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='dob'>DATE OF BIRTH <span className="star-symbol">*</span></label>
                            <input className='input-field' value={dob} onChange={onChangeDate} onBlur={onEnterDobField} max={maxDate} id='dob' type="text" placeholder="Enter DD/MM/YYYY format"/>
                            {dobBlurMsg?<p className="error-message"> Required**</p>:null}
                        </div>
                        <button type="submit" className='button'>Submit</button>
                    </form>
                </div>
                </div>
            </div>
            
    )
            
}

export default Form