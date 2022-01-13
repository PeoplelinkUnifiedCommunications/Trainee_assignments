import React from 'react' 
import {Link} from 'react-router-dom'

function Geotechnical_eng(){
    return(
        <div className='main_container'>
            <span><Link className='links back' to="/academics">Back</Link></span>
            <h1 className='each_branch_name'>Geotechnical Engineering</h1>
            <div className='each_branch_img_cont flex_row'>
                <img className='each_branch_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4U2fKDu1HNCDD5_CrkFxkhCMX_X23qMwPQ&usqp=CAU"/>
            </div>
            <p className='each_branch_desc'>Geotechnical engineering, also known as geotechnics, is the branch of civil engineering concerned with the engineering behavior of earth materials. It uses the principles of soil mechanics and rock mechanics for the solution of its respective engineering problems. It also relies on knowledge of geology, hydrology, geophysics, and other related sciences. Geotechnical (rock) engineering is a subdiscipline of geological engineering.

In addition to civil engineering, geotechnical engineering also has applications in military, mining, petroleum, coastal engineering, and offshore construction. The fields of geotechnical engineering and engineering geology have knowledge areas that overlap, however, while geotechnical engineering is a specialty of civil engineering, engineering geology is a specialty of geology: They share the same principles of soil mechanics and rock mechanics, but differ in the application.</p>
        
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
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2020/12/gs_cse.jpg"/></td>
                <td>Mr. P. Sreenivasulu</td>
                <td>Professor </td>
                <td>M. Tech</td>
                <td>2:00 PM to 3:00 PM</td>
            </tr>

            <tr>
                <td>2</td>
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/07/Krishna-Anand-Sh.jpeg"/></td>
                <td>Mr. G. Anand </td>
                <td>Professor</td>
                <td>Ph. D</td>
                <td>3:00 PM to 4:00 PM</td>
            </tr>

        </table>
        </div>
    )
}

export default Geotechnical_eng;