import React  from 'react';
import Header from './components/header/header';
import SideNav from './components/sideNav/sideNav';
import Search from './components/search/search';
import Card from './components/cards/index';
import "./style.css"

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <Search />
      <Card />
    </div>

  );
}

export default App;
