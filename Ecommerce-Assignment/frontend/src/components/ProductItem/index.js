import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import axios from "../../axiosbaseurl";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const ProductItem = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`/getproduct/${id}`)
            .then((response) => setProduct(response.data))
            .catch((error) => console.log(error.message));
    }, [id]);

    const navigate = useNavigate();

    const onAddToCart = async () => {
        const { _id, productName, price, url } = product;
        const cartObject = { _id, productName, price, url, quantity: 1 };
        try {
            await axios.post("/addtocart/", cartObject);
            //console.log(responseData.data);
            alert("Item added to cart");
        } catch (error) {
            console.log(error.message);
        }
    };

    const onBuyNow = async () => {
        await onAddToCart();
        navigate("../mycart");
    };

    const onClickFav = async () => {
        const favObject = { ...product, favourite: !product.favourite };
        try {
            await axios
                .put("/updatefav/", favObject)
                .then((response) => setProduct(response.data))
                .catch((error) => console.log(error.message));
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="close">
            <div className="product-box">
                <div className="image-box">
                    <div
                        style={{
                            paddingRight: "50px",
                            alignSelf: "flex-end",
                        }}
                    >
                        {product.favourite ? (
                            <AiFillHeart
                                onClick={onClickFav}
                                size="40px"
                                color="red"
                            />
                        ) : (
                            <AiOutlineHeart onClick={onClickFav} size="40px" />
                        )}
                    </div>
                    <img src={product.url} className="img-size" alt="product" />
                    <div className="buttons-box">
                        <button
                            className="product-button"
                            onClick={onAddToCart}
                        >
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
                        Price:{" "}
                        <span className="price-span">{product.price}/-</span>
                    </p>
                    <p className="price">
                        Description:{" "}
                        <span className="description-span">
                            {product.description}
                        </span>
                    </p>
                    <ul>
                        <li>
                            MediaTek | Dimensity 720 Octa Core 2GHz Processor
                            with the widest 12 band support for a True 5G
                            experience
                        </li>
                        <li>
                            16.55 centimeters (6.5-inch) TFT - Infinity V-cut
                            display, HD+ resolution, 720 X 1600 pixels protected
                            by Gorilla Glass 5
                        </li>
                        <li>
                            Versatile Quad camera setup-48MP (F 1.8) main camera
                            + 8MP (F2.2) Ultra wide camera+ 5MP (F2.4) depth
                            camera + 2MP (2.4) Macro Camera| 13MP (F2.2) front
                            camera
                        </li>
                        <li>
                            Monster 5000 mAh Battery | Memory, Storage & SIM:
                            Upto 12GB RAM Plus| 128GB internal memory expandable
                            up to 1TB| SIM 1 + Hybrid (SIM or MicroSD)
                        </li>
                        <li>
                            Latest Android v11.0, One UI 3.1 operating system,
                            available right out of the box
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
