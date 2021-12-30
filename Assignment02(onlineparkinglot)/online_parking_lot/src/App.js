import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SlotGeneration from './Components/SlotGeneration/SlotGeneration.js';
import Allottedslots from './Components/Allottedslots/Allottedslots.js'

function App() {
  return (
    <div>
      <Header/>
      <div className='blocks'>
        <SlotGeneration/>
        <Allottedslots/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
