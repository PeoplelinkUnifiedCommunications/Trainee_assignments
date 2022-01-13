import React from 'react' 
import './Academics.css'
import {Link} from 'react-router-dom'

function Academics() {
    return (
        <div className='main_container'>
            <h1 className='academics_heading'>Academics</h1>
            <p className='academics_description'>Engineering is the discipline and profession that applies scientific theories, mathematical methods, and empirical evidence to design, create, and analyze technological solutions cognizant of safety, human factors, physical laws, regulations, practicality, and cost. In the contemporary era, engineering is generally considered to consist of the major primary branches of chemical engineering, civil engineering, electrical engineering, and mechanical engineering.[1] There are numerous other engineering sub-disciplines and interdisciplinary subjects that may or may not be part of these major engineering branches.</p>
            <div className='flex_row'>
            <div className='branch'>
                <div className='img_container flex_row'>
                    <img className='branch_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GDCExXZtxFeaWXSey1dOw4jRYDFvERUG9w&usqp=CAU"/>
                </div>
                <h4 className='branch_name'>Electronics and Communication Enigneering</h4>
                <p className='branch_desc'>This stream of engineering deals with analog transmission, basic electronics, microprocessors, solid-state devices, digital and analog communication, analog integrated circuits, microwave engineering, satellite communication, antennae, and wave progression. </p>  
                <ul>
                    <li className='list'><Link to="/embed" className='branch_link'>Embedded Systems</Link></li>
                    <li className='list'><Link to="/vlsi" className='branch_link'>VLSI</Link></li>
                </ul>
            </div>


            <div className='branch'>
                <div className='img_container flex_row'>
                    <img className='branch_img'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJwK5FdMncs7H3X_Xvr3JG_sWgfMlZdIRBfA&usqp=CAU"/>
                </div>
                <h4 className='branch_name'>Mechanical Enigneering</h4>
                <p className='branch_desc'>Mechanical engineering is the study, design, development, construction, and testing of mechanical and thermal sensors and devices, including tools, engines, and machines. ... Mechanical engineers work mostly in engineering services, research and development, and manufacturing.
</p>
                
                <ul>
                    <li className='list'><Link to="/manufacturing_eng" className='branch_link'>Manufacturing Engineering</Link></li>
                    <li className='list'><Link to="/vehicle_eng" className='branch_link'>Vehicle Engineering</Link></li>
                </ul>
            </div>

            <div className='branch'>
                <div className='img_container flex_row'>
                    <img className='branch_img'  src="https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256682.jpg"/>
                </div>
                <h4 className='branch_name'>Civil Enigneering</h4>
                <p className='branch_desc'>Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including public works such as roads, bridges, canals, dams, airports, sewage systems, pipelines, structural components of buildings, and railways.</p>
                <ul>
                    <li className='list'><Link to="/structural_eng" className='branch_link'>Structural Engineering</Link></li>
                    <li className='list'><Link to="/geotechnical_eng" className='branch_link'>Geotechnical Engineering</Link></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Academics;