import React, { useState } from "react";
// import axios from "axios";
import { v4 } from "uuid";
import Table from "../Table/table";
import "./form.css";

function Form() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phno, setPhno] = useState("");
  const [gender, setGender] = useState("");
  const [desig, setDesig] = useState("");


  const id = v4();

  const changeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePhno = (e) => {
    setPhno(e.target.value);
  };

  const changeGender = (e) => {
    setGender(e.target.value);
  };

  const changeDesig = (e) => {
    setDesig(e.target.value);
  };

  const [reqFirstName, setReqFirstName] = useState(false);
  const [reqLastName, setReqLastName] = useState(false);
  const [reqEmail, setReqEmail] = useState(false);
  const [reqPhno, setReqPhno] = useState(false);
  const [reqGender, setReqGender] = useState(false);
  const [reqDesig, setReqDesig] = useState(false);

  const [isEdit , setEditStatus] = useState(false)
  const [editId, setEditId] = useState("")
  
  const [userDetails, setUserDetails] = useState([]);

  const addUser = () => {
    const newList = [id, firstname, lastname, email, phno, gender, desig];
    let list = userDetails;
    list.push(newList);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhno("");
    setGender("");
    setDesig("");
    setUserDetails(list);
  }

  const updateUser = () => {
    const list = userDetails
    const updatedList = list.map((each)=>{
      if(editId === each[0]){
        return([id, firstname, lastname, email, phno, gender, desig])
      }else{
        return each
      }

    })
    setUserDetails(updatedList)
    setEditStatus(false)
  }

  const formSubmission = (e) => {
    e.preventDefault();

    if (firstname === "") {
      setReqFirstName(true);
    } else {
      setReqFirstName(false);
    }

    if (lastname === "") {
      setReqLastName(true);
    } else {
      setReqLastName(false);
    }

    if (email === "") {
      setReqEmail(true);
    } else {
      setReqEmail(false);
    }

    if (phno === "") {
      setReqPhno(true);
    } else {
      setReqPhno(false);
    }

    if (gender === "") {
      setReqGender(true);
    } else {
      setReqGender(false);
    }

    if (desig === "") {
      setReqDesig(true);
    } else {
      setReqDesig(false);
    }

    if(isEdit){
      updateUser()
    }else{
      addUser()
    }
  };

const editDetails = (id) => {
    console.log(id)
    setEditStatus(true)
    setEditId(id)
    const existingDetails = userDetails;
    const userToEdit = existingDetails.filter((each) => each[0] === id);
    setFirstName(userToEdit[0][1]);
    setLastName(userToEdit[0][2]);
    setEmail(userToEdit[0][3]);
    setPhno(userToEdit[0][4]);
    setGender(userToEdit[0][5]);
    setDesig(userToEdit[0][6]);
  };

  const deleteDetails = (id) => {
    console.log(id);
    const existingList = userDetails;
    const newList1 = existingList.filter((each) => each[0]!== id)
    setUserDetails(newList1)
  };

  // const sendDataToAPI = () => {
  //   axios.post(`https://629f16f18b939d3dc28eca55.mockapi.io/crud`, {
  //     id: v4(),
  //     firstname,
  //     lastname,
  //     email,
  //     phno,
  //     gender,
  //     desig,
  //   });
  // };

  // useEffect(() => {
  //   axios
  //     .get(`https://629f16f18b939d3dc28eca55.mockapi.io/crud`)
  //     .then((getData) => {
  //       console.log(getData.data);
  //     });
  // }, []);

  return (
    <div className="mainContainer">
      <div className="formOutline">
        <div className="formInline">
          <form onSubmit={formSubmission} className="fieldCntnr">
            <label className="fname" htmlFor="fname">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter First name"
              value={firstname}
              onChange={changeFirstName}
              required
            />
            {reqFirstName && <p className="errMsg">*Enter First Name</p>}

            <label className="lname" htmlFor="lname">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter Last name"
              value={lastname}
              onChange={changeLastName}
              required
            />
            {reqLastName && <p className="errMsg">*Enter Last Name</p>}

            <label className="email" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter E-mail"
              value={email}
              onChange={changeEmail}
              required
            />
            {reqEmail && <p className="errMsg">*Enter E-mail Id</p>}

            <label className="phno" htmlFor="phno">
              Phone No.
            </label>
            <input
              type="number"
              placeholder="Enter phone number"
              value={phno}
              onChange={changePhno}
              required
            />
            {reqPhno && <p className="errMsg">*Enter Phone Number</p>}

            <div onChange={changeGender} required>
              <label className="gen" htmlFor="gender">
                Gender
              </label>

              <input type="radio" value="male" name="gender" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}/>
              <label className="male" htmlFor="male">
                Male
              </label>

              <input type="radio" value="female" name="gender" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}/>
              <label className="female" htmlFor="female">
                Female
              </label>
              <br />
              {reqGender && <p className="errMsg">*Please select a value</p>}
            </div>

            <label className="desig" htmlFor="desig">
              Designation
            </label>
            <select name="desig" onChange={(e) => setDesig(e.target.value)}>
              <option value="director" name="desig">
                Director
              </option>
              <option value="manager" name="desig">
                Manager
              </option>
              <option value="trainee" name="desig">
                Trainee
              </option>
              <option value="employee" name="desig">
                Employee
              </option>
              <option value="assistant" name="desig">
                Assistant
              </option>
              <option value="none" name="desig" selected>
                None
              </option>
            </select>
            {reqDesig && <p className="errMsg">*Please select a value </p>}

            <button className="submitBtn" type="submit" 
            >
              {/* onClick={sendDataToAPI} */}
              Submit
            </button>
          </form>
    
      </div>
      </div>


      <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>E-mail</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map((each) => (
            <Table key={each[0]} formDetails={each} editDetails={editDetails} deleteDetails={deleteDetails}/>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    
  );
}

export default Form;
