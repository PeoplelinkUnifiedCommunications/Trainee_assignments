import React, { useState, useEffect } from 'react';
// import RegisterForm from './RegisterForm';
import './style.css';
import Table from './Table';
import Form from './Form';

import { v4 } from 'uuid'
import EditForm from './EditForm';

const initialData = [
  {
    id: v4(),
    firstName: 'Pavan',
    lastName: 'Rayala',
    email: 'p@gmail.com',
    phone: '9951598640',
    company: 'Peoplelink',
    dob: '1997-06-21',
    password: 'pavan123',
    confirmPassword: 'pavan123',
  },
  {
    id: v4(),
    firstName: 'Chinnababu',
    lastName: 'Kasirinapu',
    email: 'c@gmail.com',
    phone: '9988776655',
    company: 'Peoplelink',
    dob: '1997-06-22',
    password: 'chinna123',
    confirmPassword: 'chinna123',
  },
];

const userData = {
  id: v4(),
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  gender: '',
  dob: '',
  password: '',
  confirmPassword: '',
};

const resetDetails = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  gender: '',
  dob: '',
  password: '',
  confirmPassword: '',
};


export default function App() {

  const [isSubmit, setIsSubmit] = useState(false);

  const [primeData, setPrimeData] = useState(initialData);

  const [userDetails, setUserDetails] = useState(userData);
  const [formError, setFormError] = useState({});

  const [editObject, setEditObject] = useState({})
  const [editClicked, setEditClicked] = useState(false)

  useEffect(() => {
    const newData = [...primeData, userDetails];
    if (Object.keys(formError).length === 0 && isSubmit) {
      setUserDetails(resetDetails);
      setPrimeData(newData);
    }
  }, [formError]);

  const userInput = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    setFormError(validateError(userDetails));
    setIsSubmit(true);
  };

  const cancelFn = (userData) => {
    setUserDetails(resetDetails);
    setFormError('');
  };

  const editFormCancelFunction = () => {
    setEditClicked(false)
  }

  const deleteFunction = (id) => {
    const newData = [...primeData];
    const index = primeData.findIndex((data) => data.id === id);
    newData.splice(index, 1);
    setPrimeData(newData);
  };

  const updateFunction = (id) => {
    const index = primeData.findIndex((data) => data.id === id);
    setEditObject(primeData[index]);
    setEditClicked(true)
  };

  const updatedEmployee = (id, updatedEmployee) => {
    setPrimeData(primeData.map((eachItem) => eachItem.id === id ? updatedEmployee: eachItem))
    setEditClicked(false);
  }

  const validateError = (inputs) => {
    const error = {};

    if (inputs.firstName === '') {
      error.firstName = '* First Name required';
    }

    if (inputs.lastName === '') {
      error.lastName = '* Last Name required';
    }

    if (inputs.email === '') {
      error.email = '* Email required';
    }

    if (inputs.phone === '') {
      error.phone = '* Phone Number required';
    }

    if (inputs.company === '') {
      error.company = '* Company Name required';
    }

    if (inputs.gender === '') {
      error.gender = '* Gender required';
    }

    if (inputs.dob === '') {
      error.dob = '* DOB required';
    }

    if (inputs.password === '') {
      error.password = '* Password required';
    }

    if (inputs.confirmPassword === '') {
      error.confirmPassword = '* Confirm Password required';
    }

    if (inputs.password !== inputs.confirmPassword) {
      error.passwordMatching = "Password doesn't match";
    }
    return error;
  };


  return (
    <div className="mainContainer">

      {editClicked ? <EditForm updatedObject={editObject} updatedEmployee={updatedEmployee} editFormCancelFunction={editFormCancelFunction}/> : <Form userDetails={userDetails} userInput={userInput} formError={formError} submit={submit} cancelFn={cancelFn}/>}
      
      <div>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>DOB</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {primeData.map(eachData => (
              <Table key={eachData.id} details={eachData} deleteFunction={deleteFunction} updateFunction={updateFunction}/>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
