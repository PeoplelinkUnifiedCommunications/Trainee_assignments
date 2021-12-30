import React from 'react'
import logo from "../Parking_Lot/logo.png"
import '../Header/Header.css'
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';


export default function Header() {
    const state = useSelector(state => state.search)
    const dispatch = useDispatch()
    return (
        <div className='headerContainer'>
            <div className="logoContainer">
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="logHeading">Online-Parking Lot</h1>
            </div>
            <div className='searchContainer'>
                <input placeholder='Search Your Car/Bike' className='searchInput' value={state}
                onChange={(e)=>dispatch({type:"SEARCH", payload:e.target.value})}/>
                <AiOutlineSearch className='searchIcon'/>
            </div>            
        </div>
    )
}
