import "./index.css";
import { useNavigate } from "react-router-dom";
  

const Footer=()=>{
    const navigation = useNavigate()
    const NavigateToSignUp=()=>{
        navigation('/signup')
    }
    const NavigateToLogin=()=>{
        navigation('/')
    }
    
    return(
        <div className="footer-container">
            <button onClick={NavigateToLogin} >Login Data</button>
            <button onClick={NavigateToSignUp}>SignUp Data</button>
        </div>
    )
}
export default Footer;