import { useLocation } from "react-router-dom"

const Home=()=>{
    const location=useLocation()
    return(
        <div>
        <h1>Hello, {location.state.id} welcome to home page</h1>
    </div>
    )
}

export default Home