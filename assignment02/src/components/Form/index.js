import {useState} from 'react'
import * as moment from 'moment'
import {v4} from 'uuid'


import './index.css'


function checkEmailValid(email){
    var regex = /^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
    return regex.test(email)
    
}

function checkNameValid(name){   
   return /^[a-zA-Z ]{4,30}$/.test(name);
}

function checkDateValid(dob){
   const date=dob.split('/')
    const givenDate = moment(`${dob}`,"DD/MM/YYYY",true).isValid()
    const today=new Date()
    const updatedMonth = date[1]-1
    if (givenDate){
        if(today.getFullYear()<date[2]){
            return false
        }else if (today.getFullYear()===parseInt(date[2]) && today.getMonth()<updatedMonth){
           
            return false
        }else if (today.getFullYear()===parseInt(date[2]) && today.getMonth()===parseInt(updatedMonth) && today.getDate()<date[0]){
            return false
        }else{
           
            return true
        }

    }else{
        
        return false
    }
}



const Form = (props) => {
    

    const [userName,setName]=useState({name:"",nameNotValid:""})
    const [userEmail,setEmail]=useState({email:"",isEmailValid:""})
    const [userDob,setDob]=useState({dob:"",dobValid:""})
    
    
    const onSubmitForm = (event) =>{
        event.preventDefault();
        const newFormData = {
            id:v4(),
            name:userName.name,
            email:userEmail.email,
            dob:userDob.dob
        }

        

        
        if (userEmail.email===""){
            setEmail({email:userEmail.email,isEmailValid:"Required**"})
            
        }else{
            setEmail({email:userEmail.email,isEmailValid:""})
        }


        if (userName.name===""){
            setName({nameNotValid:"Required**",name:userName.name})  
        }else{
            setName({nameNotValid:"",name:userName.name}) 
        }


        if (userDob.dob===""){
            setDob({dob:userDob.dob,dobValid:"Required**"})
        }else{
            setDob({dob:userDob.dob,dobValid:""})
        }
        

        if ( userName.name!=="" && userEmail.email!=="" && userDob.dob!=="") {
            
            const isNameCorrect = checkNameValid(userName.name)
            const isEmailCorrect = checkEmailValid(userEmail.email)
            const isDobCorrect = checkDateValid(userDob.dob)
            
            
            
            const getData = localStorage.getItem("userData")
            const parsedGetData = JSON.parse(getData)
            
            if (!isNameCorrect){
                setName({nameNotValid:"Please Enter Valid Name",name:userName.name})
            }else{
                setName({nameNotValid:"",name:userName.name}) 
            }

            if (!isEmailCorrect){
                setEmail({email:userEmail.email,isEmailValid:"Please Enter valid Email Address"})
            }else{
                setEmail({email:userEmail.email,isEmailValid:""})
            }

            if (!isDobCorrect){
                setDob({dob:userDob.dob,dobValid:"Please Enter correct Date"})
            }else{
                setDob({dob:userDob.dob,dobValid:""})
            }



            

            if (parsedGetData === null && isNameCorrect===true  && isEmailCorrect===true && isDobCorrect=== true){
                        const newData = [newFormData]
                        localStorage.setItem("userData",JSON.stringify(newData))
                        const {history} = props 
                        history.replace('/')
            }else if (isNameCorrect===true  && isEmailCorrect===true && isDobCorrect=== true){
                const isEmailAlreadyExist = parsedGetData.find(eachData=>eachData.email===userEmail.email)
                if (isEmailAlreadyExist){
                    setEmail({email:userEmail.email,isEmailValid:"Email Already Existed"})
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
            setName({name:event.target.value,nameNotValid:""})
        }
        else{
            setName({name:"",nameNotValid:""})
        }  
    }

    const onChangeEmail = (event) =>{
        if (event.target.value!==""){
            setEmail({email:event.target.value,isEmailValid:userEmail.isEmailValid})
        }
        else{
            setEmail({email:"",isEmailValid:userEmail.isEmailValid})
        }
    }

 const onChangeDate = (e) =>{
        if (e.target.value!==""){
            setDob({dob:e.target.value,dobValid:userDob.dobValid})
        }
        else{
            setDob({dob:"",dobValid:userDob.dobValid})
        }
    }

    /* const onChangeDate = (e) =>{
        if(e.target.value!==""){
            if(userDob.dob.length !== 10) {
                var numChars = e.target.value.length;
                if(numChars === 2 || numChars === 5){
                    var thisVal = e.target.value;
                    thisVal += '/';
                    e.target.value = thisVal;
                    setDob({dob:thisVal,dobValid:userDob.dobValid})
                }else{
                    setDob({dob:e.target.value,dobValid:userDob.dobValid})
                }
            }    
        }
        else{
            setDob({dob:"",dobValid:userDob.dobValid})
        }
    }*/
    

    
    
    const onEnterNameField=(event)=>{
        if (event.target.value===""){
            setName({nameNotValid:"Required**",name:userName.name,})
        }else{
            setName({nameNotValid:"",name:userName.name})
        }
    }

   
    const onEnterEmailField=(event)=>{
        if (event.target.value===""){
            setEmail({email:userEmail.email,isEmailValid:"Required**"})
            
        }else{
            setEmail({email:userEmail.email,isEmailValid:""})
        }
    }

    
    const onEnterDobField=(event)=>{
        console.log(event.target.value)
        if (event.target.value===""){
            setDob({dob:userDob.dob,dobValid:"Required**"})
        }else{
            setDob({dob:userDob.dob,dobValid:""})
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
                            <input className='input-field' value={userName.name} onChange={onChangeName} onBlur={onEnterNameField} placeholder="Enter your name" id='name' type="text"/>
                            {userName.nameNotValid!=="" && <p className="error-message">{userName.nameNotValid}</p>}
                            
                            
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='email'>EMAIL <span className="star-symbol">*</span></label>
                            <input className='input-field' value={userEmail.email} onChange={onChangeEmail} onBlur={onEnterEmailField} placeholder="Enter your email" id='email' type="text"/>
                            {userEmail.isEmailValid!==""&& <p className="error-message">{userEmail.isEmailValid}</p>}

                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='dob'>DATE OF BIRTH <span className="star-symbol">*</span></label>
                            <input className='input-field' value={userDob.dob} onChange={onChangeDate} onBlur={onEnterDobField}  id='dob' type="text" placeholder="Enter DD/MM/YYYY format"/>
                            {userDob.dobValid!=="" && <p className="error-message"> {userDob.dobValid}</p>}
                        </div>
                        <button type="submit" className='button'>Submit</button>
                    </form>
                </div>
                </div>
            </div>
            
    )
            
}

export default Form