import React, { useState } from "react";
import GenerateForm from "../generateForm";
// import { HiPlus } from "react-icons/hi";
import "./style.css";
function Home() {

    const [name, setName] = useState("");
    const [mobno, setMobno] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [code, setCode] = useState("");
    const [eduType, setEduType] = useState("");
    const [clgName, setClgName] = useState("");
    const [yop, setYop] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [project, setProject] = useState("");
    const [duration, setDuration] = useState("")
    const [description, setDescription] = useState("");

    const changeName = (e) => setName(e.target.value)
    const changeMobno = (e) => setMobno(e.target.value)
    const changeEmail = (e) => setEmail(e.target.value)
    const changeGender = (e) => setGender(e.target.value)
    const changeCity = (e) => setCity(e.target.value)
    const changeState = (e) => setState(e.target.value)
    const changeCountry = (e) => setCountry(e.target.value)
    const changeCode = (e) => setCode(e.target.value)
    const changeEducation = (e) => setEduType(e.target.value)
    const changeCollege = (e) => setClgName(e.target.value)
    const changeYop = (e) => setYop(e.target.value)
    const changeCgpa = (e) => setCgpa(e.target.value)
    const changeProject = (e) => setProject(e.target.value)
    const changeDuration = (e) => setDuration(e.target.value)
    const changeDescription = (e) => setDescription(e.target.value)
    
    return(
    <div className="resumeMain">
        <span>Resume Builder</span>
        <div className="resumeCntnr">
            <h1>Personal Details</h1>
            <div className="fieldCntnr">
               <div>
                <div className="txtField">
                 <label className="labelField" htmlFor="name">Name</label><br />
                 <input className="inputField" type ="text" placeholder="Name" value={name} onChange={changeName}/>
                </div>

                <div className="txtField">
                 <label className="labelField" htmlFor="mobno">Mobile Number</label><br />
                 <input className="inputField" type ="number" placeholder="Mob Number" value={mobno} onChange={changeMobno}/>
                </div>

                <div className="txtField">
                 <label className="labelField" htmlFor="e-mail">E-mail</label><br />
                 <input className="inputField" type ="e-mail" placeholder="E-mail" value={email} onChange={changeEmail}/>
                </div> 
                
                <div className="txtField">
                <label className="labelField" htmlFor="gender">Gender</label><br />
                <input className="radioField" type ="radio" name="gender" value="male" onChange={changeGender}/>
                <label className="labelField" htmlFor="male" value={gender}>Male</label>
                <input className="radioField" type ="radio" name="gender" value="female" onChange={changeGender}/>
                <label className="labelField" htmlFor="female" value={gender}>Female</label>
                </div>
                </div>
                
                <div>
                <div className="selectField">
                <label className="labelField" htmlFor="city">City</label><br />
                <select className="inputField" value={city} onChange={changeCity}>
                    <option value ="Delhi">Delhi</option>
                    <option value ="bangalore">Bangalore</option>
                    <option value ="hyderabad">Hyderabad</option>
                    <option value ="delhi">Mumbai</option>
                    <option value ="agra">Agra</option>
                    <option value ="pune">Pune</option>
                    <option selected value ="none">None</option> 
                </select>    
                </div>
                
                <div className="txtField">
                <label className="labelField" htmlFor="state">State</label><br />
                <select className="inputField" value={state} onChange={changeState}>
                    <option value ="ap">Andhra Pradesh</option>
                    <option value ="telangana">Telangana</option>
                    <option value ="chattisgarh">Chattisgarh</option>
                    <option value ="goa">Goa</option>
                    <option value ="punjab">Punjab</option>
                    <option value ="up">Uttar Pradesh</option>
                    <option selected value ="none">None</option> 
                </select>    
                </div>

                <div className="txtField">
                <label className="labelField" htmlFor="country">Country</label><br />
                <select className="inputField" value={country} onChange={changeCountry}>
                    <option value ="australia">Australia</option>
                    <option value ="belgium">Belgium</option>
                    <option value ="canada">Canada</option>
                    <option value ="denmark">Denmark</option>
                    <option value ="egypt">Egypt</option>
                    <option value ="india">India</option>
                    <option selected value ="none">None</option> 
                </select>   
                
                </div>

                <div className="txtField">
                <label className="labelField" htmlFor="code">Code</label><br />
                <input className="inputField" type ="text" placeholder="PIN" required pattern="^[0-9]{6}$" value={code} onChange={changeCode}/>
                </div> 
                </div> 
            </div>

            <h1>Educational Details</h1>
            <div className="fieldCntnr1">
                <div className="txtField">
                    <label className="labelField" htmlFor="edu-type">Education Type</label><br />
                    <select className="inputField" value={eduType} onChange={changeEducation}>
                    <option value ="graduation">Graduation</option>
                    <option value ="post graduation">Post Graduation</option>
                    <option value ="board">Board of Intermediate</option>
                    <option value ="ssc">SSC</option>
                    <option selected value ="none">None</option> 
                </select>   
                </div>

                <div className="txtField">
                  <label className="labelField" htmlFor="clg-name">Name of college</label><br />
                  <input className="inputField" type ="text" placeholder="College" value={clgName} onChange={changeCollege}/>
                </div> 

                <div className="txtField">
                    <label className="labelField" htmlFor="yop">Year of Passing</label><br />
                    <select className="inputField" value={yop} onChange={changeYop}>
                    <option value ="2016">2016</option>
                    <option value ="2017">2017</option>
                    <option value ="2018">2018</option>
                    <option value ="2019">2019</option>
                    <option value ="2020">2020</option>
                    <option value ="2021">2021</option>
                    <option value ="2022">2022</option>
                    <option className="optField" selected value ="none">None</option> 
                </select>
                </div>

                <div className="txtField">
                <label className="labelField" htmlFor="cgpa">% in CGPA</label><br />
                <input className="inputField" type ="number" placeholder="CGPA" value={cgpa} onChange={changeCgpa}/>
                </div>  

                {/* <div className="plusIcon">
                <button className="plusBtn"><HiPlus className="hi"/></button>
                </div>  */}
            </div>

            <h1>Experience</h1>
            <div className="fieldCntnr2">
            <h2>Training</h2>
            <div className="txtField">
                <label className="labelField" htmlFor="project-title">Project-Title</label><br />
                <input className="inputField" type ="text" placeholder="Course" value={project} onChange={changeProject}/>
            </div> 
            <div className="txtField">
                <label className="labelField" htmlFor="duration">Duration</label><br />
                <input className="inputField" type ="text" placeholder="Duration" value={duration} onChange={changeDuration}/>
            </div>
            <div className="txtField">
                <label className="labelField" htmlFor="description">Description</label><br />
                <textarea rows="1" cols="1" className="inputField" type ="text" placeholder="Description" value={description} onChange={changeDescription}/>
            </div>
            </div>

            <div className="btn">
            <button className="generateBtn ">Generate Resume</button>
            </div>
            {/* <div>
                <GenerateForm details={details}/>
            </div> */}
            </div>
            </div>
            
 )
}
export default Home;