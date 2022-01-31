import React from 'react'

import './index.css'

function MbaProgramme() {

    return (
        <div className='p-app-container'>
            <div>
                <h2 className='courseName'>Master of Business Adminstration (MBA)</h2>
            </div>
            <div>
                <img src='https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1640300037/OnlineMBA.com/OMBA_Resources_What-is-mba/OMBA_Resources_What-is-mba.jpg?_i=AA' className='pg-ug-image' alt='computer'/>
            </div>
            <div>
                <p className='description'>Established in the year 1986, the Department of Business Administration was designed as
leading Centre of Excellence and has envisioned to inspire young minds who can ardently
steer forward the ever-changing business landscape towards economic growth and social
transformation. During the program, students are involved in several case studies which
enable them to be better learners and develop critical thinking capacity. Students get handson experience to various analytical tools and statistical packages, helping them to analyze the
prevailing business environment better and to develop their own analytical ability. Students
of P B Siddhartha College of Arts & Science will have hands-on training in stock trading
through various simulation apps. MOUs with Bajaj Fin Serve, NHRD Network, Aadhya
Analytics, Tally Education Private Ltd are providing the opportunity to expose students to
various learning activities.</p>
            </div>
            <table>
                <tr>
                    <th>S.NO</th>
                    <th>Image</th>
                    <th>Faculty Name</th>
                    <th>Designation</th>
                    <th>Specialization</th>
                    <th>Time-Table</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>Prof.Rajesh C. Jampala</td>
                    <td>Professor</td>
                    <td>Financial Markets</td>
                    <td>11 AM to 12 AM</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>Sarojini</td>
                    <td>Assistant Professor</td>
                    <td>C++ Programming</td>
                    <td>10 AM to 11 AM</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>A. Kavitha</td>
                    <td>Assistant Professor</td>
                    <td>Network Security</td>
                    <td>3 pM to 4 pM</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>R.Gopi</td>
                    <td>Assistant Professor</td>
                    <td>PHP</td>
                    <td>2 pm to 3 AM</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>Ch. Uma</td>
                    <td>Assistant Professor</td>
                    <td>Software Engineering</td>
                    <td>9AM to 10AM</td>
                </tr>
            </table>
        </div>
    )
}

export default MbaProgramme
