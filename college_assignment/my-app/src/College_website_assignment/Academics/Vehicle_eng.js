import React from 'react' 
import {Link} from 'react-router-dom'


function Vehicle_eng(){
    return(
        <div className='main_container'>
            <span><Link className='links back' to="/academics">Back</Link></span>

            <h1 className='each_branch_name'>Vehicle Engineering</h1>
            <div className='each_branch_img_cont flex_row'>
                <img className='each_branch_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tC8OBdBbWlDyDA0u_U2cZL8jRQ6biTXlCw&usqp=CAU"/>
            </div>
            <p className='each_branch_desc'>Automotive engineering, along with aerospace engineering and naval architecture, is a branch of vehicle engineering, incorporating elements of mechanical, electrical, electronic, software, and safety engineering as applied to the design, manufacture and operation of motorcycles, automobiles, and trucks and their respective engineering subsystems. It also includes modification of vehicles. Manufacturing domain deals with the creation and assembling the whole parts of automobiles is also included in it. The automotive engineering field is research -intensive and involves direct application of mathematical models and formulas. The study of automotive engineering is to design, develop, fabricate, and test vehicles or vehicle components from the concept stage to production stage. Production, development, and manufacturing are the three major functions in this field.</p>
        
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
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/08/sasi.png"/></td>
                <td>Mr. P. Sasi Kiran</td>
                <td>Professor</td>
                <td>M. Tech</td>
                <td>2:00 PM to 3:00 PM</td>
            </tr>

            <tr>
                <td>2</td>
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/08/Venkatesh.jpeg"/></td>
                <td>Mr. G. Venkatesh </td>
                <td>Professor</td>
                <td>Ph. D</td>
                <td>3:00 PM to 4:00 PM</td>
            </tr>

        </table>
        </div>
    )
}

export default Vehicle_eng;