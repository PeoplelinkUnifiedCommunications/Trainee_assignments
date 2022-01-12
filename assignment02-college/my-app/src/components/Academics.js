import React from 'react'
import './Academics.css';
import { Link } from 'react-router-dom';


function Academics() {
    return (
        <div className="academics">
            <div className="content">
            <h1 className="courses">Courses Offered</h1>
            <ul className="academics-container">
            <li className="btech">B.Tech</li>
            <ul>
            <li className="civil"><Link to="/civilengineering" className="civil">Civil Engineering</Link></li>
            <li className="civil"><Link to="/cscengineering" className="civil">Computer Science and Engineering</Link></li>
        </ul>
        <li className="btech">Arts</li>
        <ul>
            <li className="civil"><Link to="/english" className="civil">English</Link></li>
            <li className="civil"><Link to="/sociology " className="civil">Sociology </Link></li>
        </ul>
        
        </ul> 
            </div>
        </div>
    )
}

export default Academics
