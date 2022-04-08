import React, { useEffect, useState } from "react";
import axios from "axios";
import Getusers from "./components/getInformation.js";
import "./App.css";

const initialName = {
  name: "",
};

function App() {
  const [username, setUserName] = useState(initialName);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getData();
    }, 5000);
    getData();
    return () => clearInterval(interval);
  }, []);

  const getData = async () => {
    const url = "http://172.16.16.67:8000/users";
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const postData = async () => {
    const url = "http://172.16.16.67:8000/users";
    try {
      if (username.name && username.name.trim() !== "") {
        const response = await axios.post(url, username);
        console.log(response);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeHandler = (e) => {
    const userInfo = e.target.value;
    setUserName({ ...username, name: userInfo });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    postData();
    setUserName(initialName);
  };
  return (
    <div className="flexRow">
      <div className="leftSideContainer">
        <div className="leftSideWrapper">
          <div className="leftHeadingContainer">
            <h1>USER NAMES</h1>
          </div>
          <ul className="unorderList">
            {users.map((eachItem) => (
              <Getusers key={eachItem._id} info={eachItem} />
            ))}
          </ul>
        </div>
      </div>
      <div className="rightSideContainer flexCol">
        <div className="formInputContainer">
          <form className="formContainer flexCol" onSubmit={onSubmitHandler}>
            <div className="inputFieldContainer">
              <label htmlFor="name">NAME</label>
              <input
                id="name"
                type="text"
                onChange={onChangeHandler}
                value={username.name}
                placeholder="Enter your name"
              />
            </div>
            <div className="buttonContainer">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
