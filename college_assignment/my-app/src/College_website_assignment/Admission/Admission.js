import React from 'react' 
import why_ace from './why_ace.png'
import './Admission.css'

function Admission() {
    return (
        <div className='main_container flex_row admisiion_page_container'>
            <img src={why_ace}/>
            <div className='admission_form'>
                <h1 className='admission_heading'>Register now</h1>
                <form>
                    <label for="name"><b>Name</b></label> <br/>
                    <input id="name" type="text" placeholder='Enter Your Name'></input>

                    <br/>

                    <label for="Phone"><b>Phone</b></label> <br/>
                    <input id="Phone" type="tel" placeholder='Enter Your Phone Number'></input>

                    <br/>

                    <label for="Mail"><b>Email</b></label> <br/>
                    <input id="Mail" type="text" placeholder='Enter Your Email'></input>

                    <br/>

                    <label for="gender"><b>Gender</b></label>
                    <br/>
                    <select className='options' id="course">
                            <option selected></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                    <br/>

                    <label for="course"><b>Course</b></label>
                    <br/>
                        <select className='options' id="course">
                            <option selected></option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="CSE">CSE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="IT">IT</option>
                        </select>

                    <div>
                        <label><b>Comments</b></label>
                        <br/>
                        <textarea placeholder='Your Comment'></textarea>
                    </div>

                    <div className='btn flex_row'>
                        <button>Submit</button>
                    </div>    
                </form>
            </div>

            <div >
                <h1 className='administration_heading'>Administration Core Team</h1>
                <div className='admin_container'>
                    <img className='img' src="https://www.aceec.ac.in/wp-content/uploads/2019/11/G.K-Sir.png"/>
                    <p ><b>Prof Y. V. Gopala Krishna Murthy</b></p>
                    <p >General Secretary</p>
                </div>

                <div className='admin_container'>
                    <img className='img' src="https://www.aceec.ac.in/wp-content/uploads/2019/11/Padmavathi-Secratary.png"/>
                    <p ><b>Mrs M. Padmavathi</b></p>
                    <p >Joint Secretary</p>
                </div>

                <div className='admin_container'>
                    <img className='img' src="https://www.aceec.ac.in/wp-content/uploads/2019/11/Princple.png"/>
                    <p><b>Dr B. L. Raju</b></p>
                    <p>Principal</p>
                </div>
            </div>
        </div>
    )
}

export default Admission;