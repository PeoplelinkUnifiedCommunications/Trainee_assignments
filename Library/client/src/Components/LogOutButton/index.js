import { store } from '../../App'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Button from '@material-ui/core/Button';

function LogOutButton() {
    const [token, setToken] = useContext(store)
    const navigate = useNavigate()

    const handleLogout = () => {
        setToken(null)
        console.log(token, "...logged_out")
        localStorage.removeItem("TOKEN")
        navigate("/login")
    }

    return (
        <div>
            <Button onClick={handleLogout} variant="contained" color="secondary">
                LogOut
            </Button>
        </div>
    )
}
export default LogOutButton