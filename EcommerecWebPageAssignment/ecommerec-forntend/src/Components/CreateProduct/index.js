import "./index.css";
import { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
	const [requiredFeild, setrequiredFeild] = useState({
		requiredMsg: "",
		productaddedMsg: "",
	});

	const [createProductFeilds, setcreateProductFeilds] = useState({
		product_name: "",
		product_image_url: "",
		price: "",
		quantity: "",
		description: "",
		isFevorites: false,
	});

	const createProductApi = (createProductDatas) => {
		axios
			.post("http://localhost:4001/addProduct/", createProductDatas)
			.then((res) => {})
			.catch((error) => {
				console.log(error);
			});
	};

	const onChangecreateProductFeilds = (e) => {
		const { name, value } = e.target;
		setrequiredFeild((prevState) => ({
			...prevState,
			requiredMsg: "",
			productaddedMsg: "",
		}));
		setcreateProductFeilds({
			...createProductFeilds,
			[name]: value,
		});
	};

	const onsubmitCreateProductFeilds = (e) => {
		e.preventDefault();
		if (
			createProductFeilds.product_name === "" ||
			createProductFeilds.product_image_url === "" ||
			createProductFeilds.reatil_price === "" ||
			createProductFeilds.discount_price === "" ||
			createProductFeilds.description === ""
		) {
			setrequiredFeild((prevState) => ({
				...prevState,
				requiredMsg: "Feilds Required",
			}));
		} else {
			createProductApi(createProductFeilds);
			setcreateProductFeilds((prevState) => ({
				...prevState,
				product_name: "",
				product_image_url: "",
				price: "",
				quantity: "",
				description: "",
			}));
			setrequiredFeild((prevState) => ({
				...prevState,
				productaddedMsg: "Product added successfully",
			}));
		}
	};

	return (
		<div className="product_container">
			<h1>Create eCommerce product</h1>
			<form
				className="product_form_container"
				onSubmit={onsubmitCreateProductFeilds}
			>
				<div className="product_inpu_container">
					<input
						type="text"
						placeholder="Product name..."
						className="product_input"
						name="product_name"
						value={createProductFeilds.product_name}
						onChange={onChangecreateProductFeilds}
					/>
				</div>

				<div className="product_inpu_container">
					<input
						type="text"
						placeholder="Product image Url..."
						className="product_input"
						name="product_image_url"
						value={createProductFeilds.product_image_url}
						onChange={onChangecreateProductFeilds}
					/>
				</div>

				<div className="product_inpu_container">
					<input
						type="text"
						placeholder="Price..."
						className="product_input"
						name="price"
						value={createProductFeilds.price}
						onChange={onChangecreateProductFeilds}
					/>
				</div>

				<div className="product_inpu_container">
					<input
						type="text"
						placeholder="Quantity..."
						className="product_input"
						onChange={onChangecreateProductFeilds}
						name="quantity"
						value={createProductFeilds.quantity}
					/>
				</div>
				<div className="product_inpu_container">
					<textarea
						type="textarea"
						placeholder="Description..."
						className="product_input_text"
						onChange={onChangecreateProductFeilds}
						name="description"
						value={createProductFeilds.description}
					/>
				</div>
				<p className="error">{requiredFeild.requiredMsg}</p>
				<p className="success">{requiredFeild.productaddedMsg}</p>
				<button type="submit" className="create_btn">
					Create Product
				</button>
			</form>
		</div>
	);
};

export default CreateProduct;
