import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='head'>
      <div className='headerContainer flexCol'>
        {/* <div className='topHeader'>
          <div className='jtc flexRow'>
            <img src="discordd.svg" alt="logo" className='icon' />
            <p className='jtcText'>Join the Community</p>
          </div>
          <div className='sign flexRow'>
            <p className='signText'>SIGN IN</p>
            <p className='signText' style={{ marginLeft: "0.5rem" }}>|</p>
            <p className='signText'>SIGN UP</p>
          </div>
          <div>
            <button className='ttuBtn'>
              Talk To Us
            </button>
          </div>
        </div> */}

        <div>
          <div className='imgContainer'>
            <img src="enableX_logo.png" alt="logo" className='logo' />
          </div>
          <div>
          <div className='flexRow f'>
            <ul className='flexRow'>
              <li className='alignSelfCenter'><b>Communication APIs</b></li>
              <li className='alignSelfCenter'><b>Communication Solutions</b></li>
              <li className='alignSelfCenter'><b>Communication For Service Providers</b></li>
              <li className='alignSelfCenter'><b>Pricing</b></li>
              <li className='alignSelfCenter'><b>Developer Center</b></li>
              <li className='alignSelfCenter'><b>Insights</b></li>
            </ul>
            <div>
              <button className='wahBtn'>We Are Hiring</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header