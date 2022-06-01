import React from "react";
// import { v4 as uuidv4 } from 'uuid';
import './index.css'

function FormComponent(props) {
  const { details, professional } = props

  const { name, number, email, city, state, country, projectTitle, projectDescription, duration, pic , signature} = details
  

  return (
    <div className="pdf-format-bg-container">
      <h3>Personal Details</h3>
      <div className="details-card-bg">
        <div className="details-part-card">
          <p>Name : {name} </p>
          <p>Mobile: {number} </p>
          <p>E-mail: {email}</p>
        </div>
        <div className="details-part-card">
          <p>Address:</p>
          <p>City : {city} </p>
          <p>State :{state} </p>
          <p>Country: {country} </p>
        </div>
        <div className="image-signature-container">
          <img className="profile-image-style" src={URL.createObjectURL(pic)} alt="profile"/>
          <img className="signature-image" src={URL.createObjectURL(signature)} alt="signature"/>
        </div>
      </div>
      <hr className='hr-line' />
      <h3>Professional Details</h3>
      <div className="details-part-card2">
        <table>
          <thead>
             <tr>
               <th className="heading-professional">Education</th>
               <th className="heading-professional">Year of Passing</th>
               <th className="heading-professional">Percentage</th>
             </tr>
          </thead>
          <tbody>
              {professional.map((each)=><tr>
                <td className="value-professional">{each[0]}</td>
                <td className="value-professional">{each[1]}</td>
                <td className="value-professional" >{each[2]}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
      <hr className='hr-line' />
      <h3>Projects Done:</h3>
      <div className="details-part-card">
        <p>Title: {projectTitle}</p>
        <p>Description : {projectDescription}</p>
        <p>duration: {duration} months</p>
      </div>

    </div>
  )
}

export default FormComponent;