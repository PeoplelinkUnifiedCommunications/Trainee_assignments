import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

const Product = (props) => {
	const { productDataForCards, onClickCardItem } = props;

	const {
		_id,
		product_name,
		product_image_url,
		price,
		quantity,
		description,
		isFevorites,
	} = productDataForCards;

	const [itemcount, setitemcount] = useState({ count: 1 });
	const [favoritesIcon, setfavoritesIcon] = useState(isFevorites);
	const [stockDetails, setstockDetails] = useState({
		stockMsg: "",
		stockMsgCss: "",
	});

	const onClickCancle = () => {
		onClickCardItem();
	};

	useEffect(() => {
		if (quantity > 10) {
			setstockDetails((prevState) => ({
				...prevState,
				stockMsg: "Stock is Availble",
				stockMsgCss: "stock_availble_msg1",
			}));
		} else {
			setstockDetails((prevState) => ({
				...prevState,
				stockMsg: `only ${quantity} is availble.`,
				stockMsgCss: "stock_availble_msg2",
			}));
		}
	}, [quantity]);

	const onClickItemIncrease = () => {
		if (itemcount.count === quantity) {
			alert(`Stock is not availble`);
			setitemcount((prevState) => ({
				...prevState,
				count: 1,
			}));
		} else {
			setitemcount((prevState) => ({
				...prevState,
				count: prevState.count + 1,
			}));
		}
	};

	const onClickItemDcrease = () => {
		if (itemcount.count === 1) {
			setitemcount((prevState) => ({
				...prevState,
				count: 1,
			}));
		} else {
			setitemcount((prevState) => ({
				...prevState,
				count: prevState.count - 1,
			}));
		}
	};

	const addDataForCart = (dataForCart) => {
		axios
			.post("http://localhost:4001/addDataToCart/", dataForCart)
			.then((res) => {})
			.catch((error) => {
				console.log(error);
			});
		alert("Product added to cart");
	};
	const onClickAddToCart = (
		product_name,
		product_image_url,
		price,
		itemcount
	) => {
		const dataForCart = {
			product_name,
			product_image_url,
			price,
			item_count: itemcount,
		};
		addDataForCart(dataForCart);
	};

	const onclickFavorites = (id) => {
		updateIsfavorites(id);
	};

	const updateIsfavorites = async (id) => {
		await axios
			.put(`http://localhost:4001/updateIsFavorites/${id}/`, {
				isFevorites: !isFevorites,
			})
			.then((res) => {
				setfavoritesIcon(res.data.isFevorites);
				if (res.data.isFevorites === true) {
					alert("added to favorites list");
				} else {
					alert("Removed from favorites list");
				}
			});
	};

	return (
		<div className="card">
			<div className="icons">
				{favoritesIcon ? (
					<MdFavorite
						className="favorites"
						onClick={() => onclickFavorites(_id)}
					/>
				) : (
					<MdOutlineFavoriteBorder
						className="remove"
						onClick={() => onclickFavorites(_id)}
					/>
				)}

				<ImCancelCircle className="remove" onClick={onClickCancle} />
			</div>

			<div className="product_deatils">
				<div className="details">
					<h1 className="product_name">{product_name}</h1>
					<p>
						Price:
						<span className="price">₹{price}</span>
					</p>
					<div className="qnty">
						<p>Qunatity:</p>
						<div className="product_qnty_container">
							<p className="product_decrease" onClick={onClickItemDcrease}>
								-
							</p>

							<p className="item_count">{itemcount.count}</p>

							<p className="product_increase" onClick={onClickItemIncrease}>
								+
							</p>
						</div>
					</div>

					<p className={stockDetails.stockMsgCss}>{stockDetails.stockMsg}</p>
				</div>
				<div className="product_image_container">
					<img
						src={product_image_url}
						alt="product"
						className="product_image"
					/>
				</div>
			</div>
			<p className="discreption">
				Discreption:
				<span className="span_discreption">{description}</span>
			</p>
			<div>
				<button
					className="add_cart_btn"
					onClick={() =>
						onClickAddToCart(
							product_name,
							product_image_url,
							price,
							itemcount.count
						)
					}
				>
					Add to cart
				</button>
				<button className="add_cart_btn add_cart_btn2">By now</button>
			</div>
		</div>
	);
};

export default Product;
