import LogOutButton from '../LogOutButton'
import { Link } from 'react-router-dom'

function UserNav() {
    return (
        <div className="flexRow jcCntr goastBg">
            <div className="flexMinWidthCol minWidthNav alignCntr">
                <Link to="/" className='noTextDecoration'><p>Home</p></Link>
                <Link to="/userTotalBooks" className="noTextDecoration"><p>Total Books</p></Link>
                <Link to="/myRequetedBooks" className="noTextDecoration"><p>My Requests</p></Link>
                <Link to="/myIssuedBooks" className="noTextDecoration"><p>Borrowed Books</p></Link>
                {<LogOutButton />}
            </div>
        </div>
    )
}
export default UserNav