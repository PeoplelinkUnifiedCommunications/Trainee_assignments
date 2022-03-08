import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm"
import Footer from './components/Footer';


import './App.css';

const App=()=>{
    
return (
  <div className='App'>
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginForm/>} />
        <Route path="/signup" element={<SignUpForm/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </div>
)
}
export default App;