import ListContext from "../Context/ListContext";
import { v4 } from "uuid";
import { React, useContext, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import "./index.css";
import moment from "moment";

const FormContainer = props => {
	const [validation1, setvalidation1] = useState({
		nameValidation: "",
		emailValidation: "",
		dateValidation: "",
	});
	//const [validation2, setvalidation2] = useState({ emailValidation: "" });
	//const [validation3, setvalidation3] = useState({ dateValidation: "" });
	let [name, setname] = useState("");
	let [email, setemail] = useState("");
	let [date, setdate] = useState("");
	const blurNameInput = event => {
		if (event.target.value === "") {
			setvalidation1(prevState => ({
				...prevState,
				nameValidation: "**Required**",
			}));
		} else {
			setvalidation1(prevState => ({ ...prevState, nameValidation: "" }));
		}
	};
	const blurEmailInput = event => {
		if (event.target.value === "") {
			setvalidation1(prevState => ({
				...prevState,
				emailValidation: "**Required**",
			}));
		} else {
			setvalidation1(prevState => ({ ...prevState, emailValidation: "" }));
		}
	};
	const blurDateInput = event => {
		if (event.target.value === "") {
			setvalidation1(prevState => ({
				...prevState,
				dateValidation: "**Required**",
			}));
			setdate("");
		} else {
			setvalidation1(prevState => ({ ...prevState, dateValidation: "" }));
		}
	};
	const nameInput = event => {
		setvalidation1(prevState => ({ ...prevState, nameValidation: "" }));
		setname(event.target.value);
		if (event.target.value === "") {
			setvalidation1(prevState => ({
				...prevState,
				nameValidation: "**Required**",
			}));
		}
		if (event.target.value.match(/^[A-Za-z]+$/)) {
			setvalidation1(prevState => ({ ...prevState, nameValidation: "" }));
		} else if (
			event.target.value.match(/^[A-Za-z]+$/) === null &&
			event.target.value !== ""
		) {
			setvalidation1(prevState => ({
				...prevState,
				nameValidation: "**Name formate is wrong**",
			}));
		}
	};
	const emailInput = event => {
		setvalidation1(prevState => ({ ...prevState, emailValidation: "" }));
		setemail(event.target.value);

		setvalidation1(prevState => ({ ...prevState, emailValidation: "" }));
	};
	const dateInput = event => {
		setvalidation1(prevState => ({ ...prevState, dateValidation: "" }));
		setdate(event.target.value);
		let result = moment(event.target.value, "MM/DD/YYYY").isValid();
		console.log(result);
		if (event.target.value === "") {
			setvalidation1(prevState => ({
				...prevState,
				dateValidation: "**Required**",
			}));
			setdate("");
		} else {
			if (result === true) {
				if (new Date(event.target.value) > new Date()) {
					setvalidation1(prevState => ({
						...prevState,
						dateValidation: "**Date is invalid**",
					}));
				} else {
					setvalidation1(prevState => ({ ...prevState, dateValidation: "" }));
				}
			} else {
				setvalidation1(prevState => ({
					...prevState,
					dateValidation: "**Date is invalid**",
				}));
			}
		}
	};
	var regex =
		/^((([a-zA-Z]|[0-9])|([-]|[_]|[.])){1,})+[@](([a-zA-Z0-9])|([-]|[.])){2,40}[.]((([a-zA-Z0-9]){2,10})|(([a-zA-Z0-9]){2,4}[.]([a-zA-Z0-9]){2,4}))$/;
	const context = useContext(ListContext);
	const submtDetails = event => {
		event.preventDefault();
		let age;
		if (date !== "") {
			const userDate = new Date(date);
			const nowDate = new Date();
			age = nowDate.getFullYear() - userDate.getFullYear();
		}
		const newList = {
			id: v4(),
			name: name,
			email: email,
			date: age,
		};
		if (name === "") {
			setvalidation1(prevState => ({
				...prevState,
				nameValidation: "**Required**",
			}));

			setvalidation1(prevState => ({
				...prevState,
				emailValidation: "",
			}));
		}
		if (email === "") {
			setvalidation1(prevState => ({
				...prevState,
				emailValidation: "**Required**",
			}));
		}
		if (date === "") {
			setvalidation1(prevState => ({
				...prevState,
				dateValidation: "**Required**",
			}));

			setdate("");
		}
		if (name === "" || email === "" || date === "") {
		} else {
			if (moment(date, "MM/DD/YYYY").isValid() === false) {
				setvalidation1(prevState => ({
					...prevState,
					dateValidation: "**Date is invalid**",
				}));
			} else if (
				newList.name.match(/^[A-Za-z]+$/) === null &&
				newList.name !== ""
			) {
				setvalidation1(prevState => ({
					...prevState,
					nameValidation: "**Name formate is wrong**",
				}));
			} else if (newList.email.match(regex)) {
				const emailAvalibel = context.list.find(
					each => each.email === newList.email
				);
				if (emailAvalibel) {
					setvalidation1(prevState => ({
						...prevState,
						emailValidation: "**Email alredy exits**",
					}));
				} else {
					setvalidation1(prevState => ({
						...prevState,
						emailValidation: "",
					}));
					context.addList(newList);
					const { history } = props;
					history.replace("/");
				}
			} else if (newList.email !== "" || newList.email.match(regex)) {
				setvalidation1(prevState => ({
					...prevState,
					emailValidation: "**Email wrong**",
				}));
			}
		}
	};
	return (
		<div className="bg-container">
			<div className="from-container">
				<form className="form" onSubmit={submtDetails}>
					<label htmlFor="text">Name</label>
					<div className="margin">
						<div className="input-container" id="text">
							<div className="icon-container">
								<FaUserAlt className="image" />
							</div>
							<input
								type="text"
								aria-label="Primary"
								id="text"
								className="inputText"
								onChange={nameInput}
								onBlur={blurNameInput}
							/>
						</div>
						<p className="errorMsg">{validation1.nameValidation}</p>
						<br />
					</div>
					<label htmlFor="email">Email</label>
					<div className="margin">
						<div className="input-container" id="email">
							<div className="icon-container">
								<AiFillMail className="image" />
							</div>
							<input
								type="text"
								id="text"
								className="inputText"
								onChange={emailInput}
								onBlur={blurEmailInput}
							/>
						</div>
						<p className="errorMsg">{validation1.emailValidation}</p>
						<br />
					</div>
					<label htmlFor="date">Date Of Birth: MM/DD/YY</label>
					<div className="margin">
						<div className="input-container" id="date">
							<div className="icon-container">
								<AiFillMail className="image" />
							</div>
							<input
								type="text"
								id="text"
								className="inputText"
								onChange={dateInput}
								onBlur={blurDateInput}
							/>
						</div>
						<p className="errorMsg">{validation1.dateValidation}</p>
						<br />
					</div>
					<button type="submit" className="btn">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};
export default FormContainer;
