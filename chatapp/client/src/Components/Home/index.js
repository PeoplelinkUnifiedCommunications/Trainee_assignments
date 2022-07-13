import TextField from '@material-ui/core/TextField';
import { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import Axios from "axios"
import { config } from '../../Common/Urls';
import { useNavigate } from 'react-router-dom'
import { store } from '../../App';

function Home() {
    const navigate = useNavigate()
    const [token, setToken] = useContext(store)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        if (email.endsWith("@gmail.com")) {
            Axios.post(`${config.url}/create`,
                { email: email, password: password })
                .then((res) => {
                    console.log("register response", res)
                    setToken(email)
                    console.log(token)
                    navigate("/friends")
                }).catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div className="bg-container">
            <h1>Login</h1>
            <div>
                <form onSubmit={handleLogin}>
                    <div>
                        <TextField
                            required
                            margin='dense'
                            type="email"
                            label="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <TextField
                            required
                            margin='dense'
                            type="password"
                            label="Password"
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                            variant="outlined"
                        />
                    </div>
                    <div>
                        <Button type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Home