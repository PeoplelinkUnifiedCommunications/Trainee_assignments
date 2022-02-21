import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./ProductComponent.css"

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    // const {id, name} = products.allProducts.products[0]
    const renderList = products.map((product) => {
        return (
            <div  key={product.id}>
                <Link to={`/product/${product.id}`} className="componentLink">
                <div className="productContainerShell">
                    <div className="productShell">
                        <div className="productImgContainer">
                            <img src={product.image} alt={product.title}/>
                        </div>
                        <div className="productContentContainer">
                            <h3 className="ProductTitle">{product.title}</h3>
                            <div className="productSubContent">
                            <h2>${product.price}</h2>
                            <p>{product.category}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
            </div>
          )
    })
    return (
        <>{renderList}</>
        
    )
  
}

export default ProductComponent