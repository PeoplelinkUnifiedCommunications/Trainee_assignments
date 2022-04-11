import React, { useState } from 'react'
import './header.css'
import { HiMenu } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {

    const [menu, setMenu] = useState(true)
    return (
        <div>
            <div className='navbar flexRow'>
                {menu ? <HiMenu className='menu' onClick={() => setMenu(!menu)} />
                    : <AiOutlineClose className='menu' onClick={() => setMenu(!menu)} />}
                <img src="enableX_logo.png" alt="logo" className='logo' />
                <div className='flexRow login'>
                    <p className='signText'>SIGN IN</p>
                    <p className='signText' style={{ margin: "0 0.5rem" }}>|</p>
                    <p className='signText'>SIGN UP</p>
                </div>
                <FaUserCircle className='signupIcon' />
            </div>
            <div className={menu ? 'sidenav' : 'sidenavActive'}>
                <ul>
                    <li><b>Communication <br />APIs</b></li>
                    <li><b>Communication <br />Solutions</b></li>
                    <li><b>Communication For <br />Service Providers</b></li>
                    <li><b>Pricing</b></li>
                    <li><b>Developer Center</b></li>
                    <li><b>Insights</b></li>
                </ul>
            </div>
            <div>
                <div className='flexRow navOptions'>
                    <ul className='flexRow'>
                        <li className='list'><b>Communication APIs</b></li>
                        <li className='list'><b>Communication Solutions</b></li>
                        <li className='list'><b>Communication For Service Providers</b></li>
                        <li className='list'><b>Pricing</b></li>
                        <li className='list'><b>Developer Center</b></li>
                        <li className='list'><b>Insights</b></li>
                    </ul>
                    <div className='flexRow wahBtnContainer'>
                        <button className='wahBtn'>We Are Hiring</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header