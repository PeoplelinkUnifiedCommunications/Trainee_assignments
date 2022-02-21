import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import '../Footer/Footer.css'

export default function Footer() {
    return (
        <div className='footerContainer'>            
            <p className='content'><AiOutlineCopyrightCircle className="icon"/>2021.PeopleLink. All Rights Reserved</p>            
        </div>
    )
}
