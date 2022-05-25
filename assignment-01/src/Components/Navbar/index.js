import React from 'react';

import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import { BiMenuAltRight} from "react-icons/bi"
// import {GiTireIronCross} from 'react-icons/gi'
//import Menu from '../Menu'


import './index.css'



function Navbar() {

    return (
        <nav className="navigation ">
            <a href="/" className="navbar-logo"><button className='logo'>Olaolu</button></a>
            <Popup className='pop-up-lg-device' trigger={<button className='menu-button1'><BiMenuAltRight className='menu-bar-icon' /></button>} position="left top">
            <div>
                <div className="navigation-menu">
                   
                    <a className='into-tag' href='/'>x</a>
                    <div className='menu-hello-part'>

                        <ul className='menu-work-part-bg'>
                            <li className='list-item-footer-part'>
                                <a className="anchor-element-style" href='/work'><button className='anchor-button' type='button'>My Work</button></a></li>
                            <li className='list-item-footer-part'><a className="anchor-element-style" href='/shelf'><button className='anchor-button' type='button'>My Shelf</button></a></li>
                            <li className='list-item-footer-part'><a className="anchor-element-style" href='/resume'><button className='anchor-button' type='button'>My Resume</button></a></li>
                        </ul>
                        <ul className='menu-hello-part-bg'>
                            <li className='list-item-footer-part say-hello-menu'>SAY HELLO</li>
                            <li className='list-item-footer-part'>hello@olaolu.dev</li>
                            <li className='list-item-footer-part'>
                                <a className="anchor-element-style" href="https://web.telegram.org/k/"><button className='anchor-button' type='button'>t.me/mrolaolu</button></a></li>
                        </ul>
                    </div>
                    <div className='menu-ul-bg-container'>
                        <ul className='ul-of-footer-footer-part'>
                            <li className='list-item-footer-part'>
                                <a className="anchor-element-style" rel='noreferrer' href="https://twitter.com/i/flow/login" target={"_blank"}>
                                    <button className='anchor-button' type='button'>TW</button>
                                </a>
                            </li>
                            <li className='list-item-footer-part'><a className="anchor-element-style" rel='noreferrer' href="https://github.com/login" target={"_blank"}>
                                <button className='anchor-button' type='button'>GH</button>
                            </a></li>
                            <li className='list-item-footer-part'><a className="anchor-element-style" rel='noreferrer' href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target={"_blank"}>
                                <button className='anchor-button' type='button'>LN</button>
                            </a></li>
                            <li className='list-item-footer-part'>
                                <a className="anchor-element-style" rel='noreferrer' href="https://www.youtube.com/" target={"_blank"}>
                                    <button className='anchor-button' type='button'>YT</button>
                                </a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </Popup>
           <a className='menubar-small-device' href='/menu'><button className='menu-button'><BiMenuAltRight className='menu-bar-icon' /></button></a>
        </nav>

    );

}

export default Navbar
