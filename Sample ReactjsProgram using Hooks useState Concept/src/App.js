import React, { useState } from 'react';
import Header from './Header/header';
import Footer from './Footer/footer';
import './App.css';
function App() {
    const [data, setData] = useState("");
  const [items, setItems] = useState([]);
  function addItem(event) {
    if (!data) {
      alert("Input can't be empty")
    }
    else {
      event.preventDefault();
      setItems([...items, data]);
      setData('');
    }
  }
  return (
    <div className="App">
      <Header />
      <div className="App-Input">

        <form onSubmit={addItem}>
          <label>Name: </label>
          <input type="text" placeholder="Enter Text" value={data} onChange={(props) => setData(props.target.value)} />
          <input type="submit" value="Submit" />
        </form>
      </div>
      {
        items.map((elem) => {
          return (
            <h3>{elem}</h3>
          )
        })
      }
      <Footer />
    </div>  
    );
}

export default App;