import {Link} from 'react-router-dom'
import './index.css'


const Product=(props)=>{
    const {_id,product_name,
        product_image_url,
        retail_price} = props.product
    return(
        <Link to={`/products/${_id}`} className="link-item">
            <li className="product-item">
            <img src={product_image_url} alt="product" className="thumbnail" />
            <div className="product-item-content">
                <div>
                    <h1 className="title">{product_name}</h1>
                    <p className="price">Rs {retail_price}/-</p>
                </div>
            </div>
        </li>
      </Link>
    )
}

export default Product