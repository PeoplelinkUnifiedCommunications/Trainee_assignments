// ***************************useEffect*************************************

// import {useState} from 'react'
// const App = () =>{

//   const [count, setCount] = useState(0)
//   return(
//       <div>
//         <h1>you clicked {count} </h1>
//         <button onClick={()=> setCount(count+3)}>Click Me</button>
//       </div>

//   )

// }
// export default App;

// *****************************************useState************************************8

// import {useState} from 'react'

// const App = () => {

//   const [name, setName] = useState("vamsi")

//   return (
//     <div>
//       <h1>hello {name}</h1>
//       <button onClick={()=> setName("vamsikrishna"+1)}>Click Me </button>
//     </div>
//   )
// }

// export default App

// *********************************Print output down********************************************

import React, { useState } from "react";

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
