import React from 'react'

import './index.css'

function BcomProgramme() {

    return (
        <div className='p-app-container'>
            <div>
                <h2 className='courseName'>B.Com Business Process Management (BPM)</h2>
            </div>
            <div>
                <img src='https://www.pbsiddhartha.ac.in/dept_img/Commerce.jpg' className='pg-ug-image' alt='computer'/>
            </div>
            <div>
                <p className='description'>The B.Com (BPM) an Industry Integrated programme is one that has been designed taking into
account mercurial business world. This special program is designed in collaboration with Tata
Consultancy Services (TCS) facilitates students to conveniently pursue careers in the IT industry,
as well as in sectors like Banking, Insurance, Financial Services, and Retail etc. The course
enables students to have a strong fundamental base in Economics, Taxation, Statistics, Auditing,
Cost Accounting, Finance and other subjects. The exclusive feature of this course is the
integration of subjects specially prepared by industry experts to incorporate the implementation
of analytical and decision making skills. </p>
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
                    <td>K. Narayana Rao</td>
                    <td>Assistant Professor</td>
                    <td>Accounting</td>
                    <td>2 PM to 3 PM</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>B. Kalpana</td>
                    <td>Assistant Professor</td>
                    <td>Business Law</td>
                    <td>10 AM to 11 AM</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>P. Sudhakar</td>
                    <td>Assistant Professor</td>
                    <td>Finance</td>
                    <td>3 pM to 4 pM</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>M. Siva Ranjani</td>
                    <td>Assistant Professor</td>
                    <td>Direct Tax, Indirect Tax</td>
                    <td>2 pm to 3 AM</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td><img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' alt='faculty1' className='profile-teacher'/></td>
                    <td>A. Anupama</td>
                    <td>Assistant Professor</td>
                    <td>Costing</td>
                    <td>9AM to 10AM</td>
                </tr>
            </table>
        </div>
    )
}

export default BcomProgramme
