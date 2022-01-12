import React from 'react';
import logo from './logo.png';
import './Navbar.css';

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
                            <li>Home</li>
                            <li>Academics</li>
                            <li>Admissions</li>
                            <li>Gallery</li>
                        </ul>
                    </div>
                </div>    
            </nav>
        </div>)
}

export default Navbar;