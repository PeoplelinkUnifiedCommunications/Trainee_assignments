import React from 'react'
import { Link } from "react-router-dom";
import './saidNav.css'

const Saidnav = () => {
    return (
        <div className='sideNav '>
            <div className='flexCol pdngSM fullHeight'>
                <div className='flexMinWidthCol'>
                    <ul>
                        <Link to="dashboard">
                            <li className='pdngMD'>
                                Dashboard
                            </li>
                        </Link>

                        <Link to="borrowedBooks">
                            <li className='pdngMD'>Borrowed Books

                            </li>
                        </Link>
                        <li className='pdngMD'>Reserved Books</li>
                        <li className='pdngMD'>Returned Books</li>
                        <li className='pdngMD'>Lost Books</li>
                        <li className='pdngMD'>Fine amount</li>
                    </ul>
                </div>
                <div className='flexAutoCol '>
                    <ul className='flexRow alignCntr justifyCntr'>
                        <Link to="/">
                            <li className='txtCntr pdngSM'>LogOut</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Saidnav