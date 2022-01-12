import React from 'react'
// import './Data.css';
import "./CivilEngineering.css";
import civil from './civil.jpg';

function CivilEngineering() {
    return (
        <div className="data-container">
            <div>
            <h1 className="civil-header">CIVIL ENGINEERING DEPARTMENT</h1>
            <div className="civil-image">
                <img src={civil} alt="civil" className="civil"/>
            </div>
            <h2 className="para">About Department</h2>
            <div>
                <p className="paragraphs"s>Civil engineering is one of  the oldest engineering disciplines. “Our society would not be able to function as it does without the work of civil engineers”. The infrastructure that they help to build and maintain can benefit communities and individuals for generations.

Civil Engineering deals with entire infrastructure that includes Buildings, Water supply and Sanitation, Irrigation facilities and Transportation facilities.The old civil engineering discipline of sanitary engineering has evolved into modern environmental engineering with a wide range of applications for the Sustainable use of Resources and Smart growth.The academic program includes Planning, Analysis, Design and maintenance of the above infrastructural components. Civil engineering is an exciting profession because at the end of the day you can see the results of your work, whether that is a completed bridge, a high-rise building, a tunnel , or a hydroelectric dam. 

The Department of Civil Engineering was established in the year 2011 with an intake of 60 students and increased to 120 in the year 2019.

</p>
            </div>
            </div>
            </div>
    )
}

export default CivilEngineering
