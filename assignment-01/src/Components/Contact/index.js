import { BsArrowRight } from "react-icons/bs"
import { useState } from 'react'

import { Navigate } from 'react-router-dom'
import './index.css'


const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]




function Contact() {
    const [name, setName] = useState("")
    const [nameErrMsg, setNameErrMsg] = useState(false)

    const [email, setEmail] = useState("")
    const [emailErrMsg, setEmailErrMsg] = useState(false)

    const [message, setMessage] = useState("")
    const [messageErrMsg, setMsgErrMsg] = useState(false)

    const [formStatus, setFormStatus] = useState(false)

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const renderViewSubmitted=()=>{
        <Navigate to="/formsubmitview" />
    }

    const validName = () => {

        let count = 0
        for (let eachChar of name) {
            if (!(letters.includes(eachChar.toUpperCase()))) {
                count += 1
            }
        }

        if (name.length <= 2) {
            setNameErrMsg(true)
        } else if (count > 0) {
            setNameErrMsg(true)
        } else {
            setNameErrMsg(false)
        }

    }

    const validEmail = () => {
        let mailCount = 0;
        const mailFirstPart = email.slice(0, email.length - 10);
        console.log(mailFirstPart)

        for (let each of mailFirstPart) {
            const condition1 = letters.includes(each.toLocaleUpperCase())
            const condition2 = numbers.includes(each)
            if (!(condition1 || condition2)) {
                mailCount += 1
            }
        }

        console.log(mailCount)
        if (email.length < 15) {
            setEmailErrMsg(true)
        } else if (mailCount > 0) {
            setEmailErrMsg(true)
        } else if (!(email.endsWith("@gmail.com"))) {
            setEmailErrMsg(true)
        } else if (numberList.includes(email[0])) {
            setEmailErrMsg(true)
        } else {
            setEmailErrMsg(false)
        }


    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    const validMessage = () => {
        let msgLetters = []

        for (let each of message) {
            if (!(msgLetters.includes(each))) {
                msgLetters.push(each)
            }
        }

        if (msgLetters.length < 2) {
            setMsgErrMsg(true)
        } else {
            setMsgErrMsg(false)
        }
    }

    const onSubmitForm = (event) => {
        event.preventDefault()

        if (name === "") {
            setNameErrMsg(true)
        } else {
            setNameErrMsg(false)
        }

        if (message === "") {
            setMsgErrMsg(true)
        } else {
            setEmailErrMsg(false)
        }

        if (email === "") {
            setEmailErrMsg(true)
        } else {
            setEmailErrMsg(false)
        }

        if ((!(nameErrMsg || emailErrMsg || messageErrMsg) && (name !== "") && (message !== "") && (email !== ""))) {
            setFormStatus(true)
        } else {
            setFormStatus(false)
            renderViewSubmitted()
        }


    }

    return (

        <div className="form-bg-container">
            {formStatus ?<Navigate to="/formsubmitview" /> :
                <form className='form-bg' onSubmit={onSubmitForm}>
                    <h1 className='formHeading'>Send me a Message</h1>
                    <p className='form-paragraph'>Got a question or proposal, or just want <br /> to say hello? Go ahead.</p>
                    <div className='msg-mail-container'>
                        <div className='lable-input-container'>
                            <label className='lable-style' htmlFor='Name'>Your Name</label>
                            <input required onBlur={validName} value={name} onChange={onChangeName} className='input-element' id="Name" type="text" placeholder='Enter Your Name'/>
                            {nameErrMsg ? <p className='err-msg-style'>*Enter valid name</p> : null}
                        </div>
                        <div className='lable-input-container'>
                            <label className='lable-style' htmlFor='Email'>Your Email</label>
                            <input  value={email} onBlur={validEmail} onChange={onChangeEmail} className='input-element' id="Email" type="text" placeholder='Enter Your Email' required />
                            {emailErrMsg ? <p className='err-msg-style'>*Enter valid mail Id</p> : null}
                        </div>
                    </div>
                    <div className='lable-input-container-msg'>
                        <label className='lable-style' htmlFor='Message'>Your Message</label>
                        <textarea required value={message} onBlur={validMessage} onChange={onChangeMessage} rows="4" className='input-element-msg' id="Message" type="text" placeholder='Enter Your Message'></textarea>
                        {messageErrMsg ? <p className='err-msg-style'>*Enter message</p> : null}
                    </div>

                    <div onClick={onSubmitForm}>
                        <button className='submitButton' type='submit'>Shoot <BsArrowRight /></button>
                    </div>
                </form>}

        </div>
    )

}

export default Contact




