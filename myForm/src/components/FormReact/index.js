import React, { useEffect, useState } from 'react';

import EditComponent from '../EditComponent';
import MainForm from '../MainForm';
import TableDetails from '../TableDetails'
import './index.css';
import { v4 } from 'uuid';

export default function FormReact() {
  const userData = [
    {
      id: v4(),
      fname: 'Deepika',
      lname: 'Ravella',
      email: 'deepika@gmail.com',
      phone: 9876543210,
      company: 'peopleLink',
      gender: "female",
      date: '1999-02-03',
      password: "******",
      confirmPassword: "******"
    },
    {
      id: v4(),
      fname: 'Mahesh',
      lname: 'Babu',
      email: 'mahesh@gmail.com',
      phone: 9876543210,
      company: 'TCS',
      gender: "male",
      date: '1998-06-01',
      password: "******",
      confirmPassword: "******"
    },
  ];

  const initialValues = {
    id: v4(),
    fname: '',
    lname: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    password: '',
    confirmPassword: '',
  };

  const resetUserDetails = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    password: '',
    confirmPassword: '',
  };

  const [data, setData] = useState(userData);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [details, setEditData] = useState({});

  useEffect(() => {
    const newData = [...data, formValues];
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(resetUserDetails);
      return setData(newData);
    }
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

const cancelRegistration = () => {
    setFormValues(resetUserDetails);
    setFormErrors('');
  };

  const updatedEmployee = (id, updatedEmployee) => {
    setData(data.map((eachItem) => eachItem.id === id ? updatedEmployee: eachItem))
    setFormErrors(validate(updatedEmployee))
    setIsEdit(false)
  }

  // console.log(data)


  const editFunction = (uId) => {
    setIsEdit(true)
    const indexE = data.findIndex((item) => item.id === uId);
    setEditData(data[indexE])

  }

  const deleteFunction = (uniqueId) => {
    const newData = [...data];
    const index = data.findIndex((item) => item.id === uniqueId);
    newData.splice(index, 1);
    setData(newData);
  };

 


  const validate = (values) => {
    const errors = {};
    if (!values.fname) {
      errors.fname = 'First Name is required!';
    }
    if (!values.lname) {
      errors.lname = 'Last Name is required!';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    }

    if (!values.phone) {
      errors.phone = 'Phone Number is required!';
    }

    if (!values.company) {
      errors.company = 'Company is required!';
    }
    if (!values.gender) {
      errors.gender = 'Gender is required!';
    }

    if (!values.date) {
      errors.date = 'Date of Birth is required!';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Password is required!';
    }

    return errors;
  };



  return (
    <div className="formApp">
      <h3 className="formHead">Reactive Form</h3>

      {isEdit ? <EditComponent details={details} updatedEmployee={updatedEmployee} formErrors={formErrors} isEdit={isEdit}/> : <MainForm  formValues={formValues} handleChange={handleChange}  formErrors={formErrors} 
      handleSubmit={handleSubmit} cancelRegistration={cancelRegistration}/> }
        <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>DOB</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(eachItem =>
             <TableDetails key={eachItem.id} eachItem={eachItem} deleteFunction={deleteFunction} editFunction={editFunction}/>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
