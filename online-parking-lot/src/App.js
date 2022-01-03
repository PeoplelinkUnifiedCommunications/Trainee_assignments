
import './App.css';
import Header from "./components/Header"
import ParkingSlot from "./components/ParkingSlot"
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
     <div className='app-container'>
        <Header/>
        <ParkingSlot/>
        <Footer/>
     </div>
    </div>
  );
}

export default App;
