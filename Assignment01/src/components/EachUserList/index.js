import { differenceInDays } from 'date-fns'

import "./index.css"

const EachUserList = (props) => {
    const {eachUser} = props
    const {name, email, dob} = eachUser
    const today = new Date()
    let days = differenceInDays(new Date(today), new Date(dob))
    let age = Math.floor(days/365)
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

export default EachUserList;