import React from 'react'
import './Admissionform.css'

function Admissionform() {
    return (
    
            <div className="context">
                <div className="context-container">
                <h1 className="application">Application Form</h1>
                <form className="form-container">
                    <h1 className="heading">Personal Information</h1>
                    <div className="information">
                    <label for="childName">Child's Name</label>
                    <input id="childName" type="text" className="input-size"/>
                    </div>
  
                    <label for="Address">Address</label>
                    <input id="Address" type="text"/>
                
                    <label for="dateOfBirth">Date of Birth</label>
                    <input id="dateOfBirth" type="date"/>
                    
                    <label for="parents">Parent's or Guardian's</label>
                    <input id="parents" type="text"/>
                    
                    <label for="email">Email</label>
                    <input id="email" type="email"/>
                    
                    <h1 className="heading">Contact Telephone Numbers</h1>
                    <label for="mobile">Mobile</label>
                    <input type="tel" id="mobile"/>
                    <label for="contact">Contact</label>
                    <input type="text"/>
                    <div className="button-container">
                        <button className="button-co" type="submit">Submit</button>
                    </div>
                </form>
                </div>
            </div>
      
    )
}

export default Admissionform
