import { useState } from 'react'
import React, { useRef } from 'react';
import FormComponent from '../FormComponent'
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



  const [educationType, setEducationType] = useState("")
  const [yearOfPassing, setYearOfPassing] = useState("")
  const [percentage, setPersentage] = useState("")
  const [educationDetails, setDetails] = useState([])


  const [projectTitle, setProjectTitle] = useState("")
  const [projectDescription, setDescription] = useState("")
  const [projectDuration, setDuration] = useState("")
  const [imageUrl, setImageUrl] = useState(null)
  const [signature, setSignature]  = useState(null)

  const details = { "name": name, "number": number, "email": email, "city": city, 
  "state": state, "country": country, "projectTitle": projectTitle, "projectDescription": projectDescription, "duration": projectDuration, "pic":imageUrl , "signature":signature}

  const saveName = (event) => { setName(event.target.value) }
  const saveNumber = (event) => { setNumber(event.target.value) }
  const saveEmail = (event) => { setMail(event.target.value) }
  const saveCity = (event) => { setCity(event.target.value) }
  const saveState = (event) => { setState(event.target.value) }
  const saveCountry = (event) => { setCountry(event.target.value) }
  const saveProjectTitle = (event) => { setProjectTitle(event.target.value) }
  const savePercentage = (event) => { setPersentage(event.target.value) }
  const saveDescription = (event) => { setDescription(event.target.value) }
  const saveDuration = (event) => { setDuration(event.target.value) }
  
  const saveImage = (event)=>{
    let img = event.target.files[0]
    setImageUrl(img)
  }

  const saveSignature = (event)=>{
    let sig = event.target.files[0]
    setSignature(sig)
  }

  const submitForm = (event) => {
    event.preventDefault()
    saveDetails()
    setSubmissionStatus(true)
  }

  const saveEducationType = (event) => {
    setEducationType(event.target.value)
  }

  const saveYearOfPassing = (event) => {
    setYearOfPassing(event.target.value)
  }

  const saveDetails = () => {
    const newDetails = [educationType, yearOfPassing, percentage]
    const previousDetails = educationDetails
    const updated = [...previousDetails, newDetails]
    setDetails(updated)
    setEducationType("")
    setYearOfPassing("")
    setPersentage("")
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
                    <h3 className="card-title mb-0 heading-title">{name} Resume</h3>
                  </div>
                  <hr />
                  <div className="float__infoss">
                    <FormComponent details={details} professional={educationDetails} />
                  </div>
                </div>
                <button onClick={handlePrint} className="print__button button-print">  Print </button>
              </div>
            </div>
          </div>
        </div>
      </>}
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
              <input id="Image" onChange={saveImage} className='input-field' type="file" required />
            </div>
            <div className='personal-part'>
              <br />
              <input className='input-field' value={city} onChange={saveCity} placeholder="City" type="text" required />
              <input className='input-field' value={state} onChange={saveState} placeholder="State" type="text" required />
              <input className='input-field' value={country} onChange={saveCountry} placeholder="Country" type="text" required />
              <label htmlFor='Signature'>Signature</label>
              <input onChange={saveSignature} id="Signature" className='input-field' type="file" required />
            </div>
          </div>
          <hr className='hr-line' />
          <div className='professonal-details-container'>
            <h6>Professional Details</h6>
            <div className='card-professional-details'>
              <input className='input-field' type="text" value={educationType} onChange={saveEducationType} placeholder="Education" required />
              <input className='input-field' type="text" value={yearOfPassing} onChange={saveYearOfPassing} placeholder="Year of Passing" required />
              <input className='input-field' type="text" value={percentage} onChange={savePercentage} placeholder="Percentage" required />
              <button onClick={saveDetails} className='button-next-proffession' type="button">Add another</button>
            </div>
          </div>

          <hr className='hr-line' />
          <div className='professonal-details-container'>
            <h6>Experience Details (Enter latest project details)</h6>
            <div className='card-professional-details'>
            <input className='input-field'  type="text" onChange={saveProjectTitle} value={projectTitle} placeholder='project title' />
            <input className='input-field'  type='text' onChange={saveDescription} value={projectDescription} placeholder="Description" />
            <input className='input-field'  type="number" onChange={saveDuration} value={projectDuration} placeholder={"Duration in months"} />
            </div>
          </div>
          <div className='btn-bg-div'>
            <button className='generate-button' type='submit'>Generate PDF</button>
          </div>
          <div>
           <button type="reset">Reset</button>
          </div>
        </form>
        
      </div>}
    </>

  )
}
export default Home