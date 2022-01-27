import React from "react";
import "./index.css";

const ShowCartProduct = (props) => {
    const { product, onClickDcrease, onClickIncrease, removeItem } = props;

    return (
        <div className="cart-product-box">
            <div className="cart-image-box">
                <img
                    src={product.url}
                    className="cart-img-size"
                    alt="product"
                />
                <div className="quantity_container">
                    <p
                        className="count-button"
                        onClick={() =>
                            onClickDcrease(product._id, product.quantity)
                        }
                    >
                        -
                    </p>
                    <p className="count">{product.quantity}</p>
                    <p
                        className="count-button"
                        onClick={() =>
                            onClickIncrease(product._id, product.quantity)
                        }
                    >
                        +
                    </p>
                </div>

                <button
                    className="product-button buy-now"
                    onClick={() => removeItem(product)}
                >
                    Remove Item
                </button>
            </div>
            <div className="cart-product-details-box">
                <h1 className="product-heading">{product.productName}</h1>
                <p className="price">
                    Price: <span className="price-span">{product.price}/-</span>
                </p>
                <p className="price">
                    Quantity:{" "}
                    <span className="description-span">{product.quantity}</span>
                </p>
                <p className="price">
                    Total {product.quantity} items Price:{" "}
                    <span className="description-span">
                        {product.quantity * product.price}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ShowCartProduct;
