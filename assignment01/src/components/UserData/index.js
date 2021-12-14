import './index.css'

const UserData = props =>{
    const {eachData} = props
    const {name,email,dob} = eachData
    const currYear = new Date().getFullYear()
    const birthYear = dob.split('/')
    let age = currYear - parseInt(birthYear[2])
    const m = new Date().getMonth() - new Date(dob).getMonth();
    if (m<0 || (m===0 && new Date().getDate()< new Date(dob).getDate())){
              age=age-1
    } 
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