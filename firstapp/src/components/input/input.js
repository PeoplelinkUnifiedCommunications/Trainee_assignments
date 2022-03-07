import React, { useState } from "react";
import "./input.css";

function Input() {

  
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(false);

  const changeHandler = (e) => {
    setInput(e.target.value);
    console.log(e);
  };

  function getData(e) {
    e.preventDefault();
    if (input === "") {
      setOutput(false);
    } else {
      setOutput(true);
    }
  }
  return (
    <div className="body">
      <form>
        <div className="input">
          <input
            type="text"
            onChange={changeHandler}
            placeholder="Enter your data"
            required
            value={input}
          />
        </div>
        <div className="button">
          <button onClick={getData}>Click Me</button>
        </div>
        <div className="output">{output && <h1>Welcome&nbsp;{input}</h1>}</div>
      </form>
    </div>
  );
}
export default Input;
