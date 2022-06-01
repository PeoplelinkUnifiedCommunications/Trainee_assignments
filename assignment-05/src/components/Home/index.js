import { useState } from 'react'
import React, { useRef } from 'react';
import FormComponent from '../FormComponent'
import { v4 as uuidv4 } from 'uuid';
import './index.css'
import { useReactToPrint } from "react-to-print";



function Home() {


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [name, setName] = useState("")
    const [number, setNumber] = useState("")
    const [email, setMail] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [formSubmitted, setSubmissionStatus] = useState(false)
    const [numberOfForms, setNumberOfForms] = useState([1])

    const details = { "name": name, "number": number, "email": email, "city": city, "state": state, "country": country }

    const saveName = (event) => { setName(event.target.value) }
    const saveNumber = (event) => { setNumber(event.target.value) }
    const saveEmail = (event) => { setMail(event.target.value) }
    const saveCity = (event) => { setCity(event.target.value) }
    const saveState = (event) => { setState(event.target.value) }
    const saveCountry = (event) => { setCountry(event.target.value) }


    const submitForm = (event) => {
        event.preventDefault()
        setSubmissionStatus(true)
    }

    const saveEducation = (event)=>{
        console.log(event.target.value)
    }

    const addField = (event)=>{
        let forms = numberOfForms
        setNumberOfForms([...forms, 1])
    }
    

    return (
        <>
        {formSubmitted && <>
            <div className="print__section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div ref={componentRef} className="card">
                      <div className="float__start">
                        <h3 className="card-title mb-0 heading">{name} Resume</h3>
                      </div>
                      <hr />
                      <div className="float__infoss">
                        <FormComponent details={details}/>
                      </div>
                    </div>
                    <button onClick={handlePrint} className="print__button button-print">  Print </button>
                  </div>
                </div>
              </div>
            </div>
              </> }
        {!formSubmitted && <div className="bg-container">
        <h4>Build Your Resume</h4>
        <form onSubmit={submitForm} className='form-bg-container'>
            <div className='personal-details-container'>
                <div className='personal-part'>
                    <h6>Personal Details</h6>
                    <input className='input-field' value={name} onChange={saveName} placeholder="Name" type="text" required />
                    <input className='input-field' value={number} onChange={saveNumber} placeholder="Number" type="number" required />
                    <input className='input-field' value={email} onChange={saveEmail} placeholder="Email" type="email" required />
                    <label htmlFor='Image'>Image</label>
                    <input id="Image" className='input-field' type="file" required />
                </div>
                <div className='personal-part'>
                    <br />
                    <input className='input-field' value={city} onChange={saveCity} placeholder="City" type="text" required />
                    <input className='input-field' value={state} onChange={saveState} placeholder="State" type="text" required />
                    <input className='input-field' value={country} onChange={saveCountry} placeholder="Country" type="text" required />
                    <label htmlFor='Signature'>Signature</label>
                    <input id="Signature" className='input-field' type="file" required />
                </div>
            </div>
            <hr className='hr-line' />
            <div>
              <h6>Professional Details</h6>
            </div>

            <hr className='hr-line' />

            <div>
                <button type='submit'>Generate PDF</button>
            </div>
        </form>

    </div>}
    </>
        
    )
}
export default Home