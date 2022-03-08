import React,{useState,useContext} from 'react'
import {v4} from 'uuid'
import {store} from '../../App'
import { useNavigate } from "react-router-dom";

const CreateContact=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]= useState("")
    const [number,setNumber]= useState("")
    const [list,addData] = useContext(store)
    const navigation=useNavigate()
    
    const submitHandler=(e)=>{
        e.preventDefault()
        const newContact={id:v4(),name,email,number}
        addData([...list,newContact])
        navigation('/contact')
    }

    return(
        <div className="container" > 
            <h1>Contact Form</h1>
            <form className='input-con' onSubmit={submitHandler}>
                    <input type="text" placeholder="Name" value={name} onChange={e=>setName(e.target.value)}/><br/>
                    <input type="email" placeholder="E-mail" value={email} onChange={e=>setEmail(e.target.value)}/><br/>
                    <input type="number" placeholder="Number" value={number} onChange={e=>setNumber(e.target.value)}/><br/>
                    <div style={{textAlign:'center'}}><button className="add" type="submit">Add</button></div>
                </form>
        </div>
    )
}



export default CreateContact;