import { BiMenuAltRight} from "react-icons/bi"
import { Link } from "react-router-dom"
import FooterPart from "../FooterPart"

import './index.css'


function Work (){
    return(
        <div>
            <div className="menu-navbar-conatiner">
              <h1>Olaolu</h1>
              <Link to="/workmenu">
            <BiMenuAltRight className="menu-icon"/>
            </Link>
            </div>
            <div className="work-part-content-container">
                <h1 className="work-card-heading">/work.</h1>
                <p>Selected projects i've worked on in the past.</p>    
            </div>
            <div className="work-part-cards-container">
                <div className="works-done-each-card">
                    <div className="word-card-project-logo-container">
                        <img alt="hellotax" src="https://www.hellotax.com/wp-content/uploads/2020/03/logo@2x1.png"/>
                    </div>
                    <div className="word-card-project-link-container"> 
                        <h1>Hellotax</h1>
                        <a rel="noreferrer" target={"_blank"} href="https://app.hellotax.com/login">app.hellotax.com</a>
                    </div>
                </div>
                <div className="works-done-each-card">
                    <div className="word-card-project-logo-container">
                        <img alt="hellotax" src="https://media-exp1.licdn.com/dms/image/C4D0BAQH-ZWjZE8lhWA/company-logo_200_200/0/1526400065042?e=2147483647&v=beta&t=WhO-uQcQlyIQNzONXbGgai5SnYeLW9wJsjhGFx0pcLc"/>
                    </div>
                    <div className="word-card-project-link-container"> 
                        
                        <a rel="noreferrer" target={"_blank"} href="https://app.hellotax.com/login"><button className="connetar-button" type="button">Conectar</button></a>
                    </div>
                </div>
                <div className="works-done-each-card">
                    <div className="word-card-project-logo-container">
                        <img alt="hellotax" src="https://www.hellotax.com/wp-content/uploads/2020/03/logo@2x1.png"/>
                    </div>
                    <div className="word-card-project-link-container"> 
                        <h1>Hellotax</h1>
                        <a rel="noreferrer" target={"_blank"} href="https://app.hellotax.com/login">app.hellotax.com</a>
                    </div>
                </div>
                <div className="works-done-each-card">
                    <div className="word-card-project-logo-container">
                        <img alt="hellotax" src="https://www.hellotax.com/wp-content/uploads/2020/03/logo@2x1.png"/>
                    </div>
                    <div className="word-card-project-link-container"> 
                        <h1>Hellotax</h1>
                        <a rel="noreferrer" target={"_blank"} href="https://app.hellotax.com/login">app.hellotax.com</a>
                    </div>
                </div>
                <div className="works-done-each-card">
                    <div className="word-card-project-logo-container">
                        <img alt="hellotax" src="https://www.hellotax.com/wp-content/uploads/2020/03/logo@2x1.png"/>
                    </div>
                    <div className="word-card-project-link-container"> 
                        <h1>Hellotax</h1>
                        <a rel="noreferrer" target={"_blank"} href="https://app.hellotax.com/login">app.hellotax.com</a>
                    </div>
                </div>
                <div className="works-done-each-card">
                    <div className="word-card-project-logo-container">
                        <img alt="hellotax" src="https://www.hellotax.com/wp-content/uploads/2020/03/logo@2x1.png"/>
                    </div>
                    <div className="word-card-project-link-container"> 
                        <h1>Hellotax</h1>
                        <a rel="noreferrer" target={"_blank"} href="https://app.hellotax.com/login">app.hellotax.com</a>
                    </div>
                </div>
                <div className="works-done-each-card">
                    <div className="word-card-project-logo-container">
                        <img alt="hellotax" src="https://www.hellotax.com/wp-content/uploads/2020/03/logo@2x1.png"/>
                    </div>
                    <div className="word-card-project-link-container"> 
                        <h1>Hellotax</h1>
                        <a rel="noreferrer" target={"_blank"} href="https://app.hellotax.com/login">app.hellotax.com</a>
                    </div>
                </div>
            </div>
            <div>
                <FooterPart/>
            </div>
        </div>
    )
}
export default Work