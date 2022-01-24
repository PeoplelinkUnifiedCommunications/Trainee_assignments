import React, { useEffect, useState } from "react";
import axios from "../../axiosbaseurl";
import ShowProduct from "../ShowProduct";
import "./index.css";

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios
            .get("/getproducts")
            .then((response) => setProductList(response.data))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <div className="products-main">
            <h1 className="heading">Products</h1>
            <div className="products-container">
                {productList.length === 0 ? (
                    <p>No products are available</p>
                ) : (
                    productList.map((eachProduct) => (
                        <ShowProduct
                            product={eachProduct}
                            key={eachProduct._id}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductList;
