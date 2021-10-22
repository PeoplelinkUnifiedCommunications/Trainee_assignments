import React  from 'react';
import Header from './components/header/header';
import SideNav from './components/sideNav/sideNav';
import Search from './components/search/search';
import CardContainer from './components/cards/index';
import "./style.css"

function App() {
  return (
    <div className="main">
    <div className="App">
      <Header />
      <SideNav />
      <Search />
      <CardContainer />
    </div>
    </div>

  );
}

export default App;
