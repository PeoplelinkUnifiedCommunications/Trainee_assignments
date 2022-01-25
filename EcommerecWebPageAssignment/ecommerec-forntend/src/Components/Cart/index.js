import "./index.css";
import CartItem from "../CartItem";
import { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
	const [cartData, setcartData] = useState([]);
	const [cartNum, setcartQunatity] = useState(0);
	const [id, setId] = useState("");

	useEffect(() => {
		axios
			.get("http://localhost:4001/getCartData/")
			.then((res) => {
				setcartData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [cartData]);

	const onclickIncreaseCartPrice = (id) => {
		setcartQunatity((prevState) => ({
			...prevState,
			cartNum: prevState.cartNum + 1,
		}));
	};

	let sum = 0;
	for (let item of cartData) {
		const { price, item_count } = item;
		sum = sum + price * item_count;
	}

	return (
		<div className="cart_container">
			<div className="cart_items">
				{cartData.map((each) => (
					<CartItem
						cartProductData={each}
						key={each._id}
						onclick={onclickIncreaseCartPrice}
					/>
				))}
			</div>

			<div className="total_price_card">
				<h1 className="price_details">Price Details</h1>
				<div className="total_price_container">
					<p>Total Cart Price</p>
					<p>{sum}</p>
				</div>
				<button className="order_btn">Place Order</button>
			</div>
		</div>
	);
};

export default Cart;
