
import './index.css'

const FormData =(props)=>{
    const {data} = props
    const {name,email,dob} = data
    const userEnteredData = new Date(dob)
    const currentDate = new Date()
    const age = currentDate.getFullYear()-userEnteredData.getFullYear()
   
    return(
        <>
            <hr className="h-line"/>
            <div className="list-content">
                <li className="name-list-item list-item">{name}</li>
                <li className="email-list-item list-item">{email}</li>
                <li className="age-list-item list-item">{age}</li>
            </div>
        </>
        
    )
}
export default FormData
