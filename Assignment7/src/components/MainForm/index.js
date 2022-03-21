import React, { useState } from "react"
import './index.css'

function MainForm({ formValues,setFormValues, handleChange, formErrors, handleSubmit, imageSelected, setImageSelected, cancelRegistration, checkBox1, checkBox2, setCheckBox2, setCheckBox1 }) {

  // const [checkBox1, setCheckBox1] = useState(false)
  // const [checkBox2, setCheckBox2] = useState(false)



  // const check1 = () => {
  //   setCheckBox1(!checkBox1)
  // }

  // const check2 = () => {
  //   setCheckBox2(!checkBox2)
  // }
  
  const setMobileFun = (e) => {
    const num = e.target.value
    if((Number(num) && num.length <= 10)|| num === ""){
      setFormValues({...formValues, phone: num})
    }
  }

  const postImage = async (e) => {
    const formData = new FormData()
    formData.append("file", e.target.files[0])
    formData.append("upload_preset", "rgd6001")
    const response = await fetch("https://api.cloudinary.com/v1_1/rgdm6001/upload",
    {
      method: "POST",
      body: formData
    }
  )
  try{
    const img = await response.json()
    setFormValues({...formValues, image: img.url})
  }
  catch(e){
    console.log(e.message)
  }
  }


  const displayButton = () => {
    console.log(formValues.fname && formValues.lname)
    let val;
    if (!(formValues.fname && formValues.lname && formValues.email && formValues.phone && formValues.company
      && formValues.gender && formValues.designation && formValues.date && formValues.password && formValues.confirmPassword
      && checkBox1 && checkBox2)) {
  
      return val = true

    }
    else {
      return val = false
    }
    return val
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formDiv">
        <label className="formLabel" htmlFor="fName">
          First Name
        </label>
        <div className="divSpanC">
          <input
            className="formInput"
            id="fName"
            type="text"
            name="fname"
            placeholder="Enter your Firstname"
            value={formValues.fname}
            onChange={handleChange}
          />
          <span className="errorMessage">{formErrors.fname}</span>
        </div>
      </div>

      <div className="formDiv">
        <label className="formLabel" htmlFor="lName">
          Last Name
        </label>
        <div className="divSpanC">
          <input
            className="formInput"
            id="lName"
            type="text"
            name="lname"
            placeholder="Enter your Lastname"
            value={formValues.lname}
            onChange={handleChange}
          />
          <span className="errorMessage">{formErrors.lname}</span>
        </div>
      </div>

      <div className="formDiv">
        <label className="formLabel" htmlFor="email">
          Email
        </label>
        <div className="divSpanC">
          <input
            className="formInput"
            id="email"
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <span className="errorMessage">{formErrors.email}</span>
        </div>
      </div>

      <div className="formDiv">
        <label className="formLabel" htmlFor="phone">
          Phone
        </label>
        <div className="divSpanC">
          <input
            className="formInput"
            id="phone"
            type="text"
            name="phone"
            placeholder="Enter your Phone Number"
            value={formValues.phone}
            onChange={setMobileFun}
          />
          <span className="errorMessage">{formErrors.phone}</span>
        </div>
      </div>
      <div className="formDiv">
        <label className="formLabel" htmlFor="company">
          Company
        </label>
        <div className="divSpanC">
          <input
            className="formInput"
            id="company"
            type="text"
            name="company"
            placeholder="Enter your Company"
            value={formValues.company}
            onChange={handleChange}
          />
          <span className="errorMessage">{formErrors.company}</span>
        </div>
      </div>

      <div className="formRadioDiv">
        <div>
          <label className="formLabel" htmlFor="gender">
            Gender
          </label>
        </div>
        <div className="divSpanC">
          <div className="radioDiv">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formValues.gender === "male"}
            />
            <label htmlFor="male" className="maleB">
              Male
            </label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formValues.gender === "female"}
            />
            <label htmlFor="female" className="maleB">
              Female
            </label>
          </div>
          <span className="genderErrorMessage">{formErrors.gender}</span>
        </div>
      </div>
      <div className="formDiv">
        <label className="formLabel" htmlFor="state">
          Designation
        </label>
        <div className="divSpanC" style={{ marginBottom: "10px" }}>
          <select className="selectInput" onChange={handleChange} id="state" name="designation" value={formValues.designation}>
            <option defaultValue="selected">Select your option</option>
            <option value='Frontend Developer' >Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
          <span className="errorMessage">{formErrors.designation}</span>
        </div>
      </div>

      <div className="formDiv">
        <label className="formLabel" htmlFor="date">
          Date of Birth
        </label>
        <div className="divSpanC">
          <input
            className="formInput"
            id="date"
            type="date"
            name="date"
            value={formValues.date}
            onChange={handleChange}
          />
          <span className="errorMessage">{formErrors.date}</span>
        </div>
      </div>

      <div className="formDiv">
        <label className="formLabel" htmlFor="password">
          Password
        </label>
        <div className="divSpanC">
          <input
            className="formInput"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <span className="errorMessage">{formErrors.password}</span>
        </div>
      </div>
      <div className="formDiv">
        <label className="formLabel" htmlFor="cpassword">
          Confirm Password
        </label>

        <div className="divSpanC">
          <input
            className="formInput"
            id="cpassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your Password"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          <span className="errorMessage">{formErrors.confirmPassword}</span>
        </div>

      </div>
      <div className="formDiv" style={{ marginTop: "15px", marginBottom: "15px" }}>
        <label className="formLabel">Insert an Image</label>
        <input  name="image" onChange={postImage} className="formInput" accept="image/jpeg image/png" type="file" />
      </div>
      <div className="termsDiv" style={{ marginTop: "20px" }}>
        <input onChange={() => setCheckBox1(!checkBox1)}
          checked={checkBox1} value="Terms" name="Terms" type="checkbox" id="tandD" className="checkboxInput" />
        <label htmlFor="tandD" className="formCheckBoxLabel">I accept the Terms and Conditions</label>
        <span className="errorMessage">{formErrors.checkBox1}</span>
      </div>
      <div className="termsDiv" style={{ marginTop: "10 px", marginBottom: "15px" }}>
        <input value="Policy" onChange={() => setCheckBox2(!checkBox2)} checked={checkBox2} name="Policy" type="checkbox" id="policy" className="checkboxInput" />
        <label htmlFor="policy" className="formCheckBoxLabel">I agree to the Privacy Policy</label>
        <span className="errorMessage">{formErrors.checkBox2}</span>
      </div>
      <div className="formButtonDiv">
        <button className="formRegister" disabled={displayButton()} type="submit" >
          Register
        </button>

        <button
          className="formRegister"
          type="reset"
          onClick={cancelRegistration}
        >
          Cancel
        </button>
      </div>
    </form>

  )
}

export default MainForm 