import React from "react";
import './index.css'

function FormComponent() {


  return (
    <div className="pdf-format-bg-container">
      <div className="details-part-card">
        <p>Name : {localStorage.getItem("NAME")}</p>
        <p>Mobile: {localStorage.getItem("NUMBER")}</p>
        <p>E-mail : {localStorage.getItem("EMAIL")}</p>
        <p>Gender: {localStorage.getItem("GENDER")}</p>
      </div>
      <div className="details-part-card">
        <p>Address:</p>
        <p>City : {localStorage.getItem("CITY")}</p>
        <p>State : {localStorage.getItem("STATE")}</p>
        <p>Country: {localStorage.getItem("COUNTRY")}</p>
      </div>
    </div>
  )
}

export default FormComponent;