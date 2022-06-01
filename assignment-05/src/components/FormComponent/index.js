import React from "react";
import './index.css'

function FormComponent(props) {
  const {details} = props

  const {name, number, email, city, state, country} = details

  return (
    <div className="pdf-format-bg-container">
      <div className="details-part-card">
        <p>Name : {name} </p>
        <p>Mobile:{number} </p>
        <p>E-mail :{email}</p>
        <p>Gender: </p>
      </div>
      <div className="details-part-card">
        <p>Address:</p>
        <p>City : {city} </p>
        <p>State :{state} </p>
        <p>Country: {country} </p>
      </div>
    </div>
  )
}

export default FormComponent;