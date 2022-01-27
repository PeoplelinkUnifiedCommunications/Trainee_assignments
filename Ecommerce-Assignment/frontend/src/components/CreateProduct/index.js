import React, { useState } from "react";
import axios from "../../axiosbaseurl";
import "./index.css";

const CreateProduct = () => {
    const [productObject, setProductObject] = useState({
        productName: "",
        price: "",
        url: "",
        quantity: "",
        description: "",
        favourite: false,
    });
    const [error, setError] = useState(false);

    const onChangeField = (event) => {
        const { name, value } = event.target;
        setProductObject({
            ...productObject,
            [name]: value,
        });
    };

    const onSubmitProduct = async (event) => {
        event.preventDefault();
        const { productName, price, url, description, quantity } =
            productObject;
        if (
            productName !== "" &&
            price !== "" &&
            url !== "" &&
            description !== "" &&
            quantity !== ""
        ) {
            //console.log(productObject);
            try {
                await axios
                    .post("/createproduct/", productObject)
                    .then((response) => {
                        setProductObject({
                            productName: "",
                            price: "",
                            url: "",
                            quantity: "",
                            description: "",
                            favourite: false,
                        });
                        setError(false);
                        alert("Product created");
                    })
                    .catch((error) => console.log(error.message));
            } catch (error) {
                console.log(error.message);
            }
        } else {
            setError(true);
        }
    };

    return (
        <div className="content">
            <h1>Create Product</h1>
            <div className="product-form-container">
                <form className="form-alignment" onSubmit={onSubmitProduct}>
                    <input
                        className="product-input-field"
                        placeholder="Product Name"
                        type="text"
                        value={productObject.productName}
                        name="productName"
                        onChange={onChangeField}
                    />
                    <input
                        className="product-input-field"
                        placeholder="Product Price"
                        type="text"
                        value={productObject.price}
                        name="price"
                        onChange={onChangeField}
                    />
                    <input
                        className="product-input-field"
                        placeholder="Product Image URL"
                        type="text"
                        value={productObject.url}
                        name="url"
                        onChange={onChangeField}
                    />
                    <input
                        className="product-input-field"
                        placeholder="Product Quantity"
                        type="text"
                        value={productObject.quantity}
                        name="quantity"
                        onChange={onChangeField}
                    />
                    <textarea
                        className="product-input-field product-description"
                        placeholder="Enter Product Description"
                        type="text"
                        value={productObject.description}
                        name="description"
                        onChange={onChangeField}
                    />
                    <input
                        type="submit"
                        value="Create Product"
                        className="btn"
                    />
                </form>
                {error && (
                    <p className="error">*Please Enter All Product Details</p>
                )}
            </div>
        </div>
    );
};

export default CreateProduct;
