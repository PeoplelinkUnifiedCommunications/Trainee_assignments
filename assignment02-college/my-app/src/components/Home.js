import React from 'react'
import {Link} from 'react-router-dom';
import './Home.css'

function Home() {
    return (
        <div>
            <div className="container">
                <h1>The MODERN COLLEGE, PUNE</h1>
                <p>India's one of the best Engineering college</p>
                 <div className="buttons">
                 <button className="container-button"><Link className="links" to="/admissions">ENROLL NOW</Link></button>
                 
                 </div>
            </div>
            <div className="conter">
                <h1 className='About'>About</h1>
                <h3 className="Mission">Mission</h3>
                <p className="paragraph">Imparting Quality Technical Education to young Engineers by providing the state-of-the-art laboratories, quality instructions by qualified and experienced faculty and research facilities to meet the requirements of stakeholders in real time usage and in training them to excel in competitive examinations for higher education and employment to interface globally emerging techno-informative challenges in the growth corridor of techno-excellence.</p>
            </div>
        </div>
    )
}

export default Home
