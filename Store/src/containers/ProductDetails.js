import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { selectedProduct, removeselectedProduct } from '../redux/actions/productsActions';
import { useDispatch, useSelector } from 'react-redux';
import "./ProductDetails.css"

const ProductDetails = () => {
    const {productId} = useParams()

    const product = useSelector((state) => state.allProducts.product)
    
    const {id, title, price, category, image, description} = product

    const dispatch = useDispatch()
    
    const fetchProductDetail = async() => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((error) => {
            console.log(error)
        })
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        fetchProductDetail()
        return () => {
            dispatch(removeselectedProduct())
        }
    }, [])

    console.log(product)

  return (
    <div className="productDetailsContainer">
        {Object.keys(product).length === 0 ? 
        <div>
            Loading
            </div>:<>
        <div className="productDetailsShellContainer">
            <div className="productDetailsImgContainer">
                <img src={image} alt={title}/>
            </div>
            <div className="productDetailsContents">
                <h2>{title}</h2>
                <h4>$ {price}</h4>
                <div className="productCategory">
                    <p>{category}</p>
                </div>
                <p>{description}</p>
                <div className="productDetailsButtonContainer">
                    <button type="button">Add to Cart</button>
                    <button type="button"><Link to="/" className="links">Home</Link></button>
                </div>
            </div>
        </div>
        </>}
    </div>
  )
}

export default ProductDetails