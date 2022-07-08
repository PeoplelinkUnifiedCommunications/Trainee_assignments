import React from 'react'
import "../header/header.css"
const Header = () => {
    return (
        <div className='flexRow pdngHSM headerHome alignCntr'>
            <div className='flexMinWidthRow alignCntr'>
                <div className='headerLogo'>
                    <img src='/images/logo.jpeg' alt='' />
                </div>
            </div>
            <div className='flexAutoRow alignCntr'>
                <div className='profile'>
                    <img src='/images/pic1.webp' alt='' />
                </div>
            </div>
        </div>
    )
}

export default Header