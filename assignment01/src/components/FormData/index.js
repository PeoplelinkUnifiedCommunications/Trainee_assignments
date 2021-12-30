import { Link } from "react-router-dom";
import { useContext } from "react";

import EachFormData from "../EachFormData";
import context from "../../context/listContext";

import "./index.css";

function FormData() {
	const contextValues = useContext(context);
	const { dataList } = contextValues;
	const isdataList = dataList.length === 0 ? true : false;
	return (
		<div className='data-main-container'>
			<div className='data-container'>
				<h1 className='heading'>FORM DETAILS</h1>
				<ul className='data-table'>
					<li className='data-list-item'>
						<h1 className='data-table-headers'>NAME</h1>
						<h1 className='data-table-headers'>EMAIL</h1>
						<h1 className='data-table-headers'>AGE</h1>
					</li>
					{isdataList && (
						<li className='no-data'>
							<h1 className='no-data-msg'>NO DATA FOUND. ADD SOME DATA</h1>
						</li>
					)}
					{!isdataList &&
						dataList.map((eachData) => (
							<EachFormData key={eachData.id} eachData={eachData} />
						))}
				</ul>
				<div className='route-link'>
					<span className='link-para'> Click here to </span>
					<Link to='/form' className='links'>
						<span> ADD NEW DATA</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FormData;
