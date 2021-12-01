import React, { useState } from 'react';
import One from './Components/Header'
import Two from './Components/Footer'
import './App.css';
function App() {
  const [inputValue, setInputValue] = useState("")
  const [showMessage, setShowMessage] = useState(false);

  function messageDisplay(e) {
    e.preventDefault()
    setShowMessage(true)
  }
  return (
    <div className="App">
      <One />
      <div className="Card">
        <div className="Text">
          <h1>Hello world!</h1>
          <p>Welcome to Peoplelink!</p>
        </div>
        <div className="Action">
          <form>
            <input className="Writetext" onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Write Your text" />
            <button type="submit" onClick={messageDisplay} className="Button"> Accept Message</button>
            {showMessage && <div>{inputValue}</div>}
          </form>
        </div>
      </div>
      <Two />
    </div>
  );
}
export default App;
