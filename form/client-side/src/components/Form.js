/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import Amplify, { Storage } from "aws-amplify";
// import awsconfig from '../aws-exports';
// import S3 from 'aws-s3';
// import { withAuthenticator } from '@aws-amplify/ui-react';


// Amplify.configure(awsconfig)


function Form({
  setTncChecked,
  formData,
  onHandlerSubmit,
  handleFirstName,
  formError,
  onEventClicked,
  setFormData,
  tncChecked,
  visible,
  isDeleteClicked,
  deleteId,
  userInfo

  
}) {
  const [isKeyDown, setIsKeyDown] = useState(false);
  const [nameList, setNameList] = useState([]);
  const [selectedFile, setSelectedFile] = useState("")
  const[imageUrl, setImageUrl] = useState("")
  const [number, setNumber] = useState('')

 const checking = () => {
   const{firstname,lastname,email,phone,company,role,dob,password,confirm,gender} = formData
   let value
   if(!(firstname && lastname && email && phone && company && role && dob && password && confirm && gender && tncChecked)){
     return value = true
   }else{
     value = false
   }
   return value
 }

  const onKeyDownHandler = (e) => {
    const { name } = e.target;
    setNameList([...new Set([...nameList, name])]);
    if (e.target.value) {
      setIsKeyDown(true);
    }
  };



  

  const onChangeNumber = (e) => {
    let mobile = e.target.value
    if(Number(mobile) || mobile === ''){
      return setFormData({...formData, phone:e.target.value})
    }
  }

  const imageHandler = async(e) => {
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "qucepa1n")
    // formInfo.append("cloud_name", "dd8iazjfo")

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dd8iazjfo/upload",
      {
        method: "POST",
        body:data
      }
    )
try{
  const File = await response.json()

    setFormData({...formData, image:File.url})
    console.log(File.url)
}catch(error){
  console.log(error.message)
}
   
  }

// const downloadUrl = async () => {
//   // Creates download url that expires in 5 minutes/ 300 seconds
//   const downloadUrl = await Storage.get();
//   window.location.href = downloadUrl
// }

// const imageHandler = async(e) => {
//   const files = e.target.files[0]
//   const name = files.name
  
//   try {
//      await Storage.put(name, files, {
//       level: 'private',
//       contentType: 'image/jpg'
//     })
    
//     const url = await Storage.get(name, {level:'private'})
//     setFormData({...formData, image: url, imageName:name})

//   }
//   catch(error){
//     console.log(error)
//   }
// }







  useEffect(async() => {
    if (isKeyDown === true) {
      nameList.map((eachItem) => {
        formError[eachItem] = '';
      });
    }
    // if(isDeleteClicked){
    //   const userToDelete = userInfo.find((eachItem) => eachItem._id === deleteId)
    //   try {
    //     await Storage.remove(`private/ap-south-1:9c0f650c-d72e-4e5e-9f11-a4da95b2f4ba/${userToDelete.imageName}`, { level: 'private' })
    //   } catch (error) {
    //     console.log(error.message)
    //   }
    // }
  }, [formData]);

  console.log(userInfo)
  



  return (
    <form onSubmit={onHandlerSubmit}>
      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="firstNameInput"
            placeholder="Enter First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            // autoComplete='new-firstname'
            // onBlur={onBlurHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.firstname}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="firstNameInput"
            placeholder="Enter Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.lastname}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="firstNameInput"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            autoComplete='username'
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.email}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        {/* <div className="formContainer">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            className="firstNameInput"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
          />
        </div> */}
        <div className="formContainer">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            className="firstNameInput"
            placeholder="Enter Your Phone Number"
            name="phone"
            value={formData.phone}
            onChange={onChangeNumber}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.phone}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            className="firstNameInput"
            placeholder="Enter Company Name"
            name="company"
            value={formData.company}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.company}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="role">Role</label>
          <select name="role" id="role" value={formData.role} onChange={handleFirstName} className="firstNameInput">
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
          </select>
        </div>
        {/* <div className="errorMessageContainer">
          <p>{formError.role}</p>
        </div> */}
      </div>

      <div className="formwrappedContainer">
        <div className="genderInformationContainer formContainer">
          <label>Gender</label>
          <div className="radioInformation">
            <div>
              <input
                id="male"
                type="radio"
                name="gender"
                value="male"
                onChange={handleFirstName}
                checked={formData.gender === 'male'}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input
                id="female"
                type="radio"
                name="gender"
                value="female"
                onChange={handleFirstName}
                checked={formData.gender === 'female'}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className="errorMessageContainer">
          <p>{formError.gender}</p>
        </div>
      </div>
      {/* gender element */}

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="dob">DOB</label>
          <input
            type="date"
            id="dob"
            className="firstNameInput"
            name="dob"
            value={formData.dob}
            onChange={handleFirstName}
            // required pattern="\d{2}-\d{2}-\d{4}"
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.dob}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="firstNameInput"
            placeholder="Enter Your Password"
            name="password"
            value={formData.password}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            autoComplete='new-password'
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.password}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="firstNameInput"
            placeholder="Enter Confirm Password"
            name="confirm"
            value={formData.confirm}
            onChange={handleFirstName}
            onKeyDown={onKeyDownHandler}
            autoComplete='new-confirm'
          />
        </div>
        <div className="errorMessageContainer">
          <p>{formError.confirm}</p>
        </div>
      </div>

      <div className="formwrappedContainer">
        <div className="formContainer">
          <label htmlFor='uploadFile'>Profile Pic</label>
          <input type="file" id="uploadFile" name="avatar" accept='image/png, image/jpeg'  onChange={imageHandler}/>
        </div>
      </div>
      
      <div className="formwrappedContainer">
        <div>
          <input type="checkbox" id="checkbox" name="checkbox" checked={tncChecked} onChange={() => setTncChecked(!tncChecked)}/>
          <label htmlFor="checkbox">I hereby confirm that the above information is true</label>
        </div> 
      </div>

      <div className="buttonContainer">
        <button type="submit" disabled={checking()}>Register</button>
        <button type="button" onClick={onEventClicked}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default (Form);
