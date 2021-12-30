import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import '../Footer/Footer.css'

export default function Footer() {
    return (
        <div className='footerContainer'>
            <AiOutlineCopyrightCircle className="icon"/>
            <p className='content'>2021.PeopleLink. All Rights Reserved.</p>        
        </div>
    )
}
