import {useState,useEffect} from 'react'
import { getCartList} from '../../Api'
import CartItem from '../../components/CartItem'
import { deleteCartItem } from '../../Api'
import NavBar from '../../components/Navbar'
import LeftNavigationBar from "../LeftNavigationBar"
import './index.css'


const CartList = ()=>{
    const [cartList,setCartList] = useState([])

    const getCartData = async  ()=>{
        const response = await getCartList()
        setCartList(response)
    }

    useEffect(()=>{
        const fetch = getCartData()
        return fetch
    })


    const renderEmptyCartView = () =>{
        return (
            <div className="cart-empty-view-container">
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                className="cart-empty-image"
                alt="cart empty"
                />
                <h1 className="cart-empty-heading">Your Cart Is Empty</h1>
                <p className="cart-empty-description">Goto products List to add items to cart</p>
            </div>
        )
    }


    const deleteItem = async (id)=>{
        const data = await deleteCartItem(id)
        setCartList(data)
    }

    

    const renderCartSummary=()=>{
        const noOfItems = cartList.length
        let totalPrice = 0
        cartList.forEach(eachCartItem => {
            totalPrice += eachCartItem.retail_price * eachCartItem.selected_quantity
        })
        return(
            <>
            <div className="cart-summary-container">
                <h1 className="order-total-value">
                <span className="order-total-label">Order Total:</span> Rs{' '}
                {totalPrice}
                </h1>
                <p className="total-items">{noOfItems} Items in cart</p>
                <button type="button" className="checkout-button d-sm-none">
                Checkout
                </button>
            </div>
            <button type="button" className="checkout-button d-lg-none">
                Checkout
            </button>
            </>
        )
    }

    const renderCartListView = ()=>{
        return(
            <div className="cart-content-container">
                <h1 className="cart-heading">My Cart</h1>
                <ul className="cart-list">
                {cartList.map(eachCartItem => (
                    <CartItem key={eachCartItem._id} cartItemDetails={eachCartItem} deleteItem = {deleteItem}/>
                ))}
                </ul>
                {renderCartSummary()}
          </div>
        )
    }

    return(
        <div className="home-container">
            <NavBar/>
            <div className="home-content">
                <LeftNavigationBar/>
                <div className="cart-container">
                    {cartList.length ===0?renderEmptyCartView():renderCartListView()}
                </div>
            </div>
        </div>
    )
}

export default CartList