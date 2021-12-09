import {Link} from "react-router-dom"
import { format } from 'date-fns'

import './index.css'

const Form = () => {
    const maxDate = format(new Date(),"yyyy-MM-dd")

    let name

    const onSubmitForm = () =>{
        
    }

    function onChangeName(event){
        name = event.target.value
    }

    const onChangeEmail = () =>{
        
    }

    const onChangeDate = () =>{
        
    }

    return(
            <div className="main-container">
                <div className = "sub-container">
                <div className="form-container">
                    <form className="form" onSubmit={onSubmitForm}>
                        <h1 className="heading">DATA FORM</h1>
                        <div className="input-container">
                            <label className="input-label" htmlFor='name'>NAME <span className="star-symbol">*</span></label>
                            <input className='input-field' value={name} onChange={onChangeName} placeholder="Enter your name" id='name'/>
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='email'>EMAIL <span className="star-symbol">*</span></label>
                            <input className='input-field' onChange={onChangeEmail} placeholder="Enter your email" id='email'/>
                        </div>
                        <div className="input-container">
                            <label className="input-label" htmlFor='dob'>DATE OF BIRTH <span className="star-symbol">*</span></label>
                            <input className='input-field' onChange={onChangeDate} max={maxDate} id='dob' type="date"/>
                        </div>
                        <Link to = '/'>
                        <button type="submit" className='button'>Submit</button>
                        </Link>
                    </form>
                </div>
                </div>
            </div>
    )
            
}

export default Form