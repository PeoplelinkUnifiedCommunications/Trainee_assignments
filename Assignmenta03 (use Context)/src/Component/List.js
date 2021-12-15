import {Link} from 'react-router-dom'
import ListContext from "../Context/ListContext"
import {useContext} from 'react';
import '../css/List.css'

function List(){ 
    const value = useContext(ListContext)
    return(
        <div className="container">
            <ul className="container1">
                <li className="nameContainer">
                    <h1 className="name">Name</h1>
                    <h1 className="email">Email</h1>
                    <h1 className="age">Age</h1>                                    
                </li>                
                {value.list.map(each =>(
                    <li className="nameContainer">
                        <p className="name">{each.name}</p>
                        <p className="email">{each.email}</p>
                        <p className="age">{each.age}</p>
                    </li>
                ))}
            </ul> 
            <button className="button"><Link to="/Create">Create</Link></button>
        </div>        
    )
    }   

export default List;