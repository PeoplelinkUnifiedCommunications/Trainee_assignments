import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
