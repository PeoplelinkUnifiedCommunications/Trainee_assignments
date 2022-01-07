import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
  
const EditContact= (props)=> {
  const navigation = useNavigate()

    const { id, name, email } = props.location.state.contact;
    editData= {
      id,
      name,
      email,
    };
  const [contact,EditContactData]=useState(editData)

  update = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateContactHandler(contact);
    EditContactData({ name: "", email: "" });
    navigation("/");
  };
  
    return (
      <div className="ui main">
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contact.name}
              onChange={(e) => EditContactData(prevState=>({...prevState,name: e.target.value }))}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={contact.email}
              onChange={(e) => EditContactData(prevState=>({...prevState, email: e.target.value }))}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
 
}

export default EditContact;
