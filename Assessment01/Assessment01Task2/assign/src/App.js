import React from 'react'
import './App.css';
import Middle from './Middle/Middle';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='Header'>
         <h1>Block Game !!!</h1>
        </div>
        <Middle />
        <div className='Footer'>
         <p>copyright&copy;Vamsi</p>
        </div>
      </div>
    </div>
  );
}

export default App;
