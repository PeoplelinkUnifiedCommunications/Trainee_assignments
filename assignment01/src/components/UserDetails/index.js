import { useContext } from "react"
import { Link } from "react-router-dom"
import DataContext from "../Context"
import UserData from "../UserData"
import "./index.css"

function UserDetails() {
    

    
                const value=useContext(DataContext)
                let data;
                if(value.list.length===0){
                    data=false
                }else{
                    data=true
                }
                return (<div className="bg-container1">
        <div className="from-container1">
            <ul className="list">
            <li className="list-item">
                <h1 className="heading ">NAME</h1>
                <h1 className="heading ">Email</h1>
                <h1 className="heading ">Date</h1>
            </li>
            
            {data? (value.list.map(each=><UserData className="list-item1" eachData={each} key={each.id}/>
                )):<li className="no-data"><h1 className="heading">No data Found</h1></li>}
            
            </ul>
            <button className="btn2"><Link to="/login" className="link">Create</Link></button>
        </div>
    </div>
          
     )
    
}

export default UserDetails