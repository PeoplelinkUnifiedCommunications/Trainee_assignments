import "./sidenav.css"
import Search from "./search.svg"
import Info from "../Home/info.svg"

function SideNav() {
    return (
        <div className="flexCol sidenav">
            <div className="sn1"><span>Tell Us About Your Project</span></div>
            <p className="pn1">Location</p>
            <div className="flexRow sub1">
                <div className="flexRow input1">
                    <div className="ip1">
                        <span className="in1"><input className="enter1" type="text" placeholder="Enter your address" /> </span>

                    </div>
                    <div className="drop1">
                        <span className="in1"> Small Family </span>
                    </div>
                </div>
                <img className="search" src={Search} alt="search" />
            </div>
            <div className="flexRow">
                <p className="pn1">Size your water heater</p>
                <img className="infoN" src={Info} alt="info" width="10px" />
            </div>
            <div className="flexRow input2">
                <div className="flexCol ip2">
                    <input className="slider" type="range" min="1" max="100" />
                </div>
                <div className="slideV"></div>

            </div>
            <p className="pn1">What is your current water heater fuel type?</p>
            <div className="flexCol input3">
                <div className="ip3">
                    <span className="in1">Natural Gas</span>

                </div>
            </div>
            <div className="flexRow">
                <p className="pn1">Is this a water heater emergengy?</p>
                <img className="infoN" src={Info} alt="info" width="10px" />
            </div>
            <div className="flexRow input3">
                <div className="flexCol ip4">
                <span className="in1">No</span>
                </div>
                <div className="flexCol ip5">
                <span className="in1">Yes</span>
                </div>

            </div>

        </div>
    );
}

export default SideNav;