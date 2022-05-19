import { BsArrowRight} from "react-icons/bs"
import './index.css'

function About(){
    return(
    <div className="about-bg">
            <div className='about-part1-bg-container'>
                <h1>I build &amp; <br/> design stuff</h1>
                <p className="about-paragraph">Open source <br/> projects, web apps <br/> and experimentals.</p>
                <a className="about-button-container" href='/work'>
                    <button type="button" className='about-button'>SEE MY WORK
                        <span  className="about-button-arrow"><BsArrowRight/></span>
                    </button>   
                </a>
            </div>
            <hr/>
            <div className='about-part1-bg-container'> 
                <h1>I write, <br/> sometimes</h1>
                <p className="about-paragraph">About design, <br/> frontend dev, <br/> learning and life.</p>
                <a className="about-button-container" href='/shelf'>
                    <button type="button" className='about-button'>Read My Articles
                        <span  className="about-button-arrow"><BsArrowRight/></span>
                    </button>   
                </a>
            </div>
    </div>
    )
}
export default About