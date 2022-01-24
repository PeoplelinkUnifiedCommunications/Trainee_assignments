import {useState,useEffect} from 'react'
import { getProductsList } from '../../Api'
import Product from '../../components/Product'

import './index.css'



const ProductsList = () =>{
    const [productsList,setProductsList] = useState([])

    useEffect(()=>{
        const getData =async ()=>{
            const response = await getProductsList()
            setProductsList(response.data)
        }
        getData()
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
        <div>
            {productsList.length===0?renderEmptyView():renderProductsList()}
        </div>
    )
}

export default ProductsList