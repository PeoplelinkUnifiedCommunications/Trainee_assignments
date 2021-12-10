import { Link } from "react-router-dom"
import "./index.css"

function ListView() {
    let d=localStorage.getItem("userData")
    const parsedUserData=JSON.parse(d)
    console.log(parsedUserData)
    let data=true
    if(parsedUserData===null){
        data=false
    }else{
        data=true
    }

    return <div className="bg-container1">
        <div className="from-container1">
            <ul className="list">
            <li className="list-item">
                <h1 className="heading">NAME</h1>
                <h1 className="heading">Email</h1>
                <h1 className="heading">Date</h1>
            </li>
            
            {data? parsedUserData.map(each=><li className="list-item1">
                <h1 className="heading">{each.name}</h1>
                <h1 className="heading">{each.email}</h1>
                <h1 className="heading">{each.date}</h1>
            </li>):<li className="no-data"><h1 className="heading">No data Found</h1></li>}
            
            </ul>
            <button className="btn2"><Link to="/Create" className="link">Create</Link></button>
        </div>
    </div>
}

export default ListView