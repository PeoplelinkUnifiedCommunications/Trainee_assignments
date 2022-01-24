import React, { useEffect, useState } from "react";
import axios from "../../axiosbaseurl";
import ShowCartProduct from "../ShowCartProduct";
import "./index.css";

const MyCart = () => {
    const [cartProductList, setCartProductList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios
            .get("/getcartproducts")
            .then((response) => setCartProductList(response.data))
            .catch((error) => console.log(error.message));
    }, []);
    console.log(cartProductList);

    let cost = 0;
    useEffect(() => {
        const onSetTotalPrice = () => {
            for (let product of cartProductList) {
                const { quantity, price } = product;
                const newCost = quantity * price;
                cost = cost + newCost;
            }
        };
        onSetTotalPrice();
        setTotalPrice(cost);
    }, [cartProductList]);

    const onIncreaseTotalPrice = (price) => {
        setTotalPrice((prevState) => prevState + price);
    };

    const onDecreaseTotalPrice = (price) => {
        setTotalPrice((prevState) => prevState - price);
    };

    return (
        <div className="cart-main">
            <h1 className="heading">Cart Items</h1>

            {cartProductList.length === 0 ? (
                <p>No products are available</p>
            ) : (
                cartProductList.map((eachProduct) => (
                    <ShowCartProduct
                        onIncreaseTotalPrice={onIncreaseTotalPrice}
                        onDecreaseTotalPrice={onDecreaseTotalPrice}
                        product={eachProduct}
                        key={eachProduct._id}
                    />
                ))
            )}
            {cartProductList.length !== 0 && (
                <div className="price-footer">
                    <div>
                        <p className="total-price">Total Price: {totalPrice}</p>
                    </div>
                    <button className="product-button buy-now">
                        Place Order
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyCart;
