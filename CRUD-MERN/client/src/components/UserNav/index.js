import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";
import { store } from "../../App";
import { useContext } from "react";

function UserNav() {
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
                <h2><Link className='noTextDecoration' to="/myIssuedBooks">Issued Books</Link></h2>
                <h2><Link className='noTextDecoration' to="/myRequestedBooks">Requested Books</Link></h2>
                <h2><Link className='noTextDecoration' to="/myBooks">My Year Books</Link></h2>
                <h2><Link className='noTextDecoration' to="/UserTotalBooks">Total Books</Link></h2>
                <Button onClick={handleLogout} variant="contained">
                    LogOut
                </Button>
            </div>
        </div>
    )
}
export default UserNav