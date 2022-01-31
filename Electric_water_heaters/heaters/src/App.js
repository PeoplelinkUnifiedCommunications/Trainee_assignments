import MainComponent from './components/MainContent';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CardsMainContainer from './components/CardsMainContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainComponent/>}/>
          <Route path="/Rheem" element={<CardsMainContainer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
