/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import { v4 } from 'uuid';
import Table from './components/Table';
import Form from './components/Form';
import UpdateInput from './components/UpdateInput';
import './App.css';




const initialData = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  company: '',
  dob: '',
  password: '',
  gender: '',
  image:'',
  role:'Frontend Developer',
  confirm: '',
  imageName:''
};

export default function App() {
  const [start, setStart] = useState(initialData);
  const [editButton, setEditButton] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [userInfo, setUserInfo] = useState([])
  const [isObject, setIsObject] = useState({});
  const [tncChecked, setTncChecked] = useState(false)
  const [visible, setVisible] = useState(false)
  const[deleteDisable, setDeleteDisable] = useState(false)
  const[deleteId, setDeleteId] = useState(null)
  const[isDeleteClicked, setIsDeleteClicked] = useState(false)

  // for reset of page and cancel functionality
  const onEventClicked = (e) => {
    setFormData(start);
  };

  /*Edit button on Table in Table.js editId */
  const handleEditInput = (id) => {
    const index = userInfo.findIndex((item) => item._id === id);
    setEditButton(true);
    setIsObject(userInfo[index]);
    setFormError({});
    setFormData(start);
  };
  

  const postData = async() => {
    const url = 'http://localhost:5000/users'
    // const formInfo = new FormData()
    // Object.key(formData).forEach(key => formInfo.append(key, formData[key]))
    // data.append("avatar" , formData)
        try {
          if(formData.firstname && formData.lastname && 
            formData.email && formData.company 
            && formData.phone && formData.dob && 
            formData.password && formData.confirm && formData.image){
            
            const response =  await axios.post(url, formData)
          setTncChecked(false)
          fetchData()
          }
        } catch (error) {
          console.log(error.message)
        }
      }



const fetchData = async() => {
  const url = 'http://localhost:5000/users'
 try {
  const response =  await axios.get(url)
  .then((response) => {
    setUserInfo(response.data)
  })
  .catch((error) => {
    console.log(error.message)
  })

} catch (error) {
  console.log(error.message)
}}




  /* To empty the row items in table and to know whether error object is empty or not we use useEffect */
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit && tncChecked) {
      setFormData(start);
      postData()   
    }
    fetchData()
  },[formError]);
  


  /* for Delete button which is in Table.js */
  // to handle delete functionaliy in form
  const handleDeletTr = async(detailsId) => {
    const url = "http://localhost:5000/users"
    // if(isObject._id === detailsId){
    //   setDeleteDisable(true)
    // }else{
    //   setDeleteDisable(false)
    
    // }
    setDeleteId(detailsId)
      setIsDeleteClicked(true)
 
    try {
      const response = await axios.delete(`${url}/${detailsId}`)
      fetchData()
    } catch (error) {
      console.log(error.message)
    }
  };


  /* onChange for input values in Form.js */
  const handleFirstName = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, id: v4() });
  };
  
 
  /* this is a function which will check id while updating the form and this will pass as props to the UpdatedInput component*/
  const updatedEmployee = async(id, updatedEmployee) => {
    const url="http://localhost:5000/users"
    try {
      const response = await axios.patch(`${url}/${id}`, updatedEmployee)
      console.log(response)
      fetchData()
      
    }catch(error){
      console.log(error.message)
    }
    setEditButton(false);
  };


  /* on submit for Register in Form.js */
  const onHandlerSubmit = (e) => {
    e.preventDefault();
    setFormError(validation(formData));
    setIsSubmit(true);
    
  };


  const onEditCancelClicked = (value) => {
    setEditButton(false);
  };


  /*Validation part for entire Form */
  const validation = (values) => {
    const error = {};
    const emailExists = userInfo.find((eachItem) => eachItem.email === formData.email)
    const phoneExists = userInfo.find((eachItem) => eachItem.phone === formData.phone)
          

    if (!values.firstname) {
      error.firstname = 'First Name is required';
    }

    if (!values.lastname) {
      error.lastname = 'Last Name is required';
    }

    if (!values.email) {
      error.email = 'Email is required';
    }
    if(emailExists){
      error.email = 'Email already exists'
    }

    if (!values.phone) {
      error.phone = 'Phone Number is required';
    } else if (values.phone.length > 10) {
      error.phone = 'Please Enter Valid Phone Number without +91';
    }
    if(phoneExists){
      error.phone = "Phone number already exists"
    }

    if (!values.company) {
      error.company = 'Company Name is required';
    }
    if(!values.role){
      error.role = 'Role is required';
    }

    if (!values.gender) {
      error.gender = 'Gender is required';
    }

    if (!values.dob) {
      error.dob = 'Date Of Birth is required';
    }

    if (!values.password) {
      error.password = 'Password is required';
    } else if (values.password.length < 6) {
      error.password = 'Password is too short';
    }
    if (!values.confirm) {
      error.confirm = 'Confirm Password is required';
    }
    if (values.password !== values.confirm) {
      error.confirm = 'Your password and confirmation password do not match';
    }

    return error;
  };



  /* out of two components one is triggered every time depending up on the edit is clicked and update is clicked */
  return (
    <div className="formDivContainer">
    <div className="wrapperContainer">
      {/* <h1 className="formHeading">Reactive Form</h1> */}
      <div className="formInformationContainer">
        <>
          {editButton === true ? (
            <UpdateInput
              key={isObject._id}
              updatedFormValues={isObject}
              updatedEmployee={updatedEmployee}
              onEditCancelClicked={onEditCancelClicked}
              userInfo = {userInfo}
              setDeleteDisable={setDeleteDisable}
            />
          ) : (
            <Form
              onHandlerSubmit={onHandlerSubmit}
              formData={formData}
              handleFirstName={handleFirstName}
              formError={formError}
              onEventClicked={onEventClicked}
              setFormData={setFormData}
              setTncChecked={setTncChecked}
              tncChecked={tncChecked}
              visible={visible}
              isDeleteClicked={isDeleteClicked}
              deleteId={deleteId}
              userInfo={userInfo}
            />
          )}
        </>
      </div>
      <div className="tableInformationContainer">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Role</th>
              <th>DOB</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((eachItem, index) => (
              <Table
                key={eachItem._id}
                details={eachItem}
                handleDeletTr={handleDeletTr}
                handleEditInput={handleEditInput}
                deleteDisable={deleteDisable}
                setDeleteDisable={setDeleteDisable}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>

  );
}
