import React from 'react'
import Minicard from '../MiniCards/Minicard'
import './Page2Bottom.css'
 

const Page2Bottom = () => {
    return (
        <div className='Bottom2_container_main'>
            <div className='inside_container'>
            <div className='Top_Headings'>
           <p>Product Overvioew</p>
           <p>Product Specs</p>
            </div><hr style={{marginBottom:'10px'}} />
            <p style={{fontSize:'small'}}>The Rheem ProTerra Electric hybrid is the smallest, quiests and most efficioent water heater on the market. It features a hybrid heat pump design making 400% more efficeint than standard electric water heaters. It's so efficiuent. It pays for it self in 2-3 years and has an estimated energy cost savings of upto $4,800 over 10-years. Plus, it's energy rebate eligible super high efficeint means it could be eligible for state, local or utility rebates. It's smart: with its built-in wifi and the EcoNet App you cna check hot water availability, track energy </p>
            <Minicard />
            </div>
        </div>
    )
}

export default Page2Bottom
