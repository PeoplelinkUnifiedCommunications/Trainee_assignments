import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai";
import "./index.css"

const FormContainer=()=>{
    var BlurMassege;
    const blurNameInput=(event)=>{
        if(event.target.value===""){
            BlurMassege=true
            console.log(BlurMassege)
        }else{
            BlurMassege=false
            console.log(BlurMassege)
        }
    }
    const nameInput=(event)=>{
        console.log(event.target.value)
    }
    
    

    
    return <div className="bg-container">
        <div className="from-container">
            <form className="form">
                <label htmlFor="text">Name</label>
                <div className="input-container" id="text">
                    <div className="icon-container">
                        <FaUserAlt className="image"/>
                    </div>
                    <input type="text" id="text" className="inputText" onChange={nameInput} onBlur={blurNameInput}/>
                </div>
                {console.log(BlurMassege)}
                <label htmlFor="email">Email</label>
                <div className="input-container" id="email">
                    <div className="icon-container">
                        <AiFillMail className="image"/>
                    </div>
                    <input type="text" id="text" className="inputText"/>
                </div>
                <label htmlFor="date">Date Of Birth</label>
                <div className="input-container" id="date">
                    <div className="icon-container">
                        <AiFillMail className="image"/>
                    </div>
                    <input type="text" id="text" className="inputText"/>
                </div>
                
                <button type="submit" className="btn"><Link to="/">Submit</Link></button>
            
            </form>

        </div>
    </div>
}

export default FormContainer 