import { Link } from "react-router-dom"
import "./card.css"
import Info from "./info.svg"
import Star from "./star.png"
import Img3 from "./img3.png"



function Card3() {
    return (
        <div className="flexCol card">
            <div className="flexRow head">
                <div className="flexCol left1">
                    <span className="tu">Rheem</span>
                    <span className="tb">Performance Platinum 50</span>

                </div>
                <div className="flexRow rig1">
                    <span className="tb">3.4 ef</span>
                    <img src={Info} alt="info" width="10px" />
                    <img src={Star} alt="star" width="42px" />
                </div>

            </div>
            <div className="flexRow ubody">
                <div className="flexCol image">
                    <img src={Img3} alt="image1" width="100%" />

                </div>
                <div className="flexCol adv">
                    <div className="flexRow">
                        <span className="o">o</span>
                        <span className="ta">Leak detection with auto water shut-off</span>
                    </div>
                    <div className="flexRow">
                        <span className="o">o</span>
                        <span className="ta">Control from your smartphone</span>
                    </div>
                    <div className="flexRow">
                        <span className="o">o</span>
                        <span className="ta">Multipleoperating nodes</span>
                    </div>
                    <div className="flexRow">
                        <span className="o">o</span>
                        <span className="ta">10 year manufacturer warranty</span>
                    </div>

                </div>
            </div>
            <div className="flexCol lbody">
                <div className="flexRow a1">
                    <span className="ta">Base Price</span>
                    <span className="ta">------------------------</span>
                    <span className="ta">$1,799</span>

                </div>
                <span className="ts" >(Installation not included)</span>
                <div className="flexRow a1">
                    <span className="ta">Available Incentives</span>
                    <img src={Info} alt="info" width="10px" />
                    <span className="ta">-----------</span>
                    <span className="ta">$1,799</span>

                </div>
                <div className="flexRow a1">
                    <span className="ta">Equipment Cost</span>
                    <img src={Info} alt="info" width="10px" />
                    <span className="ta">------------------</span>
                    <span className="ty">$499</span>

                </div>
                <div className="flexCol a2">
                    <div className="flexRow aa1">
                        <span className="taa">Your Est. Annual Savings is</span>
                        <span className="tg">$120</span>
                        <img src={Info} alt="info" width="10px" />

                    </div>
                    <div className="flexCol orange">
                        <div className="flexCol aa3">

                            <span className="tu">Get Install Quote</span>
                        </div>

                    </div>

                </div>

            </div>
            <div className="flexCol bb">
                <span className="tp"> <Link to="/screen"> View more Details</Link></span>


            </div>

        </div>

    );
}
export default Card3;