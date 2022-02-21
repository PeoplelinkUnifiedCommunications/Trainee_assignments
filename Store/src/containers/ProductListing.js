import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../redux/actions/productsActions';
import ProductComponent from './ProductComponent';
import "./ProductListing.css"

const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()

    const fetchingAllProducts = async() => {
        const response = await axios.get("https://fakestoreapi.com/products").catch((error) => {
            console.log("Error :", error)
        })
        dispatch(setProducts(response.data))
    }

    useEffect(() => {
        fetchingAllProducts()
    }, [])



  return (
    <div className="productContainer"> 
       {Object.keys(products).length === 0 ? 
         <div id="loading">
             <h1>Loading</h1>
             </div> : 
        <ProductComponent/>
        }
       </div>

  )
}

export default ProductListing