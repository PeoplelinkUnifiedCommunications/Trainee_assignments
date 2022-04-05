import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Login from "./Components/login";
import Edit from "./Components/edit";
import Table from "./Components/Table";

import "./index.css"

const tableData = { name: "", email: "", phone: "", dob: "", role: "Frontend", password: "", conform: "", imgUrl: "" }

const resetData = { name: "", email: "", phone: "", dob: "", role: "Frontend", password: "", conform: "", imgUrl: "" }


function App() {
  const [userData, setUserData] = useState([])

  const [formData, setFormData] = useState(tableData)

  const [validate, setValidate] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)

  const [editObj, setEditObj] = useState({})

  const [onEdit, setOnEdit] = useState(false)

  const [accept1, setAccept1] = useState(false)

  const [agree1, setAgree1] = useState(false)

  const inputFileReset = useRef()

  const details = async () => {
    const response = await axios.get("http://localhost:8001")
      .then((response) => {
        setUserData(response.data)
        // console.log(response)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const updateForm = async (_id, updatedDetails) => {
    console.log(updatedDetails)
    setUserData(userData.map((m) => m._id === _id ? updatedDetails : m))

    const editDetails = new FormData()

    editDetails.append("name", updatedDetails.name)
    editDetails.append("email", updatedDetails.email)
    editDetails.append("phone", updatedDetails.phone)
    editDetails.append("dob", updatedDetails.dob)
    editDetails.append("role", updatedDetails.role)
    editDetails.append("password", updatedDetails.password)
    editDetails.append("conform", updatedDetails.conform)
    editDetails.append("imgUrl", updatedDetails.imageUrl)


    const editConfig = {
      headers: { 'content-type': 'multipart/form-data' }

    }
    try {
      // console.log(userData)
      const response = await axios.patch(`http://localhost:8001/${_id}`, editDetails, editConfig)
      // console.log(response)
      details()
      setOnEdit(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const detailsPost = async () => {

    const newDetails = new FormData()

    newDetails.append("name", formData.name)
    newDetails.append("email", formData.email)
    newDetails.append("phone", formData.phone)
    newDetails.append("dob", formData.dob)
    newDetails.append("role", formData.role)
    newDetails.append("password", formData.password)
    newDetails.append("conform", formData.conform)
    newDetails.append("imgUrl", formData.imgUrl)

    const multiConfig = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    try {
      const postDetails = await axios.post("http://localhost:8001", newDetails, multiConfig)
      details()
      setAccept1(false)
      setAgree1(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const onDeleteHandler = async (_id) => {
    try {
      const deleteData = await axios.delete(`http://localhost:8001/${_id}`)
      details()
    } catch (error) {
      console.log(error.message)
    }
  }

  const editFn = (_id) => {
    setOnEdit(true)
    const index = userData.findIndex((data) => data._id === _id)
    setEditObj(userData[index])
    console.log(userData[index])

  }

  const editCancelFn = () => {
    setOnEdit(false)
  }

  useEffect(() => {
    if (Object.keys(validate).length === 0 && isSubmit) {

      detailsPost()

      setFormData(resetData)
    }
    details()
  },
    [validate]
  )

  const create = (c) => {
    c.preventDefault()
    inputFileReset.current.value = ""
    setValidate(validation(formData))
    setIsSubmit(true)


  }


  const inputData = (i) => {
    const { name, value } = i.target
    setFormData({ ...formData, [name]: value })
    // console.log(formData)
  }


  const resetDataFn = () => {
    setFormData(resetData)
    setValidate("")
  }

  const validation = (dataOfUser) => {
    const valError = {}
    if (!dataOfUser.name) { valError.name = "* name required" }
    if (!dataOfUser.email) { valError.email = "* email required" }
    userData.filter(f => {
      if (f.email === formData.email) { valError.email = "* user with this email already exists" }
    })
    if (!dataOfUser.phone) { valError.phone = "* phone required" }
    userData.filter(f => {
      if (f.phone === formData.phone) { valError.phone = "* user with this number already exists" }
    })
    if (!dataOfUser.dob) { valError.dob = "* Date of birth required" }
    if (!dataOfUser.role) { valError.role = "* Role required" }
    if (!dataOfUser.password) { valError.password = "* password required" }
    if (!dataOfUser.conform) { valError.conform = "* conform  required" }
    if (dataOfUser.conform !== dataOfUser.password) { valError.match = "* password dosent match" }

    return valError
  }
  return (
    <div className="base">
      <div className="main flexRow">
        <div className="lblock flexCol">

          {onEdit ? < Edit
            key={editObj._id}
            editObj={editObj}
            setFormData={setFormData}
            formData={formData}
            editCancelFn={editCancelFn}
            updateForm={updateForm}
            validation={validation} />
            : <Login
              create={create}
              inputData={inputData}
              inputFileReset={inputFileReset}
              formData={formData}
              validate={validate}
              resetDataFn={resetDataFn}
              setFormData={setFormData}
              agree1={agree1}
              accept1={accept1}
              setAgree1={setAgree1}
              setAccept1={setAccept1}

            />}
        </div>
        <div className="rblock flexCol">
          <table>
            <thead>
              <tr>
                <th>DP</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>DOB</th>
                <th>ROLE</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody >
              {userData.map((eachItem) => <Table key={eachItem._id} editFn={editFn} oneUser={eachItem} onDeleteHandler={onDeleteHandler} />)}
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default App;
