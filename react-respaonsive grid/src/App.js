import Header from './components/header';
import './stylesheets/header.css';
import './App.css';
import Container from './components/container';
import './stylesheets/container.css';
import Footer from './components/footer';
import './stylesheets/footer.css';


function App() {
  return (
    <div className="App pdngMD">
      <Header/>
      <div className="ColFlex pdngVMD">
      <Container/>
      </div>
      
      <Footer/>
      
    </div>
  );
}

export default App;
