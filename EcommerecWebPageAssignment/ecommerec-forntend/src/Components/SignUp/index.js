import { React, useState } from "react";
import "./index.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import axios from "axios";
import { useNavigate } from "react-router";

const SignupPage = (props) => {
	let navigate = useNavigate();
	const [userSignupDetails, setuserSignupDetails] = useState({
		name: "",
		userName: "",
		email: "",
		password: "",
	});
	const onChangeuserSignupfeilds = (e) => {
		const { name, value } = e.target;
		setuserSignupDetails({
			...userSignupDetails,
			[name]: value,
		});
	};

	const apiCallForAddUserSignupData = (usersignupData) => {
		axios
			.post("http://localhost:4001/addUser/", userSignupDetails)
			.then((res) => {
				if (res.data === true) {
					navigate("/");
				} else {
					alert(`${res.data}`);
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const onsubmitSignupfeilds = (e) => {
		e.preventDefault();
		if (
			userSignupDetails.name === "" ||
			userSignupDetails.password === "" ||
			userSignupDetails.userName === "" ||
			userSignupDetails.email === ""
		) {
			alert("fields required");
		} else {
			apiCallForAddUserSignupData(userSignupDetails);
			setuserSignupDetails({
				name: "",
				userName: "",
				email: "",
				password: "",
			});
		}
	};

	return (
		<div className="loginpage_container">
			<h1>Sign up</h1>
			<form className="form_container" onSubmit={onsubmitSignupfeilds}>
				<div className="inpu_container">
					<FaRegUser className="image" />
					<input
						type="text"
						placeholder="Name..."
						className="input"
						name="name"
						value={userSignupDetails.name}
						onChange={onChangeuserSignupfeilds}
					/>
				</div>

				<div className="inpu_container">
					<FaRegUser className="image" />
					<input
						type="text"
						placeholder="username.."
						className="input"
						name="userName"
						value={userSignupDetails.userName}
						onChange={onChangeuserSignupfeilds}
					/>
				</div>

				<div className="inpu_container">
					<HiOutlineMail className="image" />
					<input
						type="email"
						placeholder="email..."
						className="input"
						name="email"
						value={userSignupDetails.email}
						onChange={onChangeuserSignupfeilds}
					/>
				</div>

				<div className="inpu_container">
					<AiOutlineLock className="image" />
					<input
						type="password"
						placeholder="password..."
						className="input"
						name="password"
						value={userSignupDetails.password}
						onChange={onChangeuserSignupfeilds}
					/>
				</div>
				<button className="button">Sign Up</button>
				<p>Already you have an account?</p>
				<button className="btn">
					<Link to="/">Login</Link>
				</button>
			</form>
		</div>
	);
};

export default SignupPage;
