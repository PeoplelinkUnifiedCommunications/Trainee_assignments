import "./index.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import image from "../Images/logo2.png";
import image2 from "../Images/ecommerec.png";
import CreateProduct from "../CreateProduct";
import ProductsList from "../ProductsList";
import Cart from "../Cart";
import axios from "axios";

const HomePage = () => {
	const [cartCount, setcartCount] = useState(0);
	const [pageChanges, setpageChanges] = useState({
		isClick: false,
		isPage1: false,
		isPage2: false,
		isPage3: false,
		hide: false,
	});

	const onClickIcon = () => {
		setpageChanges((prevState) => ({
			...prevState,
			isClick: !prevState.isClick,
		}));
	};
	const onClickPages1 = () => {
		setpageChanges((prevState) => ({
			...prevState,
			isPage1: true,
			isPage2: false,
			isPage3: false,
			hide: true,
		}));
	};
	const onClickPages2 = () => {
		setpageChanges((prevState) => ({
			...prevState,
			isPage1: false,
			isPage2: true,
			isPage3: false,
			hide: true,
		}));
	};
	const onClickPages3 = () => {
		setpageChanges((prevState) => ({
			...prevState,
			isPage1: false,
			isPage2: false,
			isPage3: true,
			hide: true,
		}));
	};

	useEffect(() => {
		axios
			.get("http://localhost:4001/getCartData/")
			.then((res) => {
				setcartCount(res.data.length);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<div className="home_container">
			<div
				className={`side_bar ${
					pageChanges.isClick ? "side_bar_hide" : "side_bar_visible"
				}`}
			>
				<div className="logo2_container">
					<img src={image} alt="logo2" className="logo2" />
				</div>

				<ul className="list">
					<li className="list_item" onClick={onClickPages1}>
						Create Product
					</li>
					<li className="list_item" onClick={onClickPages2}>
						Product List
					</li>
					<li className="list_item" onClick={onClickPages3}>
						Cart
						<div className="cart">{cartCount}</div>
					</li>
				</ul>
			</div>
			<div className="side_bar2">
				<GiHamburgerMenu onClick={onClickIcon} className="icon_hide_visible" />
			</div>

			<div className="create_product_container">
				<div
					className={`welcome_container ${
						pageChanges.hide ? "welcome_container_hide" : null
					}`}
				>
					<img src={image2} alt="welcome" className="welcome" />
					<p className="welcome_msg">Welcome ecommerce</p>
				</div>
				{pageChanges.isPage1 ? <CreateProduct /> : null}
				{pageChanges.isPage2 ? <ProductsList /> : null}
				{pageChanges.isPage3 ? <Cart /> : null}
			</div>
		</div>
	);
};

export default HomePage;
