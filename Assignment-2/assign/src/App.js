import React,{useState} from 'react'
import './App.css'
import Header from './Header/Header';
import SideNav from './SideNav/SideNav';


const App = ()=>{
 const [value, setValue] = useState(0)

 const onChangeValue = (props) =>{
  setValue(props)
}

  return (
    <div className="App">
      <div className='flex'>
      <SideNav onChangeValue={onChangeValue} />
      <Header value={value}/>
      </div>
    </div>
  );
}

export default App;
