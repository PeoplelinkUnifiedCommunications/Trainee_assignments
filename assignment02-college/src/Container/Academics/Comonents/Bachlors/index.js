import "./index.css"
import { Outlet, Link } from "react-router-dom";
function Bachlors(){
    return(
        <div className="mainContainer" >
            <div className="bachlors flexCol">
                <div className="back">
                <span ><Link to="/academics"className="linkH">Back</Link></span>

                </div>
                <div className="about">
                    <div className="imgB">
                        <img className="com" src = "/images/bachlors.png" alt="image" />

                    </div>

                </div>

            </div>

        </div>

    );
}
export default Bachlors;