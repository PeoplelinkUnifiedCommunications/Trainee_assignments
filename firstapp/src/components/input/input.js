import React, { useState } from "react";
import "./input.css";

function Input() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(false);

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
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your data"
            required
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
