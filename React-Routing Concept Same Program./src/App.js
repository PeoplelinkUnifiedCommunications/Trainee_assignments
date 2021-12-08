import React from 'react';
import LoginPage from './Loginpage/Loginpage';
import './App.css';
import Main from './Mainpage/Main';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/' element={<LoginPage />} />
        <Route path='/main' element={<Main />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
  }

export default App;
