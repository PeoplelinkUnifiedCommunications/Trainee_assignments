import React from 'react' 
import {Link} from 'react-router-dom'

function Embedded_systems(){
    return(
        <div className='main_container'>
            <span><Link className='links back' to="/academics">Back</Link></span>
            <h1 className='each_branch_name'>Embedded Systems</h1>
            <div className='each_branch_img_cont flex_row'>
                <img className='each_branch_img' src="https://media.itpro.co.uk/image/upload/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1605629278/itpro/shutterstock_cpu_processor_abstract.jpg"/>
            </div>
            <p className='each_branch_desc'>An embedded system is a computer system—a combination of a computer processor, computer memory, and input/output peripheral devices—that has a dedicated function within a larger mechanical or electronic system.[1][2] It is embedded as part of a complete device often including electrical or electronic hardware and mechanical parts. Because an embedded system typically controls physical operations of the machine that it is embedded within, it often has real-time computing constraints. Embedded systems control many devices in common use today.[3] In 2009 it was estimated that ninety-eight percent of all microprocessors manufactured were used in embedded systems.[4]

Modern embedded systems are often based on microcontrollers (i.e. microprocessors with integrated memory and peripheral interfaces), but ordinary microprocessors (using external chips for memory and peripheral interface circuits) are also common, especially in more complex systems. In either case, the processor(s) used may be types ranging from general purpose to those specialized in a certain class of computations, or even custom designed for the application at hand. A common standard class of dedicated processors is the digital signal processor (DSP).</p>
        
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
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/05/Dr.-P.-Satish-Kumar.jpg"/></td>
                <td>Dr. P. Sathish Kumar</td>
                <td>Professor & HOD</td>
                <td>Ph. D</td>
                <td>9:00 AM to 10:00 AM</td>
            </tr>

            <tr>
                <td>2</td>
                <td><img className='faculty_pic' src="https://www.aceec.ac.in/wp-content/uploads/2021/09/photo-for-convocation.jpg"/></td>
                <td>Dr. Ch. Srinivasa Rao</td>
                <td>Professor</td>
                <td>Ph. D</td>
                <td>10:00 AM to 11:00 AM</td>
            </tr>

            <tr>
                <td>3</td>
                <td><img className='faculty_pic'  src="https://www.aceec.ac.in/wp-content/uploads/2021/12/Dr.-V.-S.-S.-N.-Srinivasa-Baba.jpeg"/></td>
                <td>Dr. V. S. S. N. Srinivasa Baba</td>
                <td>Professor & Dean</td>
                <td>MS, Ph. D</td>
                <td>11:00 AM to 12:00 PM</td>
            </tr>
        </table>
        </div>
    )
}

export default Embedded_systems;