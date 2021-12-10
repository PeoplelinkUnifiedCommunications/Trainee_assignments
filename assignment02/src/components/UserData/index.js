import './index.css'

const UserData = props =>{
    const {eachData} = props
    const {name,email,dob} = eachData
    const Dob = new Date(dob)
    const presentDay = new Date()
    const dobYear = Dob.getFullYear()
    const presentYear = presentDay.getFullYear()
    const age = presentYear-dobYear
    return(
        <>
        <hr className="line"/>
        <li className="data-list-item">
            <p className="data-item">{name}</p>
            <p className="data-item">{email}</p>
            <p className="data-item">{age}</p>
        </li>
       </>
    )
}

export default UserData