import './App.css';
import Header from './Header/header';
import './Header/Header.css';
import Waterheater from './Waterheater';
import SideNav from './Waterheater/Components/sideNav';

function App() {
  return (
    <div className=" baseCntnr resRowCol">
    
        <div className="sideNav">
        <SideNav/>
        </div>
        <div className="mainCntnr">
         <Header/>
        
         <Waterheater/>
         
        </div>

      

    </div>
  );
}

export default App;
