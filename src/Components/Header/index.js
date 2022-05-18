import { BiMenuAltRight} from "react-icons/bi"
import { Link } from "react-router-dom"

import './index.css'

function Header(){
return(
    <div className="header-styling">
        <h1>
            Olaolu
        </h1>
        <div>
            <Link to="/menu">
            <BiMenuAltRight className="menu-icon"/>
            </Link>
        </div>
    </div>
)
}
export default Header