import { AgeCalculator } from "@dipaktelangre/age-calculator";

import "./index.css"

const EachUserList = (props) => {
    const {eachUser} = props
    const {name, email, DateOfBirth} = eachUser
    let age = AgeCalculator.getAgeIn(new Date(DateOfBirth), "years")
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