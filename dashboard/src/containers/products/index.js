import { Grid } from "@mui/material";
import { Rings } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { FaMobile } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCallApi from "../customHook";
import Error from "../uiElements/error";
import NoData from "../uiElements/noData";

function Products() {
	const [productsList, setProductsList] = useState([]);
	const { apiData, apiStatus, error } = useCallApi(
		"http://localhost:3005/products"
	);

	useEffect(() => {
		if (apiStatus === "SUCCESS") {
			setTimeout(() => setProductsList(apiData));
		}
	}, [apiData, apiStatus]);

	const renderProductsListView = () => {
		const isData = productsList.length !== 0;

		return (
			<>
				{isData && <NoData />}
				{!isData && (
					<div className='contentCntr'>
						<h1>Products Section</h1>
						<div className='flexwrap justifyCntBtwn'>
							<Grid
								container
								spacing={2}
								sx={{ m: 0, width: "100%" }}
								className='justifyCntBtwn'>
								{productsList.map((each) => (
									<Grid
										item
										xs={12}
										md={5.8}
										lg={2.9}
										key={each._id}
										className='padLeft'>
										<div className='flexCol justifyCntBtwn dashBoardCard'>
											<Link
												to={`/products/${each._id}`}
												className='flexCol justifyCntBtwn '>
												<FaMobile color='blue' />
												<h4>Product Name:{each.name}</h4>
												<p>Total Sales:{each.sold}</p>
												<p>Total Views:{each.views}</p>
											</Link>
										</div>
									</Grid>
								))}
							</Grid>
						</div>
					</div>
				)}
			</>
		);
	};

	const renderLoadingView = () => {
		return (
			<div className='products-loader-container contentCntr loader'>
				<Rings type='ThreeDots' color='#0b69ff' height='50' width='50' />
			</div>
		);
	};

	const renderFailureView = () => {
		return <Error error={error} />;
	};

	const renderPage = () => {
		switch (apiStatus) {
			case "SUCCESS":
				return renderProductsListView();
			case "FAILURE":
				return renderFailureView();
			case "IN_PROGRESS":
				return renderLoadingView();
			default:
				return null;
		}
	};

	return renderPage();
}

export default Products;
