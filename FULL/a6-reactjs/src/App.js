import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Components/login";
import Edit from "./Components/edit";
import Table from "./Components/Table";

import "./index.css"

const tableData = { name: "", email: "", phone: "", dob: "", role: "Frontend", password: "", conform: "" }

const resetData = { name: "", email: "", phone: "", dob: "", role: "Frontend", password: "", conform: "" }


function App() {
  const [userData, setUserData] = useState([])

  const [formData, setFormData] = useState(tableData)

  const [validate, setValidate] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)

  const [editObj, setEditObj] = useState({})

  const [onEdit, setOnEdit] = useState(false)

  const [accept1, setAccept1] = useState(false)

  const [agree1, setAgree1] = useState(false)

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
    try {
      const response = await axios.patch(`http://localhost:8001/${_id}`, updatedDetails)
      console.log(response)
      details()
      setOnEdit(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  const detailsPost = async () => {
    try {
      const postDetails = await axios.post("http://localhost:8001", formData)
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
    const index = userData.findIndex((data) => data._id === _id)
    setEditObj(userData[index])
    setOnEdit(true)
  }

  const editCancelFn = () => {
    setOnEdit(false)
  }

  useEffect(() => {
    if (Object.keys(validate).length === 0 && isSubmit) {
      // setFormData(formData)
      detailsPost()
      // console.log(formData)

      setFormData(resetData)
    }
    details()
  },
    [validate]
  )


  const create = (c) => {
    c.preventDefault()

    setValidate(validation(formData))
    // console.log("create success")
    setIsSubmit(true)
    // console.log(userData)
  }



  console.log(formData)

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
    if (!dataOfUser.name) {
      valError.name = "* name required"
    }
    if (!dataOfUser.email) {
      valError.email = "* email required"
    }
    userData.filter(f => {
      if (f.email === formData.email) {

        valError.email = "* user with this email already exists"
      }
    })
    if (!dataOfUser.phone) {
      valError.phone = "* phone required"
    }
    userData.filter(f => {
      if (f.phone === formData.phone) {

        valError.phone = "* user with this number already exists"
      }
    })
    if (!dataOfUser.dob) {
      valError.dob = "* Date of birth required"
    }
    if (!dataOfUser.role) {
      valError.role = "* Role required"
    }
    if (!dataOfUser.password) {
      valError.password = "* password required"
    }
    if (!dataOfUser.conform) {
      valError.conform = "* conform  required"
    }
    if (dataOfUser.conform !== dataOfUser.password) {
      valError.match = "* password dosent match"
    }

    return valError
  }
  return (
    <div className="base">
      <div className="main flexRow">
        <div className="lblock flexCol">

          {onEdit ? < Edit editObj={editObj} editCancelFn={editCancelFn} formData={formData} updateForm={updateForm} validation={validation} /> : <Login
            create={create}
            inputData={inputData}
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
              {userData.map((eachItem) =>
                <Table key={eachItem._id}
                  editFn={editFn}
                  oneUser={eachItem}
                  onDeleteHandler={onDeleteHandler}
                />


              )}
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default App;
