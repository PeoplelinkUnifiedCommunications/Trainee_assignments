import "./index.css"
import { BiCopyright } from "react-icons/bi";
import {AiOutlineInfoCircle} from "react-icons/ai"

function Footer(){
    return(
        <div className="footer-container">
            <BiCopyright/>
            <p>2021.PeopleLink.All Rights Reserved</p>
            <AiOutlineInfoCircle className="on-hover" style={{marginLeft:"10px"}}/>
            <ul  className="hint" >
                   <li>Name:CH.Surya Gangadhara rao</li>
                   <li>Gmail:gangadhar.ch@peoplelinkvc.com</li>
                   <li>ID:9234</li>
            </ul>
               
            
		</div>
    )
}
export default Footer;