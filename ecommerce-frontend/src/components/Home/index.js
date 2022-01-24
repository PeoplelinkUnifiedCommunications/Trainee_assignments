import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Content from '../../components/Content'

import './index.css'

const Home = ()=>{
    const navigate = useNavigate();
    const [componentName,setComponentName] = useState('')

    const onClickComponent=e=>{
        const  {name} = e.target
        setComponentName(name)
    }

    return(
        <div className="home-container">
            <nav className="navbar">
                <h1 className="navbar-heading">Ecommerce Application</h1>
            </nav>
            <div className="home-content">
                <div className="left-navigation-container">
                    <div className="left-navbar">
                        <button className="left-navbar-button border-none" name="create-product" type="button" onClick={onClickComponent}>Create products</button>
                        <button className="left-navbar-button border-none" name="product-list" type="button" onClick={onClickComponent}>Product List</button>
                        <button className="left-navbar-button " type="button" name="cart" onClick={onClickComponent}>Cart</button>
                    </div>
                    <div className="logout-container">
                    <button className="left-navbar-button" type="button" onClick={()=>navigate('/',{ replace: true })}>logout</button>
                    </div>
                </div>
                <Content componentName = {componentName}/>
            </div>
        </div>
    )
}

export default Home