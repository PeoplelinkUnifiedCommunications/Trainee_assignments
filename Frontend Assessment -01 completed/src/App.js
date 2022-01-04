import React, { useState } from 'react';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import './App.css';
function App() {
  const [value,setValue]=useState(3 );
  const onChangeValue =(props)=>{
    setValue(props)
  }
  return (
    <div className="App">
      <Slider onChangeValue={onChangeValue}/>
      <Header value={value}/>
    </div>
  );
}

export default App;
