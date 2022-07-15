import React from 'react'
import MainCntr from './mainCntr.js/mainCntr'
import Saidnav from './saidNav/saidnav'

const Layout = () => {
    return (
        <div className='flexRow'>
            <Saidnav />
            <MainCntr />
        </div>
    )
}

export default Layout