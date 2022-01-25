import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import BodyPart from '../BodyPart/BodyPart';
import HeaderDisplay from '../HeaderDisplay/HeaderDisplay';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import GitHubApp from '../GitHub/GithubApp';
import TestimonialApp from '../../Testimonial/TestimonialApp';
import NotificationApp from '../../Notifications/NotificationApp';
import ImagesApp from '../../Images/ImagesApp';
import "./TotalContent.css"

function TotalConternt() {
    // placed all the components in one component to create entire layout
  return (
    <>
    <nav>
        <HeaderDisplay/>  {/* Header components */}
    </nav>
    <div className="total-container">
        <div className="side-nav-bar">
              <Sidebar/>   {/* SideNavigation Component */}
        </div>
        <div className="body-part">
            <Router>
                <Routes>
                    <Route path="/home" element={<BodyPart/>}/> {/* this /home will leads to BodyPart which is Home page by default */}
                    <Route path="/github" element={<GitHubApp/>}/>
                    <Route path="testimonial" element={<TestimonialApp/>}/>
                    <Route path="/notifications" element={<NotificationApp/>}/>
                    <Route path="/images" element={<ImagesApp/>}/>

                </Routes>
            </Router>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default TotalConternt;
