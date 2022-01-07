import React from "react";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const AddContact =()=> {
  const navigation = useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  

 const  add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    setName("")
    setEmail("")
    navigation("/");
  };
  
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName( e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail (e.target.value)}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  
}

export default AddContact;
