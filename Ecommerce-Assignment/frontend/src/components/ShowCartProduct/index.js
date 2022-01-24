import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from "../../axiosbaseurl";

const ShowCartProduct = (props) => {
    const { product, onDecreaseTotalPrice, onIncreaseTotalPrice } = props;

    const [count, setCount] = useState(1);

    const onClickIncrease = () => {
        setCount(count + 1);
        onIncreaseTotalPrice(product.price);
    };

    const onClickDcrease = () => {
        if (count === 1) {
            setCount(1);
        } else {
            setCount(count - 1);
            onDecreaseTotalPrice(product.price);
        }
    };

    return (
        <div className="cart-product-box">
            <div className="cart-image-box">
                <img
                    src={product.url}
                    className="cart-img-size"
                    alt="product"
                />
                <div className="quantity_container">
                    <p className="count-button" onClick={onClickDcrease}>
                        -
                    </p>
                    <p className="count">{count}</p>
                    <p className="count-button" onClick={onClickIncrease}>
                        +
                    </p>
                </div>
                <button className="product-button buy-now">Remove Item</button>
            </div>
            <div className="cart-product-details-box">
                <h1 className="product-heading">{product.productName}</h1>
                <p className="price">
                    Price: <span className="price-span">{product.price}/-</span>
                </p>
                <p className="price">
                    Quantity: <span className="description-span">{count}</span>
                </p>
                <p className="price">
                    Total {count} items Price:{" "}
                    <span className="description-span">
                        {count * product.price}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ShowCartProduct;
