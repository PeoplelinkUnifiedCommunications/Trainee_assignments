import React from 'react'

import './index.css'

function BscProgramme() {

    return (
        <div className='p-app-container'>
            <div>
                <h2 className='courseName'>Bachelor of Computer Science</h2>
            </div>
            <div>
                <img src='https://www.pbsiddhartha.ac.in/dept_img/Computer%20Science.jpg' className='pg-ug-image' alt='computer'/>
            </div>
            <div>
                <p className='description'>The B.Sc. (Computer Applications, Mathematics, Statistics) degree programme is a premier
undergraduate programme in India that offers comprehensive instruction in the theory,
methods and application of Statistics, Mathematics and Computer Applications. This
programme emphasizes both theory and applications of statistics, computer applications and
is structured to provide knowledge and skills in depth necessary for the employability of
students in industry, other organizations, as well as in academics. Statistics Programme has
some unique features such as independent projects, a number of elective courses including
practical training on realistic problems, and extensive insight into statistical computations
using standard statistical packages namely, R, SPSS etc. are used in all practical courses and
project work. </p>
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
                    <td>Ram</td>
                    <td>Assistant Professor</td>
                    <td>Data Structures</td>
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

export default BscProgramme
