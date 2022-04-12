
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"

import { AiFillAppstore } from "react-icons/ai"
import { AiOutlineDoubleLeft } from "react-icons/ai"



import "./header.css"

function Header() {
    const [click, setClick] = useState(true)
    return (
        <div className="header flexRow">
            <div className="joinDiv">
                {click ? < GiHamburgerMenu className="ham flexCol" onClick={() => setClick(!click)} /> : < AiOutlineDoubleLeft className="ham flexCol" onClick={() => setClick(!click)} />}
                <div className={click ? 'nav' : 'navA'}>
                    <div className="navLink"><span>API</span></div>
                    <div className="navLink"><span>Solutions</span></div>
                    <div className="navLink"><span>Service Provider</span></div>
                    <div className="navLink"><span>Pricing</span></div>
                    <div className="navLink"><span>Developer Center</span></div>
                    <div className="navLink"><span>Insights</span></div>

                </div>
                <div className="tNav">
                    <div className="navLink"><span>API</span></div>
                    <div className="navLink"><span>Solutions</span></div>
                    <div className="navLink"><span>Service Provider</span></div>
                    <div className="navLink"><span>Pricing</span></div>
                    <div className="navLink"><span>Developer Center</span></div>
                    <div className="navLink"><span>Insights</span></div>

                </div>

            </div>
            <div className="logoDiv">
                <img className="lll" src="enableX_logo.png" alt="enable logo" width="140px" />
            </div>
            <div className="joinDiv">
                <AiFillAppstore className="talkButton flexCol" />

            </div>


        </div>

    );

}

export default Header;