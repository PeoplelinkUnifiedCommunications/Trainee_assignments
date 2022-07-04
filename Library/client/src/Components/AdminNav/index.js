import LogOutButton from '../LogOutButton'
import { Link } from 'react-router-dom'

import "./styles.css"

function AdminNav() {
    return (
        <div className="flexRow jcCntr goastBg">
            <div className="flexMinWidthCol minWidthNav alignCntr">
                <Link to="/" className='noTextDecoration'><p>Home</p></Link>
                <Link to="/users" className="noTextDecoration"><p>Users</p></Link> 
                <Link to="/totalBooks" className="noTextDecoration"><p>Total Books</p></Link>
                <Link to="/requetedBooks" className="noTextDecoration"><p>New Requests</p></Link>
                <Link to="/issuedBooks" className="noTextDecoration"><p>Issued Books</p></Link>
                <Link to="/addBook" className='noTextDecoration'><p>Add Book</p></Link>
                {<LogOutButton />}
            </div>
        </div>
    )
}
export default AdminNav