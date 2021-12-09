import './index.css'

const FormData = props =>{
    const {eachData} = props
    const {name,email,dateOfBirth} = eachData
    const dob = new Date(dateOfBirth)
    const presentDay = new Date()
    const dobYear = dob.getFullYear()
    const presentYear = presentDay.getFullYear()
    const age = presentYear-dobYear
    return(
        <><li className="data-list-item">
            <p className="data-item">{name}</p>
            <p className="data-item">{email}</p>
            <p className="data-item">{age}</p>
        </li>
        <li className="mobile-data-list-item">
            <p className="mobile-data-item">NAME: {name}</p>
            <p className="mobile-data-item">EMAIL: {email}</p>
            <p className="mobile-data-item">AGE: {age}</p>
        </li></>
    )
}

export default FormData