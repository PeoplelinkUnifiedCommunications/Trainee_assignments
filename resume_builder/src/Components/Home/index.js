import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import GenerateForm from "../GenerateForm";
import { HiPlus } from "react-icons/hi";
import "./style.css";
function Home() {


  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [name, setName] = useState("");
  const [mobno, setMobno] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const [image, setImage] = useState("");
  const [signature, setSignature] = useState("");

  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [code, setCode] = useState("");
  const [eduType, setEduType] = useState("");
  const [clgName, setClgName] = useState("");
  const [yop, setYop] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [project, setProject] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [resumeSubmitted, setResumeSubmitted] = useState(false);

  const changeName = (e) => setName(e.target.value);
  const changeMobno = (e) => setMobno(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeGender = (e) => setGender(e.target.value);
  const changeCity = (e) => setCity(e.target.value);
  const changeState = (e) => setState(e.target.value);
  const changeCountry = (e) => setCountry(e.target.value);
  const changeCode = (e) => setCode(e.target.value);
  const changeEducation = (e) => setEduType(e.target.value);
  const changeCollege = (e) => setClgName(e.target.value);
  const changeYop = (e) => setYop(e.target.value);
  const changeCgpa = (e) => setCgpa(e.target.value);
  const changeProject = (e) => setProject(e.target.value);
  const changeDuration = (e) => setDuration(e.target.value);
  const changeDescription = (e) => setDescription(e.target.value);

  let details = {
    name,
    mobno,
    email,
    gender,
    image,
    signature,
    city,
    state,
    country,
    code,
    eduType,
    clgName,
    yop,
    cgpa,
    project,
    duration,
    description,
  };

  const resumeSubmission = (e) => {
    e.preventDefault();
    changeEduDetails();
    setResumeSubmitted(true);
  };

  const [eduDetails, setEduDetails] = useState([])

  const changeEduDetails = () => {
  const newEduDetails = [eduType, clgName, yop, cgpa]
  const existEduDetails = eduDetails;
  const updatedEduDetails = [...existEduDetails,newEduDetails]
  setEduDetails(updatedEduDetails)
  setEduType("")
  setClgName("")
  setYop("")
  setCgpa("")
}

  const saveImage = (e) => {
    let img = e.target.files[0]
    setImage(img)
  }

  const saveSignature = (e) => {
    let signature = e.target.files[0]
    setSignature(signature)
  }

  return (
    <div className="resumeMain">
      {!resumeSubmitted && (
        <>
          <span className="mainHeading">Create Your Own Resume</span>
          <div className="resumeCntnr">
            <form onSubmit={resumeSubmission}>
              <h1 className="heading1">Personal Details</h1>
              <div className="fieldCntnr-n">
                <div>
                  <div className="txtField">
                    <label className="labelField" htmlFor="name">
                      Name
                    </label>
                    <br />
                    <input
                      className="inputField"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={changeName}
                      required
                    />
                  </div>

                  <div className="txtField">
                    <label className="labelField" htmlFor="mobno">
                      Mobile Number
                    </label>
                    <br />
                    <input
                      className="inputField"
                      type="number"
                      placeholder="Mob Number"
                      value={mobno}
                      onChange={changeMobno}
                      required
                    />
                  </div>

                  <div className="txtField">
                    <label className="labelField" htmlFor="e-mail">
                      E-mail
                    </label>
                    <br />
                    <input
                      className="inputField"
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={changeEmail}
                      required
                    />
                  </div>

                  <div className="txtField">
                    <label className="labelField" htmlFor="gender">
                      Gender
                    </label>
                    <br />
                    <input
                      className="radioField"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={changeGender}
                      required
                    />
                    <label className="labelField" htmlFor="male" value={gender}>
                      Male
                    </label>
                    <input
                      className="radioField"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={changeGender}
                      required
                    />
                    <label
                      className="labelField"
                      htmlFor="female"
                      value={gender}
                    >
                      Female
                    </label>
                  </div>

                  <div className="fileField">
                  <label className="labelField" htmlFor="image">
                      Image
                    </label>
                    <br />
                    <input
                      className="fileInput"
                      type="file"
                      onChange={saveImage}
                      required
                    />
                  </div> 
                </div>

                <div>
                  <div className="selectField">
                    <label className="labelField" htmlFor="city">
                      City
                    </label>
                    <br />
                    <select
                      className="inputField"
                      onChange={changeCity}
                      required
                    >
                      <option value="Delhi" name="city">
                        Delhi
                      </option>
                      <option value="bangalore" name="city">
                        Bangalore
                      </option>
                      <option value="hyderabad" name="city">
                        Hyderabad
                      </option>
                      <option value="delhi" name="city">
                        Mumbai
                      </option>
                      <option value="agra" name="city">
                        Agra
                      </option>
                      <option value="pune" name="city">
                        Pune
                      </option>
                      <option value="none" name="city" selected>
                        None
                      </option>
                    </select>
                  </div>

                  <div className="txtField">
                    <label className="labelField" htmlFor="state">
                      State
                    </label>
                    <br />
                    <select
                      className="inputField"
                      onChange={changeState}
                      required
                    >
                      <option value="ap" name="state">
                        Andhra Pradesh
                      </option>
                      <option value="telangana" name="state">
                        Telangana
                      </option>
                      <option value="chattisgarh" name="state">
                        Chattisgarh
                      </option>
                      <option value="goa" name="state">
                        Goa
                      </option>
                      <option value="punjab" name="state">
                        Punjab
                      </option>
                      <option value="up" name="state">
                        Uttar Pradesh
                      </option>
                      <option value="none" name="state" selected>
                        None
                      </option>
                    </select>
                  </div>

                  <div className="txtField">
                    <label className="labelField" htmlFor="country">
                      Country
                    </label>
                    <br />
                    <select
                      className="inputField"
                      onChange={changeCountry}
                      required
                    >
                      <option value="australia" name="country">
                        Australia
                      </option>
                      <option value="belgium" name="country">
                        Belgium
                      </option>
                      <option value="canada" name="country">
                        Canada
                      </option>
                      <option value="denmark" name="country">
                        Denmark
                      </option>
                      <option value="egypt" name="country">
                        Egypt
                      </option>
                      <option value="india" name="country">
                        India
                      </option>
                      <option value="none" name="country" selected>
                        None
                      </option>
                    </select>
                  </div>

                  <div className="txtField">
                    <label className="labelField" htmlFor="code">
                      Code
                    </label>
                    <br />
                    <input
                      className="inputField"
                      type="text"
                      placeholder="PIN"
                      pattern="^[0-9]{6}$"
                      value={code}
                      onChange={changeCode}
                      required
                    />
                  </div>

                  <div className="txtField">
                  <label className="labelField" htmlFor="signature">
                      Signature
                  </label>
                  <br /> 
                    <input
                      className="inputField"
                      type="file"
                      onChange={saveSignature}
                      required
                    />
                </div>
                </div>
              </div>

              <h1 className="heading1">Educational Details</h1>
              <div className="fieldCntnr1">
                  
                <div className="txtField">
                <label className="labelField" htmlFor="eduType">
                      Education Type
                    </label>
                    <br />
                    <input
                      className="inputField"
                      type="text"
                      placeholder="Education"
                      value={eduType}
                      onChange={changeEducation}
                      required
                    />
                </div>

                <div className="txtField">
                <label className="labelField" htmlFor="eduType">
                      Name of College
                    </label>
                    <br />
                    <input
                      className="inputField"
                      type="text"
                      placeholder="College"
                      value={clgName}
                      onChange={changeCollege}
                      required
                    />
                </div>

                <div className="txtField">
                <label className="labelField" htmlFor="eduType">
                      Year of Passing
                    </label>
                    <br />
                    <input
                      className="inputField"
                      type="text"
                      placeholder="YOP"
                      value={yop}
                      onChange={changeYop}
                      required
                    />
                </div>

                <div className="txtField">
                  <label className="labelField" htmlFor="cgpa">
                    % in CGPA
                  </label>
                  <br />
                  <input
                    className="inputField"
                    type="number"
                    placeholder="CGPA"
                    value={cgpa}
                    onChange={changeCgpa}
                    required
                  />
                </div>


                <div className="plusIcon">
                <button onClick={changeEduDetails} type="button" className="plusBtn"><HiPlus className="hi"/></button>
                </div> 
                </div>

              <h1 className="heading1">Experience</h1>
              <div className="fieldCntnr2">
                <h2 className="heading2">Working-Experience</h2>
                <div className="txtField">
                  <label className="labelField" htmlFor="project-title">
                    Project-Title
                  </label>
                  <br />
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Course"
                    value={project}
                    onChange={changeProject}
                    required
                  />
                </div>
                <div className="txtField">
                  <label className="labelField" htmlFor="duration">
                    Duration
                  </label>
                  <br />
                  <input
                    className="inputField"
                    type="text"
                    placeholder="Duration"
                    value={duration}
                    onChange={changeDuration}
                    required
                  />
                </div>
                <div className="txtField">
                  <label className="labelField" htmlFor="description">
                    Description
                  </label>
                  <br />
                  <textarea
                    rows="1"
                    cols="1"
                    className="inputField"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={changeDescription}
                    required
                  />
                </div>
              </div>

              <div className="btn">
                <button type="submit" className="generateBtn">
                  Generate Resume
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      {resumeSubmitted && (
        <div className="printsection">
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div ref={componentRef} className="card">
                  <div className="float__start">
                    <h3 className="card-title"><span className="resume_title">{name} RESUME</span></h3>
                  </div>
                  <hr />
                  <div className="printsection">
                    <GenerateForm details={details} educationalDetails={eduDetails}/>
                  </div>
                </div>
                <button
                  onClick={handlePrint}
                  className="print_button"
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
