import {Link} from 'react-router-dom'

import './index.css'

function FooterPart(){
    return(
        <div className="footer-part-bg-container">
          <div className='footer-part-1-bg'>
             <ul className='hello-part-bg'>
                 <li className='list-item-footer-part say-hello'>SAY HELLO</li>
                 <li className='list-item-footer-part'>hello@olaolu.dev</li>
                 <Link to="/telegram"><li className='list-item-footer-part'>t.me/mrolaolu</li></Link>
             </ul>
             <ul className='work-part-bg'>
                 <Link to="/work">
                 <li className='list-item-footer-part'>My Work</li></Link>
                 <Link to="/shelf"><li className='list-item-footer-part'>My Shelf</li></Link>
                 <Link to="/resume"><li className='list-item-footer-part'>My Resume</li></Link>
             </ul>
             </div>
          
           <hr className='line-break'/>
           <div className='footer-footer-part'>
              <span>© Olaolu Olawuyi 2022</span>
              <ul className='ul-of-footer-footer-part'>
               <a rel='noreferrer' href="https://web.telegram.org/" target={"_blank"}><li className='list-item-footer-part'>TW</li></a>
               <a  rel='noreferrer' href="https://github.com/login" target={"_blank"}><li className='list-item-footer-part'>GH</li></a>
               <a  rel='noreferrer' href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target={"_blank"}> <li className='list-item-footer-part'>LN</li></a>
               <a rel='noreferrer' href="https://www.youtube.com/" target={"_blank"} ><li className='list-item-footer-part'>YT</li></a>
           </ul>
           </div>
        </div>
    )
}
export default FooterPart