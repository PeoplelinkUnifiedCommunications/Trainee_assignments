import "./index.css"
import { BiCopyright } from "react-icons/bi";
import {AiOutlineInfoCircle} from "react-icons/ai"

function Footer(){
    return(
        <div className="footer-container">
            <BiCopyright/>
            <p>2021.PeopleLink.All Rights Reserved</p>
            <div className="info-container">
            <AiOutlineInfoCircle className="on-hover" />
            <ul  className="hint" >
                   <li>Name:CH.Surya Gangadhara rao</li>
                   <li>Gmail:gangadhar.ch@peoplelinkvc.com</li>
                   <li>ID:9234</li>
            </ul>
            </div>
            
               
            
		</div>
    )
}
export default Footer;