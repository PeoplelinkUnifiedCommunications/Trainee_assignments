import {Link} from 'react-router-dom'
import ListContext from "../Context/ListContext"

import '../css/List.css'

function List(){
    return <ListContext.Consumer>
    {
        value=>{
            const {list}=value
            let data = list.length === 0 === null ? true : false
    return(
        <div className="container">
            <ul className="container1">
                <li className="nameContainer">
                    <h1 className="name">Name</h1>
                    <h1 className="email">Email</h1>
                    <h1 className="age">Age</h1>                                    
                </li>
                {data? (<li className="nameContainer"><p>No data</p></li>) : (list.map(each =>(
                    <>
                        <li className="nameContainer">
                            <p className="name">{each.name}</p>
                            <p className="email">{each.email}</p>
                            <p className="age">{each.age}</p>
                        </li>
                    </>
                )))         }
            </ul> 
            <button className="button"><Link to="/Create">Create</Link></button>
        </div>        
    )
    }
}
    </ListContext.Consumer>
    
}
export default List;
