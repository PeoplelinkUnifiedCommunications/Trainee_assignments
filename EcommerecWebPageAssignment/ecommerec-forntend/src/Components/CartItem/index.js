import { useState } from "react";
import "./index.css";
import axios from "axios";

const CartItem = (props) => {
	const { cartProductData } = props;
	const { _id, product_name, product_image_url, price, item_count } =
		cartProductData;
	const [qunantity, setqunantity] = useState({ count: item_count });

	const onClickIncrease = (_id) => {
		setqunantity((prevState) => ({
			...prevState,
			count: prevState.count + 1,
		}));
		updateIncrease(_id);
	};

	const onClickDcrease = (_id) => {
		if (qunantity.count === 1) {
			setqunantity((prevState) => ({
				...prevState,
				count: 1,
			}));
			updateDcrease(_id);
		} else {
			setqunantity((prevState) => ({
				...prevState,
				count: prevState.count - 1,
			}));
			updateDcrease(_id);
		}
	};
	const updateIncrease = async (_id) => {
		await axios
			.put(`http://localhost:4001/updateQnty/${_id}`, {
				item_count: qunantity.count + 1,
			})
			.then((res) => {});
	};

	const updateDcrease = (_id) => {
		if (qunantity.count === 2 || qunantity.count === 1) {
			axios
				.put(`http://localhost:4001/updateQnty/${_id}`, {
					item_count: 1,
				})
				.then((res) => {});
		} else {
			axios
				.put(`http://localhost:4001/updateQnty/${_id}`, {
					item_count: qunantity.count - 1,
				})
				.then((res) => console.log(res));
		}
	};

	const removeItem = (id) => {
		axios
			.delete(`http://localhost:4001/deleteCartData/${id}`)
			.then((res) => {});
	};

	return (
		<div className="cart_card">
			<div className="image_container">
				<img src={product_image_url} alt="cart_image" className="cart_image" />
				<div className="quantity_container">
					<p className="decrease" onClick={() => onClickDcrease(_id)}>
						-
					</p>
					<p className="count">{qunantity.count}</p>
					<p className="increase" onClick={() => onClickIncrease(_id)}>
						+
					</p>
				</div>
				<button className="remove_btn" onClick={() => removeItem(_id)}>
					Remove From Cart
				</button>
			</div>
			<div className="cart_product_details">
				<h1 className="cart_product_heading">{product_name}</h1>
				<p>
					Price:
					<span className="cart_product_price">₹{price}</span>
				</p>
				<p>Qnty: {qunantity.count} </p>
				<p>
					{`Total ${qunantity.count} items price`}:{" "}
					<span className="item_total_price">{` ${
						qunantity.count * price
					}`}</span>
				</p>
			</div>
		</div>
	);
};

export default CartItem;
