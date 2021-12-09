import "./index.css"

const ViewUserDetails = (props) => {
    
    function getUserFromLocalStorage (){
        let userData = JSON.parse(localStorage.getItem("userData"))
        console.log(userData)
    }
    getUserFromLocalStorage()

    return(
        <>
            <li className="list-item">
                <p className="user-name">{name}</p>
                <p className="user-name email-text">{email}</p>
                <p className="user-name">{age}</p>
            </li>
            <hr className="line"/>
        </>
    
    )
}

export default ViewUserDetails;