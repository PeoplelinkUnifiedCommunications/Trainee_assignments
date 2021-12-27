import React  from 'react'
import './App.css'
import Header from './Header/Header';
import SideNav from './SideNav/SideNav';

const App = ()=>{
  return (
    <div className="App">
      <div className='flex'>
      <SideNav />
      <Header />
      </div>
    </div>
  );
}

export default App;
