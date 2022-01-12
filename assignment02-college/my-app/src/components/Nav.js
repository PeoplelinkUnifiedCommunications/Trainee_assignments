import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";


function Nav() {
    return (
        
        <nav className="navlist">
            <h1 className="header">TMC.</h1>
            <ul>
            <li className="lists"><Link to="/" className="links">Home</Link></li>
            <li className='lists'><Link to="/academics" className="links">Academics</Link></li>
            <li className='lists'><Link to="/admissions" className="links">Admissions</Link></li>
            <li className="lists"><Link to="/gallery" className="links">Gallery</Link></li>
            </ul>
        </nav>

       

        // <nav className="navlist">
        //     <h1 className="header">TMC.</h1>
        //     <ul>
        //         <li className="lists"><Link to="/home" className="links">HOME</Link></li>
        //         <li className="lists"><Link to="/academics" className="links">ACADEMICS</Link></li>
        //         <li className="lists"><Link to="/admission" className="links">ADMISSION</Link></li>
        //         <li className="lists"><Link to="/gallery" className="links">GALLERY</Link></li>
        //     </ul>
        //     </nav>

            
            /* <div className="container">
                <h1>The MODERN COLLEGE, PUNE</h1>
                <p>India's one of the best Engineering college</p>
                 <div className="buttons">
                 <button><Link className="links" to="/enrollnow">ENROLL NOW</Link></button>
                 </div>
            </div>
            <div className="conter">
                <h1 className='About'>About</h1>
                <h3 className="Mission">Mission</h3>
                <p className="paragraph">Imparting Quality Technical Education to young Engineers by providing the state-of-the-art laboratories, quality instructions by qualified and experienced faculty and research facilities to meet the requirements of stakeholders in real time usage and in training them to excel in competitive examinations for higher education and employment to interface globally emerging techno-informative challenges in the growth corridor of techno-excellence.</p>
            </div> */
   
            
        
    )
}

export default Nav;
