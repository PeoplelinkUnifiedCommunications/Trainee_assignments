import { React, useState } from "react";
import "./index.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const LoginPage = () => {
	let navigate = useNavigate();
	const [userFields, setuserFields] = useState({ userName: "", password: "" });

	const onChnageFeilds = (e) => {
		const { name, value } = e.target;
		setuserFields({
			...userFields,
			[name]: value,
		});
	};

	const loginSuccess = (data) => {
		axios
			.post("http://localhost:4001/login/", data)
			.then((res) => {
				if (res.data === true) {
					navigate("/Home");
					alert("login successfull");
				} else {
					alert(`${res.data}`);
				}
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	const onSubmitData = (e) => {
		e.preventDefault();
		if (userFields.name === "" || userFields.password === "") {
			alert("All fields Required");
		} else {
			loginSuccess(userFields);
			setuserFields({
				userName: "",
				password: "",
			});
		}
	};

	return (
		<div className="loginpage_container">
			<h1>Login</h1>
			<form className="form_container" onSubmit={onSubmitData}>
				<div className="inpu_container">
					<FaRegUser className="image" />
					<input
						type="text"
						placeholder="user name.."
						className="input"
						name="userName"
						value={userFields.userName}
						onChange={onChnageFeilds}
					/>
				</div>

				<div className="inpu_container">
					<AiOutlineLock className="image" />
					<input
						type="password"
						placeholder="password.."
						className="input"
						name="password"
						value={userFields.password}
						onChange={onChnageFeilds}
					/>
				</div>
				<button type="submit" className="button">
					Login
				</button>
				<p>You don't have an account ?</p>
				<button className="btn">
					<Link to="/signup">Sign Up</Link>
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
