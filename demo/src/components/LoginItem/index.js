import './index.css'

const LoginItem = props => {
  const {userDetails} = props
  const {name,email, dob} = userDetails
  const age=new Date().getFullYear()-new Date(dob).getFullYear()
  return (
       <li className="list-item">
           <p className="name">{name}</p>
           <p className="email">{email}</p>
           <p className="age">{age}</p>
       </li>
  )
}

export default LoginItem