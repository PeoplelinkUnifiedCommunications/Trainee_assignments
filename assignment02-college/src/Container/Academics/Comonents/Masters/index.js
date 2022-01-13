import "./index.css"
import { Outlet, Link } from "react-router-dom";
function Masters(){
    return(
        <div className="mainContainer" >
            <div className="masters flexCol">
                <div className="back">
                <span ><Link to="/academics"className="linkH">Back</Link></span>
                </div>
                <div className="about">
                    <div className="imgB">
                    <img className="com" src = "/images/masters.png" alt="img"/>

                    </div>

                </div>

            </div>

        </div>

    );
}
export default Masters;