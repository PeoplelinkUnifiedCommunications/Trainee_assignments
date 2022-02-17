/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect, Fragment } from 'react';
import { v4 } from 'uuid';
import Table from './components/Table';
import Form from './components/Form';
import UpdateInput from './components/UpdateInput';
import './App.css';

const intialArray = [
  {
    id: v4(),
    firstname: 'Akhil',
    lastname: 'Kumar',
    email: 'akhil@gmail.com',
    phone: '9959479459',
    company: 'BuzzBoard',
    gender: 'male',
    password: 'akhil1',
    dob: '1991-03-14',
    confirm: 'akhil1',
  },

  {
    id: v4(),
    firstname: 'Rahul',
    lastname: 'Dev',
    email: 'rahul@gmail.com',
    phone: '8923193993',
    company: 'Infosys',
    gender: 'male',
    password: 'rahul1',
    dob: '1990-07-09',
    confirm: 'rahul1',
  },

  {
    id: v4(),
    firstname: 'Sampath',
    lastname: 'Kumar',
    email: 'sam@gmail.com',
    phone: '9703037744',
    company: 'Cognizant',
    gender: 'male',
    dob: '1989-06-27',
    password: 'Sam123',
    confirm: 'Sam123',
  },
];

const initialData = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  company: '',
  dob: '',
  password: '',
  gender: '',
  confirm: '',
};

export default function App() {
  const [start, setStart] = useState(initialData);
  const [data, setData] = useState(intialArray);
  const [editid, setEditId] = useState(null);
  const [editButton, setEditButton] = useState(false);
  // const [errorDisplay, setErrorDisplay] = useState(false);
  // const [index, setIndex] = useState(null);
  const [formData, setFormData] = useState(initialData);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  // const [editData, setEditData] = useState({});
  const [editFormData, setEditFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    company: '',
    dob: '',
    password: '',
    gender: '',
    confirm: '',
  });
  const [isObject, setIsObject] = useState({});

  // for reset of page and cancel functionality
  const onEventClicked = (e) => {
    setFormData(start);
  };

  /*Edit button on Table in Table.js editId */
  const handleEditInput = (id) => {
    // const newContacts = [...data];

    const index = data.findIndex((item) => item.id === id);
    // setIndex(index);
    setEditId(data[index].id);
    setEditButton(true);
    setIsObject(data[index]);
    setFormError({});
    setFormData(start);
  };

  /* To empty the row items in table and to know whether error object is empty or not we use useEffect */
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      setFormData(start);
      if (formData.id !== '') {
        const newContact = [...data, formData];
        setData(newContact);
      } else {
        const newContact = [...data];
        setData(newContact);
      }
    }
  }, [formError]);

  /* for Delete button which is in Table.js */

  const handleDeletTr = (detailsId) => {
    const newContacts = [...data];

    const index = data.findIndex((item) => item.id === detailsId);

    newContacts.splice(index, 1);
    setData(newContacts);
  };

  /* onChange for input values in Form.js */

  const handleFirstName = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, id: v4() });
  };

  const onEventEditClicked = (e) => {
    setEditFormData(start);
  };

  /* this is a function which will check id while updating the form and this will pass as props to the UpdatedInput component*/

  const updatedEmployee = (id, updatedEmployee) => {
    setData(
      data.map((eachItem) => (eachItem.id === id ? updatedEmployee : eachItem))
    );

    console.log(Object.keys(formError).length);
    setEditFormData(start);
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

  /* onChange for update Values in UpdateInput.js */

  const onHandlerEditInput = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value, id: editid });
  };

  /*Validation part for entire Form */

  const validation = (values) => {
    const error = {};

    if (!values.firstname) {
      error.firstname = 'First Name is required';
    }

    if (!values.lastname) {
      error.lastname = 'Last Name is required';
    }

    if (!values.email) {
      error.email = 'Email is required';
    }

    if (!values.phone) {
      error.phone = 'Phone Number is required';
    } else if (values.phone.length > 10) {
      error.phone = 'Please Enter Valid Phone Number without +91';
    }

    if (!values.company) {
      error.company = 'Company Name is required';
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
    <div className="wrapperContainer">
      <h1 className="formHeading">Reactive Form</h1>
      <div className="formInformationContainer">
        <>
          {editButton === true ? (
            <UpdateInput
              // updatedFormValues={editFormData}
              // formError = {formError}
              updatedFormValues={isObject}
              // onHandlerEditInput={onHandlerEditInput}
              // onHandlerUpdate={onHandlerUpdate}
              updatedEmployee={updatedEmployee}
              onEditCancelClicked={onEditCancelClicked}
              // onEventEditClicked={onEventEditClicked}
            />
          ) : (
            <Form
              onHandlerSubmit={onHandlerSubmit}
              formData={formData}
              handleFirstName={handleFirstName}
              // handleBlur={handleBlur}
              formError={formError}
              onEventClicked={onEventClicked}
            />
          )}
        </>
      </div>
      <div className="tableInformationContainer">
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
            {data.map((eachItem, index) => (
              <Table
                key={eachItem.id}
                details={eachItem}
                handleDeletTr={handleDeletTr}
                handleEditInput={handleEditInput}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
