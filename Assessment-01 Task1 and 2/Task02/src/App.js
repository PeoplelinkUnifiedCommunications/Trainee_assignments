import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Header">
        Block Game!!
      </div>
      <div className="Main">
        <div className="card">
          <button style={{backgroundColor:'red'}}>Block 1</button>
          <button style={{backgroundColor:'orange'}}>Block 2</button>
        </div>
        <div className="card1">
          <button style={{backgroundColor:'yellow'}}>Block 3</button>
          <button style={{backgroundColor:'lightgreen'}}>Block 4</button>
        </div>
        <div className="card2">
          <button style={{backgroundColor:'blue'}}>Block 5</button>
          <button style={{backgroundColor:'lightgreen'}}>Block 6</button>
        </div>
        <div className="card3">
          <button style={{backgroundColor:'blue'}}>Block 7</button>
          <button style={{backgroundColor:'purple'}}>Block 8</button>
          <button style={{backgroundColor:'violet'}}>Block 9</button>
        </div>
        <div className="card4">
          <button style={{backgroundColor:'pink'}}>Block10</button>
        </div>  
        <div className="card5">
          <button style={{backgroundColor:'pink'}}>Block 11</button>
        </div>
        <div className="card6">
          <button style={{backgroundColor:'red'}}>Block 12</button>
          <button style={{backgroundColor:'grey'}}>Block 13</button>
          <button style={{backgroundColor:'red'}}>Block 13</button>
        </div>
      </div>
      <div className="Footer">
        <a href="/">copyright&copy;raviranjan</a>
      </div>
    </div>
  );
}

export default App;
