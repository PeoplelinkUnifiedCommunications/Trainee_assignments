import React, { useState, useEffect } from "react";

import "./index.css"

import FormCom from "./form"
import EditCom from "./edit";
import TableCom from "./table";

import { v4 } from 'uuid'

const initialData = [
  {
    id: v4(),
    firstName: 'Shan',
    lastName: 'Biswas',
    email: 'shan@gmail.com',
    phone: '9603139421',
    company: 'Peoplelink',
    dob: '06-04-1999',
    password: 'shan321',
    confirmPassword: 'shan321'
  },
  {
    id: v4(),
    firstName: 'Chinna',
    lastName: 'Kasirinapu',
    email: 'chinna@gmail.com',
    phone: '9988776655',
    company: 'Peoplelink',
    dob: '22-06-1997',
    password: 'chinna321',
    confirmPassword: 'chinna321'
  }
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
  confirmPassword: ''
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
  confirmPassword: ''
};


function App() {

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

  const editCancel = () => {
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
    setPrimeData(primeData.map((eachItem) => eachItem.id === id ? updatedEmployee : eachItem))
    setEditClicked(false);
  };

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
    <div className="base">
      <div className="main">
        {editClicked ? <EditCom updatedObject={editObject} updatedEmployee={updatedEmployee} editCancel={editCancel} /> : <FormCom userDetails={userDetails} userInput={userInput} formError={formError} submit={submit} cancelFn={cancelFn} />}
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Dob</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {primeData.map(eachData => (
              <TableCom key={eachData.id} details={eachData} deleteFunction={deleteFunction} updateFunction={updateFunction} />
            ))}
          </tbody>
        </table>


      </div>

    </div>
  );
}

export default App;
