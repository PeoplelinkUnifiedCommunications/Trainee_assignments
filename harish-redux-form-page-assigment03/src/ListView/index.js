import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { delTask } from "../action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

function ListView({ appState, deleteTask }) {
	console.log(appState);
	let data;

	const [search, setsearch] = useState("");
	const addSerach = event => {
		setsearch(event.target.value);
	};

	const searchList = appState.appReducer1.filter(each =>
		each.email.includes(search)
	);
	if (searchList.length === 0) {
		data = false;
	} else {
		data = true;
	}

	return (
		<div className="bg-container1">
			<ToastContainer limit={1}>
				{appState.appReducer2.length === 0 ? null : toast(appState.appReducer2)}
			</ToastContainer>

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
								<button className="del" onClick={() => deleteTask(each.id)}>
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
