import React, { useState } from "react";
import axios from "axios";

const initialName = {
  name: "",
};
function Form() {
  const [username, setUserName] = useState(initialName);

  const onChangeHandler = (e) => {
    const userInfo = e.target.value;
    setUserName({ ...username, name: userInfo });
  };

  const postData = async () => {
    const url = "http://172.16.16.67:8000/users";
    try {
      if (username.name && username.name.trim() !== "") {
        await axios.post(url, username);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    postData();
    setUserName(initialName);
  };

  return (
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
  );
}

export default Form;
