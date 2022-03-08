
import React from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import  Body  from './components/Body';
import { Routes, Route } from "react-router-dom";
import TotalProducts from './components/Routing/TotalProducts'
import TotalUsers from './components/Routing/TotalUsers'
import TotalSells from './components/Routing/TotalSells'
import TotalViews from './components/Routing/TotalViews';
import ViewsItem from './components/Routing/ViewsItem';
import Cart from './components/Routing/Cart';
import Document from './components/Routing/Document';
import Settings from './components/Routing/Settings';
import './App.css';
import NoData from './components/NoData';
import Home from "./components/Routing/Home";
import Profile from "./components/Routing/Profile";
import Logout from "./components/Routing/Logout";

function App() {
  return (
    <div className="baseCntnr">
      <Header />
      <div className='contentCntnr'>
      <SideNav/>
          <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/views' element={<TotalViews />} />
          <Route path='/products' element={<TotalProducts />} />
          <Route path='/users' element={<TotalUsers />} />
          <Route path='/sells' element={<TotalSells />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/documents' element={<Document />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/views/:id' element={<ViewsItem />} />
          <Route path="*" element={<NoData/>} />
          </Routes>
      </div>
    </div>
  );
}


export default App;
