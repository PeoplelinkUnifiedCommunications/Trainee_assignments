import { BsGraphUp } from "react-icons/bs";
import { MdPeopleAlt, MdShoppingBag } from "react-icons/md";
import Graph from "./components/graph";
import productData from "../products.json";
import { useEffect, useState } from "react";
import viewsAndSales from "../viewAndSales.json";
import { AiFillEye } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import format from "date-fns/format";
import { addMonths, addWeeks, addYears } from "date-fns";
import parseISO from "date-fns/parseISO";

function Body() {
	const [dateRange, setDateRange] = useState("Last 1 Month");
	const [data, setdata] = useState([]);
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
		setFromToDates((prev) => ({ ...prev, from: e.target.value }));
	};
	const onChangeTo = (e) => {
		setFromToDates((prev) => ({ ...prev, to: e.target.value }));
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
		// eslint-disable-next-line
		filterData();
	}, [fromToDates, dateRange]);

	return (
		<div className='contentCntr'>
			<div className='flexRow alignCenter justifyCntBtwn'>
				<h2>Dashboard</h2>
				<div>
					<span>Select Date: </span>
					<select defaultValue={dateRange} onChange={onChangeDate}>
						<option value='Last 1 Week'>Last 1 Week</option>
						<option value='Last 1 Month'>Last 1 Month</option>
						<option value='Last 3 Month'>Last 3 Month</option>
						<option value='Last 6 Month'>Last 6 Month</option>
						<option value='Last 1 Year'>Last 1 Year</option>
					</select>
					<label>
						{" "}
						From:{" "}
						<input
							type='date'
							value={fromToDates.from}
							onChange={onChangeFrom}
							className='dateField'
						/>
					</label>
					<label>
						{" "}
						To:{" "}
						<input
							type='date'
							value={fromToDates.to}
							onChange={onChangeTo}
							className='dateField'
						/>
					</label>
				</div>
			</div>
			<div className='flexRow justifyCntBtwn flToap'>
				<div className='flexCol justifyCntBtwn dashBoardCard'>
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
				</div>
				<div className='flexCol justifyCntBtwn dashBoardCard'>
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
				</div>
				<div className='flexCol justifyCntBtwn dashBoardCard'>
					<div className='flexRow alignCenter justifyCntBtwn'>
						<div className='flexRow iconBg  sp justifyCntCenter'>
							<MdPeopleAlt className='icon' color='blue' />
						</div>
						<BsGraphUp className='icon' color='#ff7c00' />
					</div>
					<h5>Total Users</h5>
					<h1>308,402</h1>
					<hr />
					<p>Start from {fromDate}</p>
				</div>
				<div className='flexCol justifyCntBtwn dashBoardCard'>
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
				</div>
			</div>
			<div className='flexRow justifyCntBtwn'>
				<div className='tableCntr'>
					<table>
						<tbody>
							<tr className='tableheader'>
								<th>No</th>
								<th>Product Name</th>
								<th>Status</th>
								<th>Sold</th>
								<th>View</th>
							</tr>

							{productData.map((each, index) => (
								<tr key={each.id}>
									<td>
										<div className='flexRow justifyCntCenter alignCenter tableDiv'>
											{each.id}
										</div>
									</td>
									<td>
										<div className='flexRow justifyCntCenter alignCenter tableDiv'>
											{each.name}
										</div>
									</td>
									<td>
										<div className='flexRow justifyCntCenter alignCenter tableDiv'>
											{each.status}
										</div>
									</td>
									<td>
										<div className='flexRow justifyCntCenter alignCenter tableDiv'>
											{each.sold}
										</div>
									</td>
									<td>
										<div className='flexRow justifyCntCenter alignCenter tableDiv'>
											{each.views}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
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
}

export default Body;
// import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
// import Stack from '@mui/material/Stack';

// export default function ResponsiveDatePickers() {
//   const [value, setValue] = React.useState(new Date());

//   return (
//     <LocalizationProvider dateAdapter={AdapterDateFns}>
//       <Stack spacing={3}>
//         <MobileDatePicker
//           label="For mobile"
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <DesktopDatePicker
//           label="For desktop"
//           value={value}
//           minDate={new Date('2017-01-01')}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <DatePicker
//           disableFuture
//           label="Responsive"
//           openTo="year"
//           views={['year', 'month', 'day']}
//           value={value}
//           onChange={(newValue) => {
//             setValue(newValue);
//           }}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </Stack>
//     </LocalizationProvider>
//   );
// }
