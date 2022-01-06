import React, {useRef, useEffect, useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState()
  let data = useRef("");
  let password = useRef("");
  // console.log(useRef);
  const submitHandler = e => {
    e.preventDefault();
    console.log(data.current.value);
  }
 useEffect(()=>{
   data.current.focus();
  
 })
 const show =()=>{
   setName("hai")
  
 }

  return (
    <div className="App">
     <form onSubmit={submitHandler}>
       <input ref={data} type="text" placeholder="Enter your Name" value={name}/> <br /><br />
       <input ref={password} type="text" placeholder="Enter your Password" value={name}/> <br /><br />
       <input type="submit" onClick={show}/>
     </form>
     <h1>{data.current.value}</h1>
     <h1>{password.current.value}</h1>
    </div>
  );
}

export default App;

