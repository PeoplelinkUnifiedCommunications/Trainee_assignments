import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";


// import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";

// CSS
import "./dash.css"

import SideNav from './SideNav/nav';
import Home from "./Home/home";
import Testimonial from "./Testimonial";
import Search from "./GitHub/search";
import Notification from './Notification';
import Images from './Images/ecards';

function Dashboard(){
    return(
        <Router>
        <div className=" mainContainer">

            <div className="flexRow dashboard">
                <SideNav/>
                
                <div className="flexCol main">
                 
                    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/testimonial" element={<Testimonial />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/Images" element={<Images />} />
                     

                    </Routes>
                 
                 {/* <Images /> */}
                
                </div>
                

            </div>
        </div>
        </Router>
    );
}
export default Dashboard;