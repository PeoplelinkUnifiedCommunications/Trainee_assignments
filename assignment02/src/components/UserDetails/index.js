
import { Link } from "react-router-dom"
import UserData from "../UserData"
import "./index.css"
import { connect } from "react-redux";

function UserDetails({list}) {
    
    let data;
    if(list.length===0){
        data=false
    }else{
        data=true
    }
    console.log(list)
    return (<div className="bg-container1">
        <div className="from-container1">
            <ul className="list">
            <li className="list-item">
                <h1 className="heading ">NAME</h1>
                <h1 className="heading ">Email</h1>
                <h1 className="heading ">Date</h1>
            </li>
            
            {data? (list.map(each=><UserData className="list-item1" eachData={each} key={each.id}/>
                )):<li className="no-data"><h1 className="heading">No data Found</h1></li>}
            
            </ul>
            <button className="btn2"><Link to="/login" className="link">Create</Link></button>
        </div>
    </div>
          
     )
    
}
const mapStateToProps=(state)=>({
    list:state,
    
})
export default connect(mapStateToProps)(UserDetails);

