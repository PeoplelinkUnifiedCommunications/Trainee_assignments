import React from 'react'

import './index.css'

function Admission() {
    return (
        <div className='form-container'>
            <div>
                <img src='https://www.pyramidlifestyle.com/images/book-a-appointment.jpg' 
                alt='register seat' className='register-image'/>
            </div>
            <div>
            <form>
                <div className='title'>
                    <div className='vl'></div>
                    <p className='title-heading'>Register</p>
                    <div className='vl'></div>
                </div>
                <div className='name-container'>
                    <input type='text' className='Input-box' placeholder='Enter Your First name*'/>
                    <input type='text' className='Input-box' placeholder='Enter Your Last name*'/>
                </div>
                <div>
                <input type='text' className='Input-box' placeholder='Enter Your Email Id'/>
                </div>
                <div>
                <input type='text' className='Input-box' placeholder='Enter Your Mobile Number'/>
                </div>
                <div className='label-div'>
                <label>Enter Your Date of Birth: </label>
                <input type="date" placeholder="Enter Your Date Of Birth" class="Input-box"/>
                </div>
                
                <div className="labelForm label-div">
                    <label>Gender:</label>
                    <input type="radio" id='male'/>
                    <label for='male'>Male</label>
                    <input type="radio" id='female'/>
                    <label for='female'>Female</label>
                </div>
                <div class="labelForm">
                    <label for='degree' >Degree:</label>
                    <select class="inputElement">
                        <option value="be/btech">
                            Graduation
                        </option>
                        <option value="bca">Post Graduation</option>
                        <option value="bsc">Intermediate</option>
                        <option value="mca">Btech</option>
                    </select>
                </div>
                <div className='label-div'>
                    <label>Last Degree:</label>
                    <input type="text" placeholder="Enter Your Last Passed Degree" class="Input-box"/>

                </div>
                <div className='label-div'>
                    <label>Enter Last Degree Passed Out Year: </label>
                    <input type='date' className='Input-box' />
                </div>

                 <div>
                     <textarea id='textarea' className='textareaBox' placeholder='Fill In Your Current Address'></textarea>
                 </div>
                    <div className='buttonEl'>
                        <button className='button'>Submit</button>
                    </div>
                    
            </form>
        </div>     
        </div>
    )
}

export default Admission
