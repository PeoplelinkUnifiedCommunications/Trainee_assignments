import "./index.css";

const ProductCards = (props) => {
	const { productDataForCards, onClickCardItem } = props;

	const { _id, product_name, product_image_url } = productDataForCards;

	const onClickItem = () => {
		onClickCardItem(_id);
	};
	return (
		<div className="product_cards" onClick={onClickItem}>
			<div className="product_card_img_container">
				<img src={product_image_url} alt="catrdItem" className="card_img" />
			</div>
			<p className="item_heading">{product_name}</p>
		</div>
	);
};

export default ProductCards;
