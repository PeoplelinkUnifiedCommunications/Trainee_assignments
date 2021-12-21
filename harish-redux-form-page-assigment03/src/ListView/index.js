import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { delTask } from "../action";

import "./index.css";

function ListView({ appState, deleteTask }) {
	let data;

	if (appState.length === 0) {
		data = false;
	} else {
		data = true;
	}
	const [search, setsearch] = useState("");
	const addSerach = event => {
		setsearch(event.target.value);
	};

	const deleteDetails = id => {
		console.log(id);
		deleteTask(id);
	};

	const searchList = appState.filter(each => each.email.includes(search));

	return (
		<div className="bg-container1">
			<div className="from-container1">
				<input
					type="search"
					onChange={addSerach}
					className="search"
					placeholder="search"
				/>
				<ul className="list">
					<li className="list-item">
						<h1 className="heading">NAME</h1>
						<h1 className="heading">Email</h1>
						<h1 className="heading">Date</h1>
					</li>

					{data ? (
						searchList.map(each => (
							<li className="list-item1" key={each.id}>
								<h1 className="heading">{each.name}</h1>
								<h1 className="heading">{each.email}</h1>
								<h1 className="heading">{each.date}</h1>
								<button className="del" onClick={deleteDetails(each.id)}>
									Delete
								</button>
							</li>
						))
					) : (
						<li className="no-data">
							<h1 className="heading">No data Found</h1>
						</li>
					)}
				</ul>
				<button className="btn2">
					<Link to="/Create" className="link">
						Create
					</Link>
				</button>
			</div>
		</div>
	);
}

const mapStateToProps = state => ({
	appState: state,
});

const mapDispatchToProps = dispatch => ({
	deleteTask: id => dispatch(delTask(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListView);
