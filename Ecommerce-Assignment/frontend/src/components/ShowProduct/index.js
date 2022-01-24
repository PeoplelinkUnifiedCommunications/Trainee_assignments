import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import axios from "../../axiosbaseurl";

const ShowProduct = (props) => {
    const { product } = props;

    const navigate = useNavigate();

    const onAddToCart = async () => {
        const { productName, price, url } = product;
        const cartObject = { productName, price, url, quantity: 1 };
        try {
            const responseData = await axios.post("/addtocart/", cartObject);
            console.log(responseData.data);
            alert("Item added to cart");
        } catch (error) {
            console.log(error.message);
        }
    };

    const onBuyNow = async () => {
        await onAddToCart();
        navigate("../mycart");
    };

    return (
        <div className="product-box">
            <div className="image-box">
                <img src={product.url} className="img-size" alt="product" />
                <div className="buttons-box">
                    <button className="product-button" onClick={onAddToCart}>
                        ADD TO CART
                    </button>
                    <button
                        className="product-button buy-now"
                        onClick={onBuyNow}
                    >
                        BUY NOW
                    </button>
                </div>
            </div>
            <div className="product-details-box">
                <h1 className="product-heading">{product.productName}</h1>
                <p className="price">
                    Price: <span className="price-span">{product.price}/-</span>
                </p>
                <p className="price">
                    Description:{" "}
                    <span className="description-span">
                        {product.description}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default ShowProduct;
