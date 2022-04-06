import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import Table from './Table';
import Form from './Form';

import EditForm from './EditForm';
import axios from 'axios'

const userData = {
  firstName: '',
  lastName: '',
  email: '',
  role: "",
  phone: '',
  company: '',
  gender: '',
  dob: '',
  password: '',
  confirmPassword: '',
  url: ''
};

const resetDetails = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
  phone: '',
  company: '',
  gender: '',
  dob: '',
  password: '',
  confirmPassword: '',
};


export default function App() {

  const [isSubmit, setIsSubmit] = useState(false);
  const [userDetails, setUserDetails] = useState(userData);
  const [formError, setFormError] = useState({});

  const [editObject, setEditObject] = useState({})
  const [editClicked, setEditClicked] = useState(false)

  const [userdetails, setUserdetails] = useState([])
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const getDetails = () => {
    const response = axios.get("http://localhost:8100/")
      .then((response) => {
        setUserdetails(response.data)
      }).catch((error) => console.log(error.message))
  }

  useEffect(() => {
    getDetails()
    if (Object.keys(formError).length === 0 && isSubmit) {
      // fetchDetails()
      setUserDetails(resetDetails);
      imagePathReset.current = ""
    }
  }, [isSubmit]);

  const userInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();

    const data = new FormData()
    data.append('firstName', userDetails.firstName)
    data.append('lastName', userDetails.lastName)
    data.append('email', userDetails.email)
    data.append('phone', userDetails.phone)
    data.append('gender', userDetails.gender)
    data.append('dob', userDetails.dob)
    data.append('company', userDetails.company)
    data.append('role', userDetails.role)
    data.append('password', userDetails.password)
    data.append('confirmPassword', userDetails.confirmPassword)
    data.append('url', userDetails.url)

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    const formDataResponse = await axios.post('http://localhost:8100/', data, config)
    console.log(formDataResponse)

    setFormError(validateError(userDetails));
    setIsSubmit(true);
  };


  const cancelFn = () => {
    setUserDetails(resetDetails);
    setFormError('');
  };

  const editFormCancelFunction = () => {
    setEditClicked(false)
    cancelFn()
  }

  const deleteFunction = async (_id) => {
    const newData = [...userdetails];
    const index = userdetails.findIndex((data) => data._id === _id);
    newData.splice(index, 1);

    try {
      const deleteResponse = await axios.delete(`http://localhost:8100/${_id}`)
      setUserDetails(resetDetails)
      getDetails()
    } catch (error) {
      console.log(error.message)
    }
  };

  const updateFunction = (_id) => {
    const index = userdetails.findIndex((data) => data._id === _id);
    setEditObject(userdetails[index]);
    setEditClicked(true)
    // getDetails()
    // console.log(userdetails)
  };

  const updatedEmployee = async (_id, updatedEmployee) => {
    setUserdetails(userdetails.map((eachItem) => eachItem._id === _id ? updatedEmployee : eachItem))
    setEditClicked(false);

    const updFormData = new FormData()
    updFormData.append('firstName', updatedEmployee.firstName)
    updFormData.append('lastName', updatedEmployee.lastName)
    updFormData.append('email', updatedEmployee.email)
    updFormData.append('phone', updatedEmployee.phone)
    updFormData.append('gender', updatedEmployee.gender)
    updFormData.append('dob', updatedEmployee.dob)
    updFormData.append('company', updatedEmployee.company)
    updFormData.append('role', updatedEmployee.role)
    updFormData.append('password', updatedEmployee.password)
    updFormData.append('confirmPassword', updatedEmployee.confirmPassword)
    updFormData.append('url', updatedEmployee.url)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    try {
      const updateDetail = await axios.patch(`http://localhost:8100/${_id}`, updFormData, config)
      getDetails()

    } catch (error) {
      console.log(error.message)
    }
  }

  const imagePathReset = useRef()

  const validateError = (inputs) => {
    const error = {};

    if (inputs.firstName === '') {
      error.firstName = '*First Name required';
    }

    if (inputs.lastName === '') {
      error.lastName = '*Last Name required';
    }

    if (inputs.email === '') {
      error.email = '*Email required';
    }

    userdetails.filter(each => {
      if (each.email === userDetails.email) {
        error.email = `Email id with ${userDetails.email} already exists`
      }
    })

    if (inputs.phone === '') {
      error.phone = '*Phone Number required';
    }

    userdetails.filter(each => {
      if (each.phone === userDetails.phone) {
        error.phone = `Mobile number already exists`
      }
    })

    if (inputs.company === '') {
      error.company = '*Company Name required';
    }

    if (inputs.gender === '') {
      error.gender = '*Gender required';
    }

    if (inputs.dob === '') {
      error.dob = '*DOB required';
    }

    if (inputs.role === '') {
      error.role = '*Select Option';
    }

    if (inputs.password === '') {
      error.password = '*Password required';
    }

    if (inputs.confirmPassword === '') {
      error.confirmPassword = '*Confirm Password required';
    }

    if (inputs.password !== inputs.confirmPassword) {
      error.passwordMatching = "Password doesn't match";
    }
    return error;
  };

  return (
    <div className="mainContainer">
      <div>
        {editClicked ? <EditForm
          key={editObject._id}
          userDetails={userDetails}
          updatedObject={editObject}
          updatedEmployee={updatedEmployee}
          editFormCancelFunction={editFormCancelFunction}
        />
          :
          <Form setCheck1={setCheck1}
            setCheck2={setCheck2}
            check1={check1}
            check2={check2}
            userDetails={userDetails}
            userInput={userInput}
            formError={formError}
            submit={submit}
            // imagePathReset={imagePathReset}
            cancelFn={cancelFn}
            setUserDetails={setUserDetails}
          />}
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Profile Pic</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>DOB</th>
              <th>Company</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {userdetails.map(eachData => (
              <Table key={eachData._id} details={eachData} deleteFunction={deleteFunction} updateFunction={updateFunction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}