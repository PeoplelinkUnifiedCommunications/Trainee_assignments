import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import MainForm from "../MainForm";
import EditComponent from "../Edit";
import Table from "../TableData";
import axios from "axios";
import "./index.css";

export default function ReactForm() {

  const resetUserDetails = {
    id: v4(),
    fname: "",
    lname: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    gender: "",
    dob: "",
    password: "",
    confirmPassword: "",
    profile: "",
  };

  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [editData, setEditData] = useState({});

  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);

  const getDetails = () => {
    const response = axios
      .get("http://localhost:8000/")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchDetails = async () => {
    try {
      const dbResponse = await axios.post("http://localhost:8000/", formValues);
      setCheckBox1(false);
      setCheckBox2(false);

    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    const newData = [...data, formValues];
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      setFormValues(resetUserDetails);
      fetchDetails();
      return setData(newData);
    }
    getDetails();
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
    setFormErrors("");
  };

  const updatedEmployee = (_id, updatedEmployee) => {
    setData(
      data.map((eachItem) =>
        eachItem._id === _id ? updatedEmployee : eachItem
      )
    );
    setIsEdit(false);

    try {
      const updateDetails = axios.patch(
        `http://localhost:8000/${_id}`,
        updatedEmployee
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editFunction = (_id) => {
    setIsEdit(true);
    const indexE = data.findIndex((item) => item._id === _id);
    setEditData(data[indexE]);
  };

  const deleteFunction = (_id) => {
    const newData = [...data];
    const index = data.findIndex((item) => item._id === _id);
    newData.splice(index, 1);
    setData(newData);

    try {
      const updateUserDetails = axios.delete(`http://localhost:8000/${_id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,20})$/;

    if (!values.fname) {
      errors.fname = "Firstname is required!";
    }

    if (!values.lname) {
      errors.lname = "Lastname is required!";
    }
    
    data.filter((each) => {
      if (each.email === formValues.email) {
        errors.email = "Frequently used email";
      }
    });

    if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }

    if (!values.email) {
      errors.email = "E-mail is required!";
    }

    data.filter((each) => {
      if (each.phone === formValues.phone) {
        errors.phone = "Frequently used number";
      }
    });

    if (!values.phone) {
      errors.phone = "Phone Number is required!";
    }

    if (!values.company) {
      errors.company = "Company is required!";
    }

    if (!values.designation) {
      errors.designation = "Designation is required!";
    }

    if (!values.gender) {
      errors.gender = "Gender is required!";
    }

    if (!values.dob) {
      errors.dob = "Date of Birth is required!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required!";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords are not matched.";
    }
    return errors;
  };

  return (
    <>
      {isEdit ? (
        <EditComponent
          editData={editData}
          updatedEmployee={updatedEmployee}
          formErrors={formErrors}
        />
      ) : (
        <MainForm
          formValues={formValues}
          setFormValues={setFormValues}
          handleChange={handleChange}
          formErrors={formErrors}
          handleSubmit={handleSubmit}
          cancelRegistration={cancelRegistration}
          checkBox1={checkBox1}
          setCheckBox1={setCheckBox1}
          checkBox2={checkBox2}
          setCheckBox2={setCheckBox2}
        />
      )}
      <div>
        <center>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Designation</th>
                <th>DOB</th>
                <th>Profile</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((eachItem) => (
                <Table
                  key={eachItem.id}
                  eachItem={eachItem}
                  deleteFunction={deleteFunction}
                  editFunction={editFunction}
                />
              ))}
            </tbody>
          </table>
        </center>
      </div>
    </>
  );
}