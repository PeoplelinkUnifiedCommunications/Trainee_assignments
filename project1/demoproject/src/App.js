import React from 'react';
import Body from './containers/body';
import Header from './containers/header';
import { Routes, Route } from "react-router-dom";
import TotalProducts from './containers/routing/totalProducts/TotalProducts';
import TotalUsers from './containers/routing/totalUsers/TotalUsers'
import TotalSells from './containers/routing/totalSells/TotalSells'
import TotalViews from './containers/routing/totalViews/TotalViews';
import ViewsCount from './containers/routing/viewsCount';
import SideNav from './containers/sideNav';
import Cart from './containers/navLinks/Cart/cart';
import Settings from './containers/navLinks/Settings/settings';
import Document from './containers/navLinks/Document/document';
import NoData from './containers/noDataFound/NoData';
import './App.css'
import Home from './containers/menulist/home';
import MiniDrawer from '../src/muiElements/drawer'


function App() {
  return (
    <div className="App">
      <Header />
      <div className='contentCntnr'>
        <SideNav />
          <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/views' element={<TotalViews />} />
          <Route path='/products' element={<TotalProducts />} />
          <Route path='/users' element={<TotalUsers />} />
          <Route path='/sells' element={<TotalSells />} />
          <Route path='/views/:id' element={<ViewsCount />} />

          <Route path='/cart' element={<Cart />}/>
          <Route path='/settings' element={<Settings />}/>
          <Route path='/documents' element={<Document />}/>
          <Route path='*' element={<NoData />}/>
          <Route path='/home' element={<Home/>}/>

          <Route path='/miniDrawer' element={<MiniDrawer />}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
