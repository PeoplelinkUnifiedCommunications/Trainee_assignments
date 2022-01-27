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
    //console.log(cartProductList);

    const onClickIncrease = async (id, cartQuantity) => {
        try {
            await axios
                .get(`/getproduct/${id}`)
                .then(async (response) => {
                    if (response.data.quantity > cartQuantity) {
                        await axios
                            .put("/increasequantity", { id })
                            .then((response) =>
                                setCartProductList(response.data)
                            )
                            .catch((error) => console.log(error.message));
                    } else {
                        alert("Item not available");
                    }
                })
                .catch((error) => console.log(error.message));
        } catch (error) {
            console.log(error.message);
        }
    };

    const onClickDcrease = async (id, cartQuantity) => {
        try {
            if (cartQuantity > 1) {
                await axios
                    .put("/decreasequantity/", { id })
                    .then((response) => setCartProductList(response.data))
                    .catch((error) => console.log(error.message));
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        let cost = 0;
        for (let product of cartProductList) {
            const { quantity, price } = product;
            cost += quantity * price;
        }
        setTotalPrice(cost);
    }, [cartProductList]);

    const removeItem = async (product) => {
        try {
            await axios
                .post("/removeItem", product)
                .then((response) => setCartProductList(response.data))
                .catch((error) => console.log(error.message));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="cart-main">
            <h1 className="heading">Cart Items</h1>

            {cartProductList.length === 0 ? (
                <div className="no-products">
                    <h1>No products are available</h1>
                </div>
            ) : (
                cartProductList.map((eachProduct) => (
                    <ShowCartProduct
                        onClickIncrease={onClickIncrease}
                        onClickDcrease={onClickDcrease}
                        removeItem={removeItem}
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
