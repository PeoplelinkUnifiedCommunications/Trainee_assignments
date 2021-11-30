import React, {useState} from "react"
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  const[inputValue, setInputValue] = useState("")
  const [showDialog,setShowDialog] = useState(false);

  function handleDialog(e){
    e.preventDefault()
    setShowDialog(true)
  }
  function clearDialogs(){
    // e.preventDefault()
    setInputValue(false)
  } 

  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <div className="bgContainer">
          <form>
            <input className="inp" onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Enter any text" />
            <div className="btn" >
              <button type="submit" onClick={handleDialog} className="btnStyle" >Click me</button>
              <button type="reset" onClick={clearDialogs} className="btnStyle" >Reset</button>
            </div>

            {showDialog && <div>{inputValue}</div>}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
