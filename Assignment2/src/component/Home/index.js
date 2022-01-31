import React from 'react'

import {Link} from 'react-router-dom'

import './index.css'

function Home() {
    return (
        <div className='app-container'>
            <div className='home-container'>
                <div className='home-app-container'>
                    <p className='home-title'>Welcome To PB siddartha College! </p>
                    <p className='career'>Your Career Starts With Us.</p>
                    <div className='BlueDiv'></div>
                    <p className='home-description'>Providing educational experiences that promote a greater appreciation for diversity</p>
                    <Link to='/readmore'>
                    <button className='button'>Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
