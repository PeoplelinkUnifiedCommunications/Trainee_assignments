import React, { useEffect, useState } from 'react';

import axios from 'axios';
import EditComponent from '../EditComponent';
import MainForm from '../MainForm';
import TableDetails from '../TableDetails'
import './index.css';

const resetUserDetails = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  company: '',
  gender: '',
  designation: '',
  date: '',
  password: '',
  confirmPassword: '',
  image: ""
};
const initialData = {
  fname: '',
  lname: '',
  email: '',
  phone: '',
  company: '',
  gender: '',
  designation: '',
  date: '',
  password: '',
  confirmPassword: '',
  image: ""
};

export default function FormReact() {

  const [data, setData] = useState([]);
  const [formValues, setFormValues] = useState(initialData);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [details, setEditData] = useState({});

  const [checkBox1, setCheckBox1] = useState(false)
  const [checkBox2, setCheckBox2] = useState(false)
  const [imageSelected, setImageSelected] = useState("")


  // const [btn, setBtn] = useState(false)


  // const check1 = () => {f
  //   setCheckBox1(!checkBox1)
  // }

  // const check2 = () => {
  //   setCheckBox2(!checkBox2)
  // }
//   const postDetails = async () => {
//     const formData = new FormData()
//     formData.append("file", imageSelected)
//     formData.append("upload_preset", "rgd6001")
//     formData.append("cloud_name", "rgdm6001")
//     await axios.post("https://api.cloudinary.com/v1_1/rgdm6001/image/upload", formData)
     
//     .then((response) => {

//       setFormValues({...formValues, image: response.data.url})
//       console.log(response.data.url)
//     })
// }

  const getDetails = () => {
    const response = axios.get("http://localhost:5000/")
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      console.log(error.message)
    })
  }

const fetchDetails = async () => {
  try{
    const dbResponse = await axios.post("http://localhost:5000/", formValues)
    setCheckBox1(false)
    setCheckBox2(false)
  }
  catch(error){
    console.log(error.message)
  }
}

  useEffect(() => {
    const newData = [...data, formValues];
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      
      setFormValues(resetUserDetails);
      fetchDetails()
      return setData(newData);
    }
    getDetails()
  },[isSubmit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues)
  };
  



const cancelRegistration = () => {
    setFormValues(resetUserDetails);
    setIsEdit(false)
    setCheckBox1(false)
    setCheckBox2(false)
    setFormErrors('');
  };

  const updatedEmployee = (_id, updatedEmployee) => {
    setData(data.map((eachItem) => eachItem._id === _id ? updatedEmployee: eachItem))
    setFormErrors(validate(updatedEmployee))
    setIsEdit(false)

    try{
      const updateDetails = axios.patch(`http://localhost:5000/${_id}`, updatedEmployee)
    }
    catch(error){
      console.log(error.message)
    }
  }

  // console.log(data)


  const editFunction = (_id) => {
    setIsEdit(true)
    const indexE = data.findIndex((item) => item._id === _id);
    setEditData(data[indexE])

  }


  const deleteFunction = (_id) => {
    const newData = [...data];
    const index = data.findIndex((item) => item._id === _id);
    const deleteData = newData.splice(index, 1);
    setData(newData);
    
    try{
      axios.delete(`http://localhost:5000/${_id}`)
    }
    catch(error){
      console.log(error.message)
    }
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
    if(!values.designation){
      errors.designation = 'Select your Designation!'
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
    if(formValues.password !== formValues.confirmPassword){
      errors.confirmPassword = "Password must be Same";
    }
    data.filter((each) => {
      if(each.email === formValues.email){
        return errors.email = "This Email is already Taken"
      }
    })
    data.filter((each) => {
      if(each.phone === formValues.phone){
       return errors.phone = "This Number is already Taken"
      }
    })

    return errors;
  };



  return (
    <div className="formApp">
      <h3 className="formHead">Reactive Form</h3>

      {isEdit ? <EditComponent details={details}  updatedEmployee={updatedEmployee} isEdit={isEdit} formErrors={formErrors} setIsEdit={setIsEdit} isSubmit={isSubmit} cancelRegistration={cancelRegistration}/> : <MainForm setFormValues={setFormValues} formValues={formValues} handleChange={handleChange}  checkBox1={checkBox1} checkBox2={checkBox2} imageSelected={imageSelected} setImageSelected={setImageSelected} setCheckBox1={setCheckBox1} setCheckBox2={setCheckBox2} formErrors={formErrors} 
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
              <th>Designation</th>
              <th>DOB</th>
              <th>Image</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(eachItem =>
             <TableDetails key={eachItem._id} eachItem={eachItem} deleteFunction={deleteFunction} editFunction={editFunction}/>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
