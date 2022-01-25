import { useNavigate } from "react-router-dom"
import {Link} from 'react-router-dom'
import './index.css'

const LeftNavigationBar =()=>{
    const navigate = useNavigate()

    return(
            <div className="left-navigation-container">
                <div className="left-navbar">
                    <button className="left-navbar-button border-none" name="create-product" type="button" ><Link to='/createProduct' className="link"> Create products</Link></button>
                    <button className="left-navbar-button border-none" name="product-list" type="button" ><Link to='/productsList' className="link">Product List</Link></button>
                    <button className="left-navbar-button " type="button" name="cart" ><Link to='/cartList' className="link">Cart</Link></button>
                </div>
                <div className="logout-container">
                    <button className="left-navbar-button" type="button" onClick={()=>navigate('/',{ replace: true })}>logout</button>
                </div>
            </div>
    )
}

export default LeftNavigationBar