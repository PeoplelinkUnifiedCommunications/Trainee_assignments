import { Routes, Route} from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'

import './App.css';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
     </Routes> 
  );
}

export default App;
