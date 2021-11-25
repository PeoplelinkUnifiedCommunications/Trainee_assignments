import React, { useState } from 'react';
import './App.css';
import Header from './Header/header';
import Footer from './Footer/footer';

function App() {
  const [data, setData] = useState("");
  const [print,setPrint] = useState(false);
  function getData(props) {
    setData(props.target.value);
    setPrint(false);
  }
  return (
    <div className="App">
      <Header />
      <div className="App-Input">
    
        <form>
          <label>Name: </label>
          <input type="text" placeholder ="Enter Text"onChange={getData}/>
          <input type="button" value="Submit" onClick={()=>{if(data!==""){setPrint(true)}}} />
    
          {
            print?
            <h3>Welcome to My Page {data}</h3>
            :""
          }
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default App;
