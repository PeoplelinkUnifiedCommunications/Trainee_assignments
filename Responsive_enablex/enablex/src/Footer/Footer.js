import React from 'react'
import './footer.css'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube, AiFillApple } from 'react-icons/ai'
import { RiGooglePlayFill } from 'react-icons/ri'

function Footer() {
    return (
        <div>
            <div className='footContainer'>
                <div className='fContainer'>
                    <div className='cwuContainer'>
                        <h4 className='cwu'>Connect wit Us</h4>
                        <div className='flexRow connectWithUS'>
                            <AiFillLinkedin />
                            <AiFillTwitterSquare />
                            <AiFillYoutube />
                        </div>
                    </div>
                    <div className='playStore'>
                        <div className='flexRow app'>
                            <AiFillApple className='storeIcon'/>
                            <p className='appName'>App Store</p>
                        </div>
                        <div className='flexRow app'>
                            <RiGooglePlayFill className='storeIcon'/>
                            <p className='appName'>Google Play</p>
                        </div>                    </div>
                </div>
                <p className='footerText'> Copyright @ 2022 VCLOUDX PTE. LTD. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer