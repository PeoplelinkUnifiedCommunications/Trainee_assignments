import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import logo from './logo.jpg'

function Navbar() {
    return(
    <div className='base_container'>
        <div className='navbar_container flex_row header'>
            <div className='flex_row'>
                <img className='logo' src={logo} alt="logo" />
                <div>
                    <h1 className='ace_word'>ACE</h1>
                    <h4 className='clg_word'>Engineering College</h4>
                </div>
            </div>

            <div>
                <ul className='flex_row'>
                    <li><Link to="/" className='links'>Home</Link></li>
                    <li><Link to="/academics" className='links'>Academics</Link></li>
                    <li><Link to="/admission" className='links'>Admissions</Link></li>
                    <li><Link to="/gallery" className='links'>Gallery</Link></li>
                </ul>
            </div>
        </div>
    </div>
    )
    
}

export default Navbar;