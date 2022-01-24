import "./index.css";
import { useState } from "react";
import {addProduct} from "../../Api/"

const CreateProduct = () => {
	const [createProductFields, setCreateProductFields] = useState({
		product_name: "",
		product_image_url: "",
		retail_price: "",
		quantity: "",
		description: "",
	});
    const [error,setError] = useState({
        product_name: "",
		product_image_url: "",
		retail_price: "",
		quantity: "",
		description: "",
    })

	const onChangeFromField = (e) => {
		const { name, value } = e.target;
		setCreateProductFields({
			...createProductFields,
			[name]: value,
		});
	};

    const validation=()=>{
        return true
    }

	const onsubmitCreateProductFields = async (e) => {
		e.preventDefault();
        if (validation){
            console.log(createProductFields);
            const response = await addProduct(createProductFields)
            console.log(response)
            setCreateProductFields({
                product_name: "",
                product_image_url: "",
                retail_price: "",
                quantity: "",
                description: "",
            })
        }
		
	};

	return (
		<div className="product-create-container">
			<h1>Add a product to E-Commerce Website</h1>
			<form
				className="product_form_container"
				onSubmit={onsubmitCreateProductFields}
			>
				<div className="product_input_container">
                    <label htmlFor="product-name" className="product-label">Product Name : </label>
					<input
						type="text"
						placeholder="Product name..."
						className="product_input"
                        id="product-name"
						name="product_name"
						value={createProductFields.product_name}
						onChange={onChangeFromField}
					/>
				</div>

				<div className="product_input_container">
                    <label htmlFor="product-image-url" className="product-label">Product ImageURL : </label>
					<input
						type="text"
						placeholder="Product image Url..."
						className="product_input"
						name="product_image_url"
                        id="product-image-url"
						value={createProductFields.product_image_url}
						onChange={onChangeFromField}
					/>
				</div>

				<div className="product_input_container">
                    <label htmlFor="product-price" className="product-label">Product Price : </label>
					<input
						type="text"
						placeholder="Product Price..."
						className="product_input"
						name="retail_price"
                        id="product-price"
						value={createProductFields.retail_price}
						onChange={onChangeFromField}
					/>
				</div>

				<div className="product_input_container">
                    <label htmlFor="product-quantity" className="product-label">Product Quantity : </label>
					<input
						type="text"
						placeholder="Product Quantity..."
						className="product_input"
                        id="product-quantity"
						onChange={onChangeFromField}
						name="quantity"
						value={createProductFields.quantity}
					/>
				</div>
				<div className="product_input_container">
                    <label htmlFor="product-description" className="product-label">Product Description : </label>
					<textarea
						
						placeholder="Product Description..."
						className="product_input description"
                        id="product-description"
						onChange={onChangeFromField}
						name="description"
						value={createProductFields.description}
                        rows="4" 
					/>
				</div>
				<button type="submit" className="create_btn">
					Create Product
				</button>
			</form>
		</div>
	);
};

export default CreateProduct;