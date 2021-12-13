import {Link} from 'react-router-dom'
import '../css/List.css'

function List(){
    let userDetailsList = JSON.parse(localStorage.getItem("name"))
    let data = userDetailsList === null ? true : false
    console.log(data)
    return(
        <div className="container">
            <ul className="container1">
                <li className="nameContainer">
                    <h1 className="name">Name</h1>
                    <h1 className="email">Email</h1>
                    <h1 className="age">Age</h1>                                    
                </li>
                {data? (<li className="nameContainer"><p>No data</p></li>) : (userDetailsList.map(each =>(
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
export default List;
