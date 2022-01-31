import React from 'react'
import {Link} from 'react-router-dom'


import logo from './logo.png'

import './index.css'

const CollegePage = () => {
    return (
        <div >
            <nav className='header-container'>
                <div className='logo-title-container'>
                    <img src={logo} alt="College logo" height={100} width={85}/>
                    <div className='verticalline'></div>

                        <h1 className='heading1'>PB <br/>SIDDARTHA</h1>   
                </div>
                <div className='list-items'>
                    <ul className='nav-items-list'>
                        <li className='link-item'>
                            <Link className='route-link' to='/'>
                                Home
                            </Link>
                        </li>
                        <li className='link-item'>
                            <Link className='route-link' to='/about'>
                                About
                            </Link>
                        </li>
                        <li className='link-item'>
                            <Link className='route-link' to='/academics'>
                                Academics
                            </Link>
                        </li>
                        <li className='link-item'>
                            <Link className='route-link' to='/admission'>
                                Admission
                            </Link>
                        </li>
                        <li className='link-item'>
                            <Link className='route-link' to='/gallery'>
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr className='hearer-line'/>
        </div>
    )
}

export default CollegePage
