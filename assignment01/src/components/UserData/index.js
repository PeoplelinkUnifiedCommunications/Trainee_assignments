import './index.css'

const UserData = props =>{
    const {eachData} = props
    const {name,email,date} = eachData
    return(
        <>
        <hr className="line"/>
        <li className="data-list-item">
            <p className="data-item">{name}</p>
            <p className="data-item">{email}</p>
            <p className="data-item">{date}</p>
        </li>
       </>
    )
}

export default UserData