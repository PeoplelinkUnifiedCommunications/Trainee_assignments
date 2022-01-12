import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Academics from './components/Academics';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Admissionform from './components/Admissionform';
import CivilEngineering from './components/CivilEngineering';
import English from './components/English';
import './App.css';

function App() {
  return (
  <Router>
     <Nav/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/academics" element={<Academics/>}/>
      <Route path="/admissions" element={<Admissionform/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/civilengineering" element={<CivilEngineering/>}/>
      <Route path="/english" element={<English/>}/>
     </Routes>
   </Router>
  )
}

export default App;
