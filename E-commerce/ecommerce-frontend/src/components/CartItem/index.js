import { useEffect, useState} from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {updateCartQuantity } from '../../Api'

import './index.css'


const CartItem = props=>{
    
    const {_id,product_name,
        product_image_url,
        retail_price,
        selected_quantity,
        quantity} = props.cartItemDetails
        const [ count,setCount] = useState(selected_quantity)

        const onClickDecrement=()=>{
              if(count>1){
                  setCount(count-1)
                  
              }
        }

        const onClickIncrement=()=>{
            if(count<quantity){
                setCount(count+1)
                
            }
        }

        const updateQuantity = ()=>{
              const value={
                selected_quantity:count
              }
              updateCartQuantity(_id,value)
        }

        useEffect(()=>{
          const  fetch= updateQuantity()
          return fetch
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[count])

        

    return(
        <li className="cart-item">
          <img className="cart-product-image" src={product_image_url} alt={product_name} />
          <p className="cart-product-title">{product_name}</p>
          <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickDecrement}
              >
               -
              </button>
              <p className="cart-quantity">{count}</p>
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickIncrement}
              >
                +
              </button>
            </div>
            <div className="total-price-container">
              <p className="cart-total-price">Rs {retail_price* count}/-</p>
            </div>
          <button
            className="remove-button"
            type="button"
            onClick={()=>props.deleteItem(_id)}
          >
           <AiOutlineDelete color="#616E7C" size={20} />
          </button>
        </li>
    )
}

export default CartItem