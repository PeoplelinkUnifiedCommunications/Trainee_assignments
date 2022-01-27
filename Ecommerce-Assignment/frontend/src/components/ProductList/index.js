import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
                    <div className="no-products-in-productslist">
                        <h1>No products are created</h1>
                        <Link to=".." className="text-create-product">
                            <h2>Create product</h2>
                        </Link>
                    </div>
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
