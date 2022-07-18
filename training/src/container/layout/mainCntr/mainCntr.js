import React from 'react'
import { Outlet } from 'react-router-dom';

const MainCntr = () => {
    return (
        <div className='contentLayout'>
            <div className='mainCntnr'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainCntr