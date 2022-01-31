import React from 'react'

import './index.css'

import {BsHouseDoorFill, BsFillEnvelopeFill, BsFillTelephoneFill, BsLinkedin, BsTwitter, BsFacebook, BsGoogle} from 'react-icons/bs';

function Footer() {
    return (
            <div>
            <hr className='footer-line'/>
            <div className='footer'>
                <div>
                    <p><BsFillEnvelopeFill /> pbs_college@hotmail.com</p>
                    <p><BsFillTelephoneFill/> 0866-2475966</p>
                </div>
                <div className='address-container'>
                    <p> <BsHouseDoorFill style={{margin:"5px"}} /> Parvatheneni Brahmayya Siddhartha College of Arts & Science, <br/>
                    Siddhartha Nagar, Vijayawada-520010, Andhra Pradesh, India.</p>
                </div>
                <div>
                    <p>Follow Us</p>
                    <div className='follow-us-container'>
                        <div style={{margin: "2px"}}><BsFacebook/></div>
                        <div style={{margin: "2px"}}><BsTwitter/></div>
                        <div style={{margin: "2px"}}><BsGoogle/></div>
                        <div style={{margin: "2px"}}><BsLinkedin/></div>
                    </div>

                </div>
            </div>
    </div>
    )
}

export default Footer
