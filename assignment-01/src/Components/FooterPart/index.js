import {Link} from 'react-router-dom'

import './index.css'

function FooterPart(){
    return(
        <div className="footer-part-bg-container">
        <div className='footer-part1-bg-container'>
          <div className='footer-part-1-bg'>
             <ul className='hello-part-bg'>
                 <li className='list-item-footer-part say-hello'>SAY HELLO</li>
                 <li className='list-item-footer-part'>hello@olaolu.dev</li>
                 <a rel='noreferrer'  href="https://web.telegram.org/k/" target={"_blank"}><li className='list-item-footer-part'>t.me/mrolaolu</li></a>
             </ul>
             <ul className='work-part-bg'>
                 <Link to="/work">
                     <li className='list-item-footer-part'>My Work</li></Link>
                 <Link to="/shelf"><li className='list-item-footer-part'>My Shelf</li></Link>
                 <a rel='noreferrer' href='https://olaolu.dev/resume/'><li className='list-item-footer-part'>My Resume</li></a>
             </ul>
            </div>
            </div>
          
           <hr className='line-break'/>
           <div className='footer-footer-part'>
              <span>© Olaolu Olawuyi 2022</span>
              <ul className='ul-of-footer-footer-part'>
               <a rel='noreferrer'  href="https://twitter.com/i/flow/login" target={"_blank"}><li className='list-item-footer-part'>TW</li></a>
               <a  rel='noreferrer' href="https://github.com/login" target={"_blank"}><li className='list-item-footer-part'>GH</li></a>
               <a  rel='noreferrer' href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target={"_blank"}> <li className='list-item-footer-part'>LN</li></a>
               <a rel='noreferrer' href="https://www.youtube.com/" target={"_blank"} ><li className='list-item-footer-part'>YT</li></a>
           </ul>
           </div>
        </div>
    )
}
export default FooterPart