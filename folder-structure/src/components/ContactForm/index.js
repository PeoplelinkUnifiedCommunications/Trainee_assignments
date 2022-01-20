import React,{useState} from "react"
import {v4} from 'uuid'
import ContactList from '../ContactList';

import './index.css'


function ContactForm() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState('')
  const [number,setNumber]=useState('')
  const [list,setLists]=useState([])
  const value=localStorage.getItem("contactLists")
  const parsedData=JSON.parse(value)

  const deleteItemList=(id)=>{
     const delIndex=parsedData.findIndex(each=>each.id===id)
     parsedData.splice(delIndex,1)
     setLists(parsedData)
     localStorage.setItem("contactLists",JSON.stringify(parsedData))
    
  }

  const onAddItem = event => {
    event.preventDefault()
    
    const newItem = {
      id: v4(),
      name,
      email,
      number,
    }

    if (name==='' || email==='' || number==='' ){
      alert("All fields are Required")
    }else if (parsedData===null){
      localStorage.setItem("contactLists",JSON.stringify(newItem))
      setEmail('')
      setNumber('')
    }else{
      const contactList=[...parsedData,newItem]
      localStorage.setItem("contactLists",JSON.stringify(contactList))
      setName('')
      setEmail('')
      setNumber('')
    }
  }

    return (
      <div className="form-container">
        <div className='login-form'>
         <form onSubmit={onAddItem}>
            <div className="container">
              <label>Name: </label>
              <input type="text" value={name} onChange={e=>{setName(e.target.value)}}/><br/>
            </div>
            <div className="container">
              <label>Email: </label>
              <input type="email" value={email} onChange={e=>{setEmail(e.target.value)}}/><br/>
            </div>
            <div className="container">
              <label>Number: </label>
              <input type="number" value={number} onChange={e=>{setNumber(e.target.value)}}/><br/>
            </div>
            <button type="submit" className="add-button">Add</button>
         </form>
        </div>
         <div className="appointments-list">
            <ul className="un-order">
              <li className="list-item">
                <p className="name">Name</p>
                <p className="email">E-mail</p>
                <p className="num">Number</p>
                <p className="del">DELETE</p>
              </li>
              {parsedData.map(each => (
                <ContactList
                  key={each.id}
                  contactDetails={each}
                  deleteItemList={deleteItemList}
                />
              ))}
            </ul>
         </div>
      </div>
    )
  
}

export default ContactForm;
