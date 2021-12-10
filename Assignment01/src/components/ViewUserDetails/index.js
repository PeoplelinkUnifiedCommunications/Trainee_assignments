import { Link } from "react-router-dom"

import EachUserList from "../EachUserList";

import "./index.css"

const ViewUserDetails = () => {
    // let data = [{name: "siva", email: "siva@gmail.com"}, {name: "chsiva", email: "santhu@gmail.com"}]
    // let stringifiedData = JSON.stringify(data)
    // // console.log(stringifiedData)
    // // console.log(typeof(stringifiedData))
    // localStorage.setItem("userData", stringifiedData)
    let userDetailsList = JSON.parse(localStorage.getItem("userData"))
    //console.log(userDetailsList)
    if (userDetailsList === null){
        userDetailsList = []
    }

    const users = userDetailsList.length === 0 ? true : false
   // 

    return(
        <div className="view-user-details-container">
            <ul className="user-details-list">
                <li className="list-item">
                    <p className="user-name text-weight">Name</p>
                    <p className="user-name email-text text-weight">Email</p>
                    <p className="user-name text-weight">Age</p>
                </li>
                <hr className="line"/>
                {users ? <p className="no-data">No Data Found</p> : 
                userDetailsList.map(eachUser => (<EachUserList eachUser={eachUser} key={eachUser.id} />))}
            </ul>
            <Link to="form"><button>Form</button></Link>
        </div>
    )
}

export default ViewUserDetails;