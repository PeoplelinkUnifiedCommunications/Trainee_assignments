import Navbar from "./components/Navbar"
import ParkingSoltForm from './components/ParkingSoltForm'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="app-content">
        <Navbar/>
        <ParkingSoltForm/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
