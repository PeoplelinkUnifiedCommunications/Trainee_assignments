import React from 'react'
import Header from './Header/Header'
import Sidenav from './Sidenav/Sidenav'
import Notification from './Notifications/Notification'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Search from './Github/SearchField/index'
import Dashboard from './Testimonial/Dashboard'
import ExpandingCards from './ExpandingCards/ExpandingCards'
import Footer from './Footer/Footer'
import Home from './Home/Home'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Sidenav />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/notifications" element = {<Notification/>}/>
          <Route path="/search" element = {<Search/>}/>
          <Route path="/dashboard" element = {<Dashboard/>}/>
          <Route path="/expandingCards" element = {<ExpandingCards/>}/>
        </Routes>

        <Footer />

      </div>
    </Router>
  )
}

export default App;
