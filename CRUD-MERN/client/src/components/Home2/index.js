import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from '../../App'
import './styles.css'


function Home2() {
    const [token,] = useContext(store)
    return (
        <div className="flexCol fullHeight bglight">
            <div className="flexRow jcEnd alignCntr">
                {!token &&
                    <div className="style">
                        <div className="flexRow">
                            <h3 className="pdngHLG"><Link to="/login">Login</Link></h3>
                            <h3 className="pdngHLG"><Link to="/register">Register</Link></h3>
                        </div>
                    </div>
                }
            </div>
            <div className="flexRow alignCnter jcCntr">
                <div>
                    <img className="homeImage" src="./Images/download.jpg" alt="homebg"/>
                </div>
            </div>
        </div>
    )
}
export default Home2;