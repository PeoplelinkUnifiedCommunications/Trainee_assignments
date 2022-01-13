import React from "react";

import "./index.css"
function Admission() {

    return (
        <div className="mainContainer">
            <div className="admission">
                <div className="imageA">
                    <div className="imageA1">
                        <img className="imgA" src="/images/form1.png" alt="image"  />

                    </div>

                </div>
                <div className="form">
                    <h2>REGISTRATION FORM</h2>
                    <form>
                        <input type="text" id="fname" name="fname" placeholder="First Name" /><br />
                        <input type="text" id="lname" name="lname" placeholder="Last Name" /><br />
                        <input type="text" id="email" name="email" placeholder="E-mail" /><br />
                        <input type="text" id="number" name="number" placeholder="Phone Number" /><br />
                        <input type="radio" id="fale" name="Gender" value="Name" />
                        <label for="Male">Male</label><br />
                        <input type="radio" id="female" name="Gender" value="Name" />
                        <label for="Female">Female</label><br />
                        <input type="radio" id="other" name="Gender" value="Name" />
                        <label for="other">Other</label><br />
                        <input type="text" id="dname" name="dname" placeholder="Degree" /><br />
                        <input type="text" id="cname" name="cname" placeholder="Course" /><br />
                        <input type="submit" value="Submit" />

                    </form>

                </div>

            </div>

        </div>
    );
}
export default Admission;