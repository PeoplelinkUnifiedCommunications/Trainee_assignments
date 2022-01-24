import {useState,useEffect} from 'react'

import './index.css'


const Product=(props)=>{
    const {product_name,
        product_image_url,
        retail_price,
        selected_quantity,
        quantity,
        description} = props.product

        const [count,setCount] = useState(selected_quantity)
        const [msg,setMsg] = useState("")

        useEffect(()=>{
            if (quantity-count<=5 && quantity-count>=1){
                setMsg(`Hurry ${quantity-count} only left`)
            }else if(quantity-count===0){
                setMsg("out of stock")
            }
        },[count])
        


        const decreaseCount=()=>{
            if (count > 1){
                setCount(count-1)
            }
        }

        const increaseCount=()=>{
            if (count < quantity){
                setCount(prev =>prev+1)
            }else{
                setCount(count)
            }
        }

    return(
        <li className="product-item">
        <img src={product_image_url} alt="product" className="thumbnail" />
        <div className="product-item-content">
            <h1 className="title">{product_name}</h1>
            <p className="price">Rs {retail_price}/-</p>
            <div className="quantity-container">
                <button type="button" onClick={decreaseCount}>-</button>
                <p className="count">{count}</p>
                <button type="button" onClick={increaseCount}>+</button>
            </div>
            {msg===""?null:<p className="message">{msg}</p>}
            <p className="description">{description}</p>
            <button type="button" className="add-to-cart">Add To Cart</button>
        </div>
      </li>
    )
}

export default Product