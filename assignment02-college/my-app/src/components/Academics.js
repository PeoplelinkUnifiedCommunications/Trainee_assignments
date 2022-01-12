import React from 'react'
import './Academics.css';
import { Link } from 'react-router-dom';


function Academics() {
    return (
        <div className="academics">
            <div className="content">
            <h1 className="courses">Courses Offered</h1>
            <p className="btech"><Link to="/btech">B.Tech</Link></p>
            {/* <ul className="group-container">
                <li className="group">Civil Engineering</li>
                <li className="group">Computer Science and Engineering</li>
                <li className="group">Mechanical Engineering</li>
                <li className="group">Computer Science and Engineering (AI & ML)</li>
                <li className="group">Computer Science and Information Technology</li>
                <li className="group">Electronics and Communication Engineering</li>
                <li className="group">Electrical and Electronics Engineering</li>
                <li className="group">Electronics and Instrumentation Engineering</li>
                <li className="group">Information Technology</li>
                
            </ul> */}
            </div>
        </div>
    )
}

export default Academics
