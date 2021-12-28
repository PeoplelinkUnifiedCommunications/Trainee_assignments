import './App.css';
import Header from './header';
import Left from './left';
import Right from './right';
import Footer from './footer';
function App() {
  return (
    <div className='app'>
<Header/>
<div className='seshu'>
<Left/>
<Right/>
</div>
<Footer/>
    </div>
  );
}

export default App;
