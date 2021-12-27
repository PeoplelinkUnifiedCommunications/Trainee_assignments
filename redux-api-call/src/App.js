import "./App.css";

import { connect } from "react-redux";
import {
	fetchUserRequest,
	fetchUserSuccess,
	fetchUserFail,
} from "./Reducer/Action";
import axios from "axios";
import ListView from "./ListView/index";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = ({ request, sucess, fail }) => {
	const submit = () => {
		request();
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then(response => {
				let users = response.data;
				sucess(users);
			})
			.catch(error => {
				fail(error);
			});
	};
	let noData;
	let error;

	const data = useSelector(state => state);
	console.log(data);
	if (data.user.length === 0) {
		noData = false;
		error = "No Data";
	} else {
		noData = true;
		error = "";
	}
	if (data.error !== "") {
		error = `${data.error}`;
	}

	return data.isLoading ? (
		<div className="loader_container">
			<Loader type="TailSpin" color="blue" height={100} width={100} />
		</div>
	) : (
		<div className="App">
			{noData ? (
				<ul className="list">
					<li className="list-item">
						<h1 className="heading">NAME</h1>
						<h1 className="heading">Email</h1>
						<h1 className="heading">User Name</h1>
					</li>
					{data.user.map(each => (
						<ListView eachData={each} key={each.id} />
					))}
				</ul>
			) : (
				<p className="noData">{error}</p>
			)}
			<button onClick={submit} className="button">
				Click to see user data
			</button>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	request: () => dispatch(fetchUserRequest()),
	sucess: users => dispatch(fetchUserSuccess(users)),
	fail: error => dispatch(fetchUserFail(error)),
});

export default connect(null, mapDispatchToProps)(App);
