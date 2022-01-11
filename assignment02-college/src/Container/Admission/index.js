import "./index.css"
function Admission() {

    return (
        <div className="mainContainer">
            <div className="admission">
                <div className="img">
                    <h1>LOOK UP INTO THE SKY</h1>
                    <h2>RISE AND SHINE</h2>
                    <p>All the programs are well designed on the basis of guidelines issued from time to time by the UGC and the AICTE . We adhere to the highest level of educations . The syllabi of all courses are designed in tune with LEARNING OUTCOMES – BASED CURRICULUM FRAMEWORK (LOCF) guidelines and also to cater the needs of the industry.
                        To face the global challenges and to have a strong footing, the University introduced more number of electives and also new courses like Robotics, Data Science, Business Analytics and BBA., Aviation.
                        We have also introduced the Choice Based courses like Bio Safty and Bio Piracy, Tourism and Hospitality, Health Care Management, Food Technology, Fundamentals of Electronics, E Commerce, Nonotechnology and Human Rights.All the programs are well designed on the basis of guidelines issued from time to time by the UGC and the AICTE . We adhere to the highest level of educations . The syllabi of all courses are designed in tune with LEARNING OUTCOMES – BASED CURRICULUM FRAMEWORK (LOCF) guidelines and also to cater the needs of the industry.
                        To face the global challenges and to have a strong footing, the University introduced more number of electives and also new courses like Robotics, Data Science, Business Analytics and BBA., Aviation.
                        We have also introduced the Choice Based courses like Bio Safty and Bio Piracy, Tourism and Hospitality, Health Care Management, Food Technology.</p>

                </div>
                <div className="form">
                    <h2>REGISTRATION FORM</h2>
                    <form>
                        <input type="text" id="fname" name="fname" placeholder="First Name" /><br />
                        <input type="text" id="lname" name="lname" placeholder="Last Name" /><br />
                        <input type="text" id="email" name="email" placeholder="E-mail" /><br />
                        <input type="number" id="number" name="number" placeholder="Phone Number" /><br />
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