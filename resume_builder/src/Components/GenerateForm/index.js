import React from "react"; 
import "./style.css";
function GenerateForm(props) {


    

    const { details }= props;
    const { name,mobno, email, gender, city, state, country, code, eduType, clgName, yop, cgpa, project, duration, description } = details;
    
    return (
 <div className="main">       
     <h2>Personal Details</h2>
     <div className="personalCntnr">
       <p>Name: <span className="nameSpan">{name}</span></p>      
       <p>Mobile Number: <span className="nameSpan">{mobno}</span></p>
       <p>E-mail: <span className="nameSpan">{email}</span></p>         
       <p>Gender: <span className="nameSpan">{gender}</span></p>
       <p>City: <span className="nameSpan">{city}</span></p>
       <p>State: <span className="nameSpan">{state}</span></p>
       <p>Country: <span className="nameSpan">{country}</span></p>
       <p>ZIP: <span className="nameSpan">{code}</span></p>
    </div>
    <div>
       <h2>Education Details</h2>       
        <p><span className="nameSpan">Education Type: {eduType}</span></p>
        <p><span className="nameSpan">Name of College: {clgName}</span></p>
        <p><span className="nameSpan">Passed Out Year: {yop}</span></p>
        CGPA: {cgpa}
    </div>    
    <div>
        <h2>Experience</h2>          
        <p><span className="nameSpan">Project: {project}</span></p>        
        <p><span className="nameSpan">Duration of project: {duration}</span></p>         
        <p><span className="nameSpan">Project Description: {description}</span></p>
    </div>
 </div> )
 }
export default GenerateForm;