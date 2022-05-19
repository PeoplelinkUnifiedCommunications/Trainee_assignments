import { BiMenuAltRight} from "react-icons/bi"
import { Link } from "react-router-dom"
import FooterPart from "../FooterPart"

import './index.css'


function Shelf (){
    return(
        <>
        <div className="shelf-part-bg-container">
            <div className="menu-navbar-conatiner">
              <h1>Olaolu</h1>
              <Link to="/shelfmenu">
            <BiMenuAltRight className="menu-icon"/>
            </Link>
            </div>
            <div className="shelf-part-content-container">
                <h1 className="shelf-part-heading">/shelf</h1>
                <div>
                  <p>4 January 2019</p>
                  <h2 className="shelf-problem-title" >Web Performance: The Problems</h2>
                  <p >No doubt, there’s a ton of reasons why websites are slow, some of which are case-specific. I like to look at these factors from two perspectives...</p>
                  
                </div>
                <hr className="line-break-shelf"/>
                <div>
                    <p>1 October 2018</p>
                    <h2  className="shelf-problem-title">Web Performance: The big Picture</h2>
                    <p >As the web platform continues to evolve very quickly, new technologies and development techniques spring up even more rapidly. It has become alarming how many slow sites are on the web today.</p>
                </div>

            </div>
        </div>
        <FooterPart/>
        </>
    )
}
export default Shelf