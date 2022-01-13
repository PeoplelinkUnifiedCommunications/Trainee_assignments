import React from 'react' 
import {Link} from 'react-router-dom'


function Vlsi(){
    return(
        <div className='main_container'>
            <span><Link className='links back' to="/academics">Back</Link></span>

            <h1 className='each_branch_name'>VLSI</h1>
            <div className='each_branch_img_cont flex_row'>
                <img className='each_branch_img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDKraZHcSgXzyaELwc5bp8k57Gn9IBxlJQP3kYdS0MK2eh9Z73HaCMd6s16xlVhpCgJM&usqp=CAU"/>
            </div>
            <p className='each_branch_desc'>Very large-scale integration (VLSI) is the process of creating an integrated circuit (IC) by combining millions of MOS transistors onto a single chip. VLSI began in the 1970s when MOS integrated circuit chips were widely adopted, enabling complex semiconductor and telecommunication technologies to be developed. The microprocessor and memory chips are VLSI devices. Before the introduction of VLSI technology, most ICs had a limited set of functions they could perform. An electronic circuit might consist of a CPU, ROM, RAM and other glue logic. VLSI enables IC designers to add all of these into one chip.</p>
        
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
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/05/Prof.-B.-Giri-Raju.jpg"/></td>
                <td>Mr. B. Giri Raju</td>
                <td>Professor</td>
                <td>M. Tech</td>
                <td>2:00 PM to 3:00 PM</td>
            </tr>

            <tr>
                <td>2</td>
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/07/A.RAJESH-scaled.jpg"/></td>
                <td>Mr. A. Rajesh</td>
                <td>Professor</td>
                <td>Ph. D</td>
                <td>3:00 PM to 4:00 PM</td>
            </tr>

            <tr>
                <td>3</td>
                <td><img className='faculty_pic'  src="https://www.aceec.ac.in/wp-content/uploads/2021/07/KARUNAKAR-REDDY.jpeg"/></td>
                <td>Mr. S. Karunakar Reddy</td>
                <td>Professor</td>
                <td>MS, Ph. D</td>
                <td>4:00 PM to 5:00 PM</td>
            </tr>
        </table>
        </div>
    )
}

export default Vlsi;