import React from 'react';
import MainPage from './College/Home/Mainpage';
import Navbar from './College/Navbar/Navbar';
import Admission from './College/Admission/Admission'; 
import Gallery from './College/Gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <MainPage/> */}
      {/* <Admission/> */}
      <Gallery/>
    </div>
  );
}

export default App;
