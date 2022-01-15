import React from 'react';
import './Registrationform.css'

function Registrationform(){
    return(
        <div>
            <div className="container">
        <div className="container-block">
            <h1 className="heading">Registration Form</h1>
            <form>
                  
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name"/>
                   

            
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your Email"/>
            

                
                        <label for="company">Company</label>
                        <input type="text" id="company" placeholder="Enter Company name"/>
           

                        <label for="phone">Phone</label>
                        <input type="tel" id="phone" placeholder="Phone number"/>
        


                         <label for="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Enter Subject"/> 

                        <h1>Gender</h1>
                        <div className="gender">
                            <div className="block">
                        <input id="gendermale" name= "gender" checked value="Male" type="radio"/>
                        <label for="gendermale">Male</label>
                    </div>
                    <div className="block">
                        <input id="genderfemale" name= "gender" value="Female" type="radio"/>
                        <label for="gendermale">Female</label>
                    </div>
                    </div>
                    <div>
                        <label for="dateofbirth">Date of birth</label>
                        <input id="dateofbirth" type="date"/>
                    </div>
                    <label for="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Enter Subject"/>
                    <div className="button-container">
                        <button type="submit" className="button-name">Submit</button>
                    </div>
            </form>
        </div>
    </div>
        </div>
    )
}

export default Registrationform;