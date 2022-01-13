import reactDom from "react-dom";
import "./index.css"
import { Outlet, Link } from "react-router-dom";
function Pharmacy(){
    return(
        <div className="mainContainer" >
            <div className="pharmacy flexCol">
                <div className="back">
                <span ><Link to="/academics"className="linkH">Back</Link></span>

                </div>
                <div className="about">
                    <div className="imgB">
                    <img className="com" src = "/images/pharmacy.png" alt="img" />

                    </div>

                </div>

            </div>

        </div>

    );
}
export default Pharmacy;