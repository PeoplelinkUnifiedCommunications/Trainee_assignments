import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";


const App=()=>(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
)

export default App;
