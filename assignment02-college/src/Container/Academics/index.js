import React from "react";
import { Outlet, Link } from "react-router-dom";

import Bachlors from "./Comonents/Bachlors";
import Masters from "./Comonents/Masters";
import Pharmacy from "./Comonents/Pharmacy";
import "./index.css"
function Academics(){
    return(

        <div className="mainContainer">
            <div className="academics">
                <div className="imageAA">
                    <img className="AA" src="https://charaklive.b-cdn.net/wp-content/uploads/2021/07/Academics-1200x450.jpg" alt="academics" />

                </div>
                <div className="course">
                    <div className="cardC1">
                        <span ><Link to="/bachlors"className="linkH">Bachlors</Link></span>

                    </div>
                    <div className="cardC2">
                    <span ><Link to="/pharmacy"className="linkH">Pharmacy</Link></span>

                    </div>
                    <div className="cardC3">
                    <span ><Link to="/masters"className="linkH">Masters</Link></span>

                    </div>

                </div>



            </div>

        </div>
    );
}
export default Academics;