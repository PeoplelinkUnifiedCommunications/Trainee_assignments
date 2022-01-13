import React from 'react' 
import {Link} from 'react-router-dom'

function Manufacturing_eng(){
    return(
        <div className='main_container'>
            <span><Link className='links back' to="/academics">Back</Link></span>
            <h1 className='each_branch_name'>Manufacturing Engineering</h1>
            <div className='each_branch_img_cont flex_row'>
                <img className='each_branch_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tC8OBdBbWlDyDA0u_U2cZL8jRQ6biTXlCw&usqp=CAU"/>
            </div>
            <p className='each_branch_desc'>Manufacturing engineering is a branch of professional engineering that shares many common concepts and ideas with other fields of engineering such as mechanical, chemical, electrical, and industrial engineering. Manufacturing engineering requires the ability to plan the practices of manufacturing; to research and to develop tools, processes, machines and equipment; and to integrate the facilities and systems for producing quality products with the optimum expenditure of capital.[1]

The manufacturing or production engineer's primary focus is to turn raw material into an updated or new product in the most effective, efficient & economic way possible. An example would be a company uses computer integrated technology in order for them to produce their product so that it's faster and uses less human labor.</p>
        
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
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2020/12/P-Venkateswarar-Reddy.png"/></td>
                <td>Mr. P. Venkatesh</td>
                <td>Professor</td>
                <td>M. Tech</td>
                <td>2:00 PM to 3:00 PM</td>
            </tr>

            <tr>
                <td>2</td>
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/08/Veera-kumar.jpeg"/></td>
                <td>Mr. G. BalaRaju</td>
                <td>Professor</td>
                <td>Ph. D</td>
                <td>3:00 PM to 4:00 PM</td>
            </tr>

        </table>
        </div>
    )
}

export default Manufacturing_eng;