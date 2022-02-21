import {Link} from 'react-router-dom'
import '../css/List.css'
function Listitems(){
    return(
        <div className="container">
            <div className="container1">
                <div className="nameContainer">
                    <h1 className="name">Name</h1>
                </div>
                <div className="nameContainer">
                    <h1>Email</h1>
                </div>  
                <div className="nameContainer">
                    <h1>Age</h1>
                </div>
            </div> 
            <button className="button"><Link to="/dashboard">Create</Link></button>       
        </div>        
    )
}
export default Listitems;