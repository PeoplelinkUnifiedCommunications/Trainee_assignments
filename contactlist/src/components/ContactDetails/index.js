import React from "react";



const ContactDetail = (props) => {
  const {eachData,deleteContactData}=props
  const { id,name, email,number } = eachData
  const deleteContact=()=>{
      deleteContactData(id)
  }
  return (
    <div className="main">
      <div className="header">{name}</div>
      <div className="description">{email}</div>
      <div className="description">{number}</div>
      <div><button onClick={deleteContact}>Delete </button></div>
    </div>
  );
};

export default ContactDetail;
