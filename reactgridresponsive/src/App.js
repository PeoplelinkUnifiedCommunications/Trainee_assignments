import Header from './components/header';
import './stylesheets/header.css';
import './App.css';
import Sidenav from './components/sidenav';
import './stylesheets/sidenav.css';
import Container from './components/container';
import './stylesheets/container.css';
import Footer from './components/footer';
import './stylesheets/footer.css';



function App() {
  return (
    <>
    <div className='App colFlex' >
      <Header/>
      <div className="rowFlex pdngVMD cntnr">
      <Sidenav/>
      <Container/>
      </div>
     
      
      <Footer/>
    </div>
    </>
  );
}

export default App;
