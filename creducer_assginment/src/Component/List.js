import {Link} from 'react-router-dom'
import '../css/List.css'

import {useDispatch , useSelector} from 'react-redux';
import { differenceInYears } from "date-fns";
import {useState} from "react"

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function List({}){                                 
    const dispatch = useDispatch()
    const state = useSelector(state => state.reducers)
    const state1 = useSelector(state => state.reducer)
  
    
    const today = new Date()

    const [search, setSearch] = useState("")
    const searchname = e =>{
        setSearch(e.target.value)        
    }

    // const isNameExist = appState.filter(each => each.name === name)
    // const isNameExist = State.filter(each => each.name.includes(search) || each.email.includes(search))  
    const isNameExist = state.filter(each => Object.values(each).some(item=> item.includes(search)))
    // commit
    
    return(
        <div className="container">
            {/* {state.map((each,index)=>index===(state.length-1)&&(<h1 key={each.id}>welcome {each.name}</h1>))} */}
            <div>
                <ToastContainer limit={1} autoClose={1000}>
                {state1.length === 0 ? null:toast(`Welcome ${state1}`)}
                </ToastContainer>
             
            </div>
            <input type="text" value={search} onChange={searchname} placeholder="Search"/>
            <ul className="container1">
                <li className="nameContainer">
                    <h1 className="name">Name</h1>
                    <h1 className="email">Email</h1>
                    <h1 className="age">Age</h1>                                    
                </li>                
                {isNameExist.map(each =>{
                    let age = differenceInYears(new Date(today), new Date(each.date))
                    return(<li className="nameContainer" key={each.id}>
                        <p className="name">{each.name}</p>
                        <p className="email">{each.email}</p>
                        <p className="age">{age}</p>
                        <button onClick={()=>dispatch({type: 'DELETING',  payload:each.id})}>Delete</button>
                    </li>)
                })}
            </ul> 
            <button className="button"><Link to="/Create">Create</Link></button>
        </div>        
    )}   

export default List;