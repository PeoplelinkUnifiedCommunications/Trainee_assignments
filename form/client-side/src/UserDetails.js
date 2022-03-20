import React from 'react'
import "./UserDetails.css"

const UserDetails = ({userDetails}) => {
    const {_id, firstname, lastname, email, phone, gender, company, dob } = userDetails

  return (
    <div className="detailsContainer">
        {/* <h3>Name : {firstname} {lastname}</h3>
        <p>Email : {email}</p>
        <p>Phone : {phone}</p>
        <p>Gender : {gender}</p>
        <p>Company : {company}</p>
        <p>DOB : {dob}</p> */}
    </div>
  )
}

export default UserDetails