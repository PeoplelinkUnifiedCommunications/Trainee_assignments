import { BsGraphUp } from "react-icons/bs";
import { MdPeopleAlt, MdShoppingBag } from "react-icons/md";
import Graph from "./components/graph";
import { Rings } from "react-loader-spinner";
// import productData from "../productsList.json";
import { useEffect, useState } from "react";
import viewsAndSales from "../viewAndSales.json";
import { AiFillEye } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import format from "date-fns/format";
import { addMonths, addWeeks, addYears } from "date-fns";
import parseISO from "date-fns/parseISO";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import {
	BasicDatePicker,
	SelectAutoWidth,
	StickyHeadTable,
} from "../uiElements/muiElements";
import useCallApi from "../customHook";
import Error from "../uiElements/error";

const getUrl = "http://localhost:3005";

function Body() {
	const [dateRange, setDateRange] = useState("Last 1 Month");
	const { apiData, apiStatus, error } = useCallApi(getUrl, "get");
	const [data, setdata] = useState([]);
	const [product, setProduct] = useState([]);
	const [users, setUsers] = useState(0);
	const [fromToDates, setFromToDates] = useState({
		to: format(new Date(), "yyyy-MM-dd"),
		from: format(addMonths(new Date(), -1), "yyyy-MM-dd"),
	});

	const fromDate = format(parseISO(fromToDates.from), "dd MMM yyyy");

	const onChangeDate = (e) => {
		if (e.target.value === "Last 1 Week") {
			setFromToDates({
				to: format(new Date(), "yyyy-MM-dd"),
				from: format(addWeeks(new Date(), -1), "yyyy-MM-dd"),
			});
		} else if (e.target.value === "Last 1 Month") {
			setFromToDates({
				to: format(new Date(), "yyyy-MM-dd"),
				from: format(addMonths(new Date(), -1), "yyyy-MM-dd"),
			});
		} else if (e.target.value === "Last 3 Month") {
			setFromToDates({
				to: format(new Date(), "yyyy-MM-dd"),
				from: format(addMonths(new Date(), -3), "yyyy-MM-dd"),
			});
		} else if (e.target.value === "Last 6 Month") {
			setFromToDates({
				to: format(new Date(), "yyyy-MM-dd"),
				from: format(addMonths(new Date(), -6), "yyyy-MM-dd"),
			});
		} else {
			setFromToDates({
				to: format(new Date(), "yyyy-MM-dd"),
				from: format(addYears(new Date(), -1), "yyyy-MM-dd"),
			});
		}
		setDateRange(e.target.value);
	};

	const onChangeFrom = (e) => {
		setFromToDates((prev) => ({ ...prev, from: format(e, "yyyy-MM-dd") }));
	};
	const onChangeTo = (e) => {
		setFromToDates((prev) => ({ ...prev, to: format(e, "yyyy-MM-dd") }));
	};

	const getViews = (filterdData) => {
		const totalViews = filterdData.reduce((prev, curr) => prev + curr.views, 0);
		return totalViews;
	};

	const getSales = (filterdData) => {
		const totalSales = filterdData.reduce((prev, curr) => prev + curr.sales, 0);
		return totalSales;
	};

	const filterData = () => {
		const filterdData = viewsAndSales.filter(
			(each) =>
				parseISO(each.date) > parseISO(fromToDates.from) &&
				parseISO(each.date) < parseISO(fromToDates.to)
		);
		setdata(filterdData);
	};

	useEffect(() => {
		if (apiStatus === "SUCCESS") {
			filterData(apiData.views);
			setUsers(apiData.users);
			setProduct(apiData.products);
		}
	}, [apiData, apiStatus, fromToDates, dateRange]);

	const renderProductsListView = () => {
		return (
			<div className='contentCntr'>
				<div className='flexRow alignCenter justifyCntBtwn'>
					<h2>Dashboard</h2>
					<div className='alignCenter'>
						<SelectAutoWidth onChangeDate={onChangeDate} value={dateRange} />
						<BasicDatePicker
							date={fromToDates.from}
							onChangeDate={onChangeFrom}
							label='From Date'
						/>
						<BasicDatePicker
							date={fromToDates.to}
							onChangeDate={onChangeTo}
							label='To Date'
						/>
					</div>
				</div>
				<Grid
					container
					spacing={2}
					sx={{ m: 0, width: "100%" }}
					className='justifyCntBtwn'>
					<Grid item xs={12} sm={5.8} md={5.8} lg={2.9} className='grid'>
						<div className='flexRow justifyCntBtwn dashBoardCard'>
							<Link to='/views' className='flexCol justifyCntBtwn '>
								<div className='flexRow alignCenter justifyCntBtwn'>
									<div className='flexRow iconBg sp justifyCntCenter'>
										<AiFillEye className='icon' color='blue' />
									</div>
									<BsGraphUp className='icon' color='#ff7c00' />
								</div>
								<h5>Total Views</h5>
								<h1>{getViews(data)}</h1>
								<hr />
								<p>Start from {fromDate}</p>
							</Link>
						</div>
					</Grid>
					<Grid item xs={12} sm={5.8} md={5.8} lg={2.9}>
						<div className='flexRow justifyCntBtwn dashBoardCard'>
							<Link to='/products' className='flexCol justifyCntBtwn '>
								<div className='flexRow alignCenter justifyCntBtwn'>
									<div className='flexRow iconBg justifyCntCenter'>
										<MdShoppingBag className='icon' color='#82ca9d' />
									</div>
									<BsGraphUp className='icon' color='#ff7c00' />
								</div>
								<h5>Total Products</h5>
								<h1>308,402</h1>
								<hr />
								<p>+ Add Products</p>
							</Link>
						</div>
					</Grid>
					<Grid item xs={12} sm={5.8} md={5.8} lg={2.9}>
						<div className='flexRow justifyCntBtwn dashBoardCard'>
							<Link to='/users' className='flexCol justifyCntBtwn '>
								<div className='flexRow alignCenter justifyCntBtwn'>
									<div className='flexRow iconBg  sp justifyCntCenter'>
										<MdPeopleAlt className='icon' color='blue' />
									</div>
									<BsGraphUp className='icon' color='#ff7c00' />
								</div>
								<h5>Total Users</h5>
								<h1>{users}</h1>
								<hr />
								<p>Start from {fromDate}</p>
							</Link>
						</div>
					</Grid>
					<Grid item xs={12} sm={5.8} md={5.8} lg={2.9}>
						<div className='flexRow justifyCntBtwn dashBoardCard'>
							<Link to='/sales' className='flexCol justifyCntBtwn '>
								<div className='flexRow alignCenter justifyCntBtwn'>
									<div className='flexRow iconBg justifyCntCenter'>
										<FaShoppingCart className='icon' color='#82ca9d' />
									</div>
									<BsGraphUp className='icon' color='#ff7c00' />
								</div>
								<h5>Total Sales</h5>
								<h1>{getSales(data)}</h1>
								<hr />
								<p>Start from {fromDate}</p>
							</Link>
						</div>
					</Grid>
				</Grid>
				<div className='flexRow justifyCntBtwn'>
					<div className='tableCntr'>
						{product.length !== 0 && (
							<StickyHeadTable data={product} header={true} />
						)}
					</div>
					<div className='graphCntr'>
						<div className='flexRow justifyCntBtwn'>
							<h4>Views and Sales</h4>
							<p>{dateRange}</p>
						</div>
						<Graph data={data} />
					</div>
				</div>
			</div>
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

export default Body;
