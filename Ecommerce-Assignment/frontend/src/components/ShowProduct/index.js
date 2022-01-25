import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ShowProduct = (props) => {
    const { product } = props;

    return (
        <div className="show-product-box">
            <Link to={`../productitem/${product._id}`} className="product-link">
                <img
                    src={product.url}
                    className="show-img-size"
                    alt="product"
                />
                <h1 className="each-product-heading">{product.productName}</h1>
                <p className="each-product-price">
                    Price:{" "}
                    <span className="each-price-span">{product.price}/-</span>
                </p>
            </Link>
        </div>
    );
};

export default ShowProduct;
