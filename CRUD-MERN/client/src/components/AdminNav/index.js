import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import { store } from "../../App";
import { useContext } from "react";

function AdminNav() {

    const navigate = useNavigate()
    const [token, setToken] = useContext(store)
    console.log(token)

    const handleLogout=()=>{
        setToken("")
        navigate("/login")
    }

    return (
        <div className="flexRow">
            <div className="flexMinWidthCol alignCntr">
                <h2><Link className='noTextDecoration' to="/myprofile">Home</Link></h2>
                <h2><Link className='noTextDecoration' to="/addBook">Add Book</Link></h2>
                <h2><Link className='noTextDecoration' to="/getTotalBooks">Total Books</Link></h2>
                <h2><Link className='noTextDecoration' to="/usersList">Users</Link></h2>
                <h2><Link className='noTextDecoration' to="/requestedBooks">Requested Books</Link></h2>
                <h2><Link className='noTextDecoration' to="/totalIssuedBooks">Issued Books</Link></h2>
                <Button onClick={handleLogout} className="mrgnVLG" variant="contained">
                    LogOut
                </Button>
            </div>
        </div>
    )
}
export default AdminNav