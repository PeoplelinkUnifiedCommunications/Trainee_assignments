import { Link } from 'react-router-dom'

import { BsArrowRight } from "react-icons/bs"

import './index.css'

function FormSubmitView() {
    return (
        <div className="form-bg-container">
            <div className='go-back-buttton-container'>
                <h1>Thank you for sending message.</h1>
                <Link to="/">
                    <button  className='submitButton' type='button'>Go Back <BsArrowRight /></button>
                </Link>
            </div>
        </div>
       
    )
}
export default FormSubmitView