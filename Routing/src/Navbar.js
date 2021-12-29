import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav">
            <Link to = "/Home"><div>Home</div></Link>
            <Link to = "/Dashboard"><div>Dashboard</div></Link>
            <Link to = "/About"><div>About</div></Link>
        </div>
    )
}
export default Navbar
