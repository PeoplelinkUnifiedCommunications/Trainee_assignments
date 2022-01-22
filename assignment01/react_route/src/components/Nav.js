import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';

function Nav(){
    return (
        <nav>
        <ul className="nav-links">
          <li><Link  to="/tables" className="links">Tables</Link></li>
          <li><Link to="/tabletext" className="links">Tables Text formatting</Link></li>
          <li><Link to="/list" className="links">Different Lists</Link></li>
          <li><Link to="/images" className="links">Images</Link></li>
          <li><Link to="/registrationform" className="links">Registration Form</Link></li>
          <li><Link to="/all" className="links">All</Link></li>
        </ul>
      </nav>
    )
}

export default Nav;