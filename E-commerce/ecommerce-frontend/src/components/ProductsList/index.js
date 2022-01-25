import {useState,useEffect} from 'react'
import { getProductsList } from '../../Api'
import Product from '../../components/Product'
import NavBar from '../../components/Navbar'
import LeftNavigationBar from "../LeftNavigationBar"

import './index.css'



const ProductsList = () =>{
    const [productsList,setProductsList] = useState([])

    const getData =async ()=>{
        const response = await getProductsList()
        setProductsList(response.data)
    }

    useEffect(()=>{
        const data = getData()
        return data
    },[])


    const renderEmptyView=()=>{
        return(
            <div className="no-products-view">
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                className="no-products-img"
                alt="no products"
                />
                <h1 className="no-products-heading">No Products Found</h1>
                <p className="no-products-description">
                We could not find any products. Try to add products.
                </p>
            </div>
        )
    }

    const renderProductsList=()=>{
        return(
            <div className="all-products-container">
                <ul className="products-list">
                    {productsList.map(each=><Product product={each} key={each._id}/>)}
                </ul>
            </div>

                
        )
    }

    return (
        <div className="home-container">
            <NavBar/>
            <div className="home-content">
                <LeftNavigationBar/>
                <div className="products-list-container">
                    {productsList.length===0?renderEmptyView():renderProductsList()}
                </div>
            </div>
        </div>
        
    )
}

export default ProductsList