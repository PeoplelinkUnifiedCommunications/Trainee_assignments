import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import CreateUser from "./components/CreateUser"
import UserDetails from "./components/UserDetails"



import './App.css';

const App=()=>{
    
return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<UserDetails/>} />
        <Route path="/login" element={<CreateUser/>} />
    </Routes>
  </BrowserRouter>
)
}
export default App;