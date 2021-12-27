import React from 'react'
import './SmallCard.css'

const SmallCard = () => {
    return (
        <div className='SmallCard_container'>
        <div className='SmallCard_Header'>
            <img src='/Images/right-check.svg' alt='Right_check'></img>
            <p>Save Money And Energy</p>
        </div>
        <p style={{fontSize:'small', padding:'10px'}}>The ProTerra Hybrid uses 75% less Energy than a standard electric water heater to help minimize your impact on the environment - that's 4X more efficient than a standard electric water heater</p>
        </div>
    )
}

export default SmallCard
