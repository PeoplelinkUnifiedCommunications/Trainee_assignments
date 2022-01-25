import React from 'react';
import "./HeaderDisplay.css"

function HeaderDisplay() {
  return (
  <div className="header-display">
      <div className="header-display-left">
          <img src="https://codesign.com.bd/conversations/content/images/2020/03/Sprint-logo-design-Codesign-agency.png" alt="logo"/>
      </div>
      <div className="header-display-right">
          <ul className="header-display-list">
              <li className="span-name">Name: <span className="name-span">Karisinapu Chinnababu</span></li>
              <li className="span-name">Role: <span className="name-role">Associate-Software Developer</span></li>
          </ul>
      </div>
  </div>
  )
}

export default HeaderDisplay;
