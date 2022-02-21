
import { useState } from 'react';
import {v4} from 'uuid';
import '../css/Login.css';
import {Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";

function Login(){
    const history = useHistory();
    const [name, setName] = useState("")
    const [Item, setItem] = useState([])
    const go=()=>{
         history.push("/dashboard");
    }
    
    const addItem = event =>{
        event.preventDefault();
        const data = {
            id : v4(),
            name,
        }
        setItem([...Item,data]);
        
    }
    console.log(Item)
    return(
        <div className="loginContainer">
            <div className="login">
                <form type="submit" onSubmit={addItem}>
                    <h1 className="heading">Login Page</h1>
                    <label htmlFor="name" className="name">Name : </label><br/>
                    <input type="text" id="name" className="nameInput" placeholder="Enter Name" value={name}
                    onChange = {event => setName(event.target.value)}/>
                    <br/><br/>
                    <label htmlFor="email" className="email">Email : </label><br/>
                    <input type="email" id="email" className="emailInput" placeholder="Enter Email"/>
                    <br/><br/>
                    <label htmlFor="dob" className="dob">Date of Birth : </label><br/>
                    <input type="date" id="dob" className="dobInput"/>
                    <br/><br/>
                    <Button  onClick={go()}> Add</Button>
                </form>
            </div>
        </div>
    )
}

export default Login;