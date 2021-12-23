
import { Link } from "react-router-dom"
import UserData from "../UserData"
import "./index.css"
import { connect } from "react-redux";
import { useState } from "react";

function UserDetails({list}) {
    let [search,setSearch]=useState("")
    
    let data;
    if(list.length===0){
        data=false
    }else{
        data=true
    }
    
    const filteredData = list.filter(item =>
		Object.keys(item).some(key => {
           if (key!=="id"){
               return (item[key].toLowerCase()).includes(search.toLowerCase())
           }else{
               return false
           }
        }
	))
    return (<div className="bg-container1">
        <div className="from-container1">
            <input type="search" className="search" onChange={e=>setSearch(e.target.value)} />
            <ul className="list">
            <li className="list-item">
                <h1 className="heading ">NAME</h1>
                <h1 className="heading ">Email</h1>
                <h1 className="heading ">Age</h1>
            </li>
            <hr className="line" />
            {data? (filteredData.map(each=><UserData className="list-item1" eachData={each} key={each.id}/>
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
