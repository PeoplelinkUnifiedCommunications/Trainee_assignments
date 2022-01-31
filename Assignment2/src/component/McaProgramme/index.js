import React from 'react'

import './index.css'

function McaProgramme() {

    return (
        <div className='p-app-container'>
            <div>
                <h2 className='courseName'>Master Of Computer Application(MCA)</h2>
            </div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCXMMSle9HAaEahBFJehWFS7IS-Ofrj6jJQ&usqp=CAU' className='pg-ug-image' alt='computer'/>
            </div>
            <div>
                <p className='description'>The M.C.A course shall be of two years duration, extended over four semesters and adopts
choice based credit system (CBCS) and grading system in line with national policies and
international practices.<br/>
The broad objective of the MCA programme is to prepare post graduates for productive careers
in software industry, corporate sector, Govt. organizations and academia by providing skill
based environment for teaching and research in the core and emerging areas of the discipline.
The Programme’s thrust is on giving the students a thorough and sound background in
theoretical and skill-oriented courses relevant to the latest computer software development. The
programme emphasizes the application of software technology to solve mathematical,
computing, communications/networking and commercial problems.<br/>
This Master’s Degree Programme has been designed with a semester approach in mind. The first
year is more focused on core courses providing conceptual frame work, skills development in
computers using various technologies and the second year provides the specialization and the
project work.
</p>
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

export default McaProgramme
