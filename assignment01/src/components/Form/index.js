import {Component} from 'react'
import { v4 } from 'uuid'
import { format } from 'date-fns'
import './index.css';

class Form extends Component{
    state = {
        name:'',
        email:'',
        dob:'',
        errorMsg:false,
        isEmailValid:true
    }

    onSubmitForm = event =>{
        const {addFormData} = this.props
        event.preventDefault()
        const {name,email,dob} = this.state
        if(name==="" || email===""|| dob===""){
            this.setState({errorMsg:true})
        }else{
            const formData = {
                id:v4(),
                name,email,dob
            }
            addFormData(formData)
            this.setState({name:"",email:"",dob:"",errorMsg:false})

        }
        
    }

    onChangeName = event =>{
        this.setState({name:event.target.value})
    }

    onChangeEmail = event =>{
        const {formData} = this.props
        if (formData.lenght>0){
            console.log(1)

        }
        const emailValidation = formData.forEach(eachItem=>eachItem.email=== event.target.value)
        console.log(emailValidation)
        this.setState({email:event.target.value})
    }

    onChangeDob = event =>{
        this.setState({dob:event.target.value})
    }
    render(){
        const {name,email,dob, errorMsg} = this.state
        const maxDate = format(new Date(),'yyyy-MM-dd')
        return(
            <div className="form-main-container">
                <form className="form-container" onSubmit={this.onSubmitForm}>
                        <h1 className="heading">Enter Your Details</h1>
                        <div className="input-container">
                            <label className="input-label" htmlFor='name'>NAME</label>
                            <input className='input-field' id='name' value={name} onChange={this.onChangeName} placeholder="Enter Your Name"/>
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='email'>EMAIL</label>
                            <input className='input-field' id='email' value={email} onChange={this.onChangeEmail} placeholder="Enter Your Email"/>
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='dob'>DATE OF BIRTH</label>
                            <input className='input-field' value={dob} id='dob' max={maxDate} type="date" onChange={this.onChangeDob} />
                        </div>
                        <button type="submit" className='button'>Submit</button>
                        {errorMsg?<p className="error-msg">**Please Enter all details</p>:null}
                </form>    
            </div>
        )
    }
}
export default Form
