import React from 'react' 
import {Link} from 'react-router-dom'


function Structural_eng(){
    return(
        <div className='main_container'>
            <span><Link className='links back' to="/academics">Back</Link></span>

            <h1 className='each_branch_name'>Structural Engineering</h1>
            <div className='each_branch_img_cont flex_row'>
                <img className='each_branch_img' src="https://www.procore.com/jobsite/wp-content/uploads/2020/07/iStock-1157332392-768x512.jpg"/>
            </div>
            <p className='each_branch_desc'>Structural engineering is a sub-discipline of civil engineering in which structural engineers are trained to design the 'bones and muscles' that create the form and shape of man-made structures. Structural engineers also must understand and calculate the stability, strength, rigidity and earthquake-susceptibility of built structures for buildings[1] and nonbuilding structures. The structural designs are integrated with those of other designers such as architects and building services engineer and often supervise the construction of projects by contractors on site.[2] They can also be involved in the design of machinery, medical equipment, and vehicles where structural integrity affects functioning and safety. See glossary of structural engineering.

Structural engineering theory is based upon applied physical laws and empirical knowledge of the structural performance of different materials and geometries. Structural engineering design uses a number of relatively simple structural concepts to build complex structural systems. Structural engineers are responsible for making creative and efficient use of funds, structural elements and materials to achieve these goals.</p>
        
        <table>
            <tr className='table_heading'>
                <th>S. No</th>
                <th>Image</th>
                <th>Faculty Name</th>
                <th>Designation</th>
                <th>Qualification</th>
                <th>Time Table</th>
            </tr>
            <tr>
                <td>1</td>
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/07/suprajapassphoto.jpeg"/></td>
                <td>Mr. P. Sridevi</td>
                <td>Professor & HOD</td>
                <td>M. Tech</td>
                <td>2:00 PM to 3:00 PM</td>
            </tr>

            <tr>
                <td>2</td>
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2020/12/Dr-SRINIVASAN-NAGU.jpg"/></td>
                <td>Mr. G. Raju </td>
                <td>Professor</td>
                <td>Ph. D</td>
                <td>3:00 PM to 4:00 PM</td>
            </tr>

        </table>
        </div>
    )
}

export default Structural_eng;