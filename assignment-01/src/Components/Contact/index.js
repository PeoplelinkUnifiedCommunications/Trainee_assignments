import { BsArrowRight} from "react-icons/bs"
import './index.css'

function ContactMe(){

    return(
        <div className="contact-me-part-bg-container">
            <div className="contact-me-part-container">
            <h1 className="contact-heading">Send me a message!</h1>
            <p className="contact-paragraph">Got a question or proposal, or just want to say hello? Go ahead.</p>
           <div className='input-container'>
                <div className="input-lable-container">
                    <label htmlFor='NameOfPerson'>Your Name</label>
                    <input id='NameOfPerson' className="input-style" placeholder='Enter Your Name' type={"text"}/>
                </div> 
                <div className='input-lable-container'>
                    <label htmlFor='EmailOfPerson'>Email Address</label>
                    <input id="EmailOfPerson" className='input-style' placeholder='Enter Your Email Address' type={"text"}/>
                </div>  
           </div>
           <div className='textarea-lable-container'>
                <label htmlFor='MessageOfPerson'>Your Message</label>
                <textarea className='text-area-input' placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?" id="MessageOfPerson" name="message" required="required" rows="4" minlength="30"/>
            </div>
            <div className="button-container">
            <a  href='https://formspree.io/hello@olaolu.dev'>
                <button type="button" className='contact-shoot-button'>SHOOT
                    <span  className="contact-button-arrow"><BsArrowRight/></span>
                </button>   
            </a>
            </div>
            </div>
          
        </div>
    )
}
export default ContactMe



            
            