import React from 'react'
import './Sidenav.css'

import { AiOutlineHome } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'
import { MdOutlineMessage } from 'react-icons/md'
import { BsImages } from 'react-icons/bs'

import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <nav className='main_container sidenav'>
      <ul>
        <Link to="/" className='links'><li><AiOutlineHome className='icon_spacing' /> Home</li></Link>
        <Link to="/notifications" className='links'><li><IoMdNotificationsOutline className='icon_spacing' /> Notifications</li></Link>
        <Link to="/search" className='links'><li><FiGithub className='icon_spacing' /> Github</li></Link>
        <Link to="/dashboard" className='links'><li><MdOutlineMessage className='icon_spacing' /> Testimonial</li></Link>
        <Link to="/expandingCards" className='links'><li><BsImages className='icon_spacing' /> Images</li></Link>
      </ul>
    </nav>
  )
}

export default Sidenav;
