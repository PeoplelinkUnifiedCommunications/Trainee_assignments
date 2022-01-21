import './App.css';
import Homepage from './Components/Homepage/Homepage';
import Loginpage from './Components/Loginpage/Loginpage';
import Register from './Components/Register/Register';
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/register' element={<Register/>}/>  
      </Routes>
    </div>
  );
}

export default App;