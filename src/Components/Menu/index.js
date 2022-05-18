
import {GiTireIronCross} from 'react-icons/gi'
import './index.css'

function Menu(){
    return(
        <div className='menu-bg-container'>
            <div className='menu-header'>
                <h1>Olaolu</h1>
                <a href='/'><GiTireIronCross/></a>
            </div>
            <div className='menu-hello-part'>
            
             <ul className='menu-work-part-bg'>
                 <li className='list-item-footer-part'>
                    <a  className="anchor-element-style" href='/work'><button className='anchor-button' type='button'>My Work</button></a></li>
                 <li className='list-item-footer-part'><a  className="anchor-element-style" href='/shelf'><button className='anchor-button' type='button'>My Shelf</button></a></li>
                 <li className='list-item-footer-part'><a  className="anchor-element-style" href='/resume'><button className='anchor-button' type='button'>My Resume</button></a></li>
             </ul>
             <ul className='menu-hello-part-bg'>
                 <li className='list-item-footer-part say-hello-menu'>SAY HELLO</li>
                 <li className='list-item-footer-part'>hello@olaolu.dev</li>
                 <li className='list-item-footer-part'>
                 <a  className="anchor-element-style" href='/telegram'><button className='anchor-button' type='button'>t.me/mrolaolu</button></a></li>
             </ul>
            </div>
            <div className='menu-ul-bg-container'>
            <ul className='ul-of-footer-footer-part'>
               <li className='list-item-footer-part'>
                    <a className="anchor-element-style" rel='noreferrer' href="https://web.telegram.org/" target={"_blank"}>
                       <button className='anchor-button' type='button'>TW</button>
                    </a>
                </li>
               <li className='list-item-footer-part'><a className="anchor-element-style" rel='noreferrer' href="https://github.com/login" target={"_blank"}>
                       <button className='anchor-button' type='button'>GH</button>
                    </a></li>
               <li className='list-item-footer-part'><a className="anchor-element-style" rel='noreferrer' href="https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" target={"_blank"}>
                       <button className='anchor-button' type='button'>LN</button>
                    </a></li>
               <li className='list-item-footer-part'>
               <a className="anchor-element-style" rel='noreferrer' href="https://www.youtube.com/" target={"_blank"}>
                       <button className='anchor-button' type='button'>YT</button>
                    </a></li>
           </ul>
            </div>

        </div>
    )
}
export default Menu

