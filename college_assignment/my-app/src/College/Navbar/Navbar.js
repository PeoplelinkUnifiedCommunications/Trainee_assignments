import React from 'react';
import logo from './logo.png';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <div>
            <nav >
                <div className="mainPageContainer">
                    <div className='mainPageContainer'>
                        <img src={logo} className='logo'/>
                        <h1 className='clg_name'>ACE Engineering College</h1>
                    </div>
                    <div className='mainPageContainer'>
                        <ul>
                            <li><Link to="/mainpage">Home</Link></li>
                            <li><Link to="/academics">Academics</Link></li>
                            <li><Link to="/admission">Admissions</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                        </ul>
                    </div>
                </div>    
            </nav>
        </div>)
}

export default Navbar;