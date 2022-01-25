import "./index.css";
import Product from "../Product";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCards from "../ProductCards";

const ProductsList = () => {
	const [productData, setproductData] = useState([]);
	const [viewPage, setviewPage] = useState(false);
	const [filterData, setfilterData] = useState({});
	useEffect(() => {
		axios
			.get("http://localhost:4001/getProductData/")
			.then((res) => {
				setproductData(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	});
	const onClickItemCard = (id) => {
		const data = productData.filter((each) => each._id === id);

		setfilterData(data[0]);
		setviewPage(!viewPage);
	};
	return viewPage ? (
		<div className="product_list1">
			<Product
				productDataForCards={filterData}
				onClickCardItem={onClickItemCard}
			/>
		</div>
	) : (
		<div className="product_list2">
			{productData.map((each) => (
				<ProductCards
					productDataForCards={each}
					key={each._id}
					onClickCardItem={onClickItemCard}
				/>
			))}
		</div>
	);
};

export default ProductsList;
