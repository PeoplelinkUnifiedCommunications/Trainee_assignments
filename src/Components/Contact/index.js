import { BsArrowRight} from "react-icons/bs"
import './index.css'

function ContactMe(){

    const SubmitForm =(event)=>{
        event.preventDefault()
        console.log("form submitted")
    }


    return(
        <div className="contact-me-part-container">
            
            <h1>Send me a message!</h1>
            <p>Got a question or proposal, or just want <br/> to say hello? Go ahead.</p>
            <form onSubmit={SubmitForm}> 
                <div className='email-name-part-container'>
                    <div className='input-container'>
                        <label htmlFor='NameOfPerson'>Your Name</label>
                        <input id='NameOfPerson' className='input-border-style' placeholder='Enter Your Name' type={"text"}/>
                    </div>
                    <div className='input-container'>
                        <label htmlFor='EmailOfPerson'>Email Address</label>
                        <input id="EmailOfPerson" className='input-border-style' placeholder='Enter Your Email Address' type={"text"}/>
                    </div>
                </div>
                <div className='input-msg-container'>
                    <label htmlFor='MessageOfPerson'>Your Message</label>
                    <input id="MessageOfPerson" className='input-msg-border-style' placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?' type={"text"}/>
                </div>
                <a  href='https://formspree.io/hello@olaolu.dev'>
                    <button type="Submit" className='contact-shoot-button'>SHOOT
                        <span  className="contact-button-arrow"><BsArrowRight/></span>
                    </button>   
                </a>
                
            </form>
          
        </div>
    )
}
export default ContactMe