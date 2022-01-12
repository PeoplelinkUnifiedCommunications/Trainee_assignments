import React from 'react';
import './Admission.css';
import why_ace from './why_ace.png';

function Admission () {
    return (
        <div className='admission_container'>
            <div>
                <img src={why_ace} />
            </div>
            <div className='admission_border'>
                <h1 className='admission_heading'>Admission Form</h1>
                <form>
                    <div className='form_details'>
                        <label className='names' for="first_name"><b>First Name</b></label>
                        <input id="name" type="text" placeholder='Enter Your First Name'></input>
                    </div>
                    <div className='form_details'>
                        <label className='names' for="last_name"><b>Last Name</b></label>
                        <input id="last_name" type="text" placeholder='Enter Your Last Name'></input>
                    </div>
                    <div className='form_details'>
                        <label className='names' for="phone"><b>Phone</b></label>
                        <input id="phone" type="tel" placeholder='Enter Your Phone'></input>
                    </div>
                    <div className='form_details'>
                        <label className='names' for="mail"><b>Email</b></label>
                        <input id="mail" type="email" placeholder='Enter Your Email'></input>
                    </div>                    
                    <div className='form_details'>
                        <label for="gender_male"><b>Male</b></label>
                        <input type="radio" value="male" name="gender" id="gender_male"/>
                    <br/>
                        <label for="gender_female"><b>Female</b></label>
                        <input type="radio" value="female" name="gender" id="gender_female"/>
                    </div>
                    <div className='form_details'>
                        <label for="course"><b>Course</b></label>
                        <select className='options' id="course">
                            <option selected></option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="CSE">CSE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="IT">IT</option>
                        </select>
                    </div>
                    <div className='btn'> 
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            <div className='core_container'>
                <h1 className='core_team_heading'>Administration Core Team</h1>
                <div>
                    <img className='core_team_img' src="https://www.aceec.ac.in/wp-content/uploads/2019/11/G.K-Sir.png"/>
                    <p className='core_team_names'>Prof Y. V. Gopala Krishna Murthy</p>
                    <p className='admin'>General Secretary</p>
                </div>

                <div>
                    <img className='core_team_img' src="https://www.aceec.ac.in/wp-content/uploads/2019/11/Padmavathi-Secratary.png"/>
                    <p  className='core_team_names'>Mrs M. Padmavathi</p>
                    <p className='admin'>Joint Secretary</p>
                </div>

                <div>
                    <img className='core_team_img' src="https://www.aceec.ac.in/wp-content/uploads/2019/11/Princple.png"/>
                    <p  className='core_team_names'>Dr B. L. Raju</p>
                    <p className='admin'>Principal</p>
                </div>
            </div>
        </div>
    )
}

export default Admission;