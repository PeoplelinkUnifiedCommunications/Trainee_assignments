import "./index.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addData } from "../Redux/action";
import { v4 } from "uuid";

const FormContainer = ({ appState, addNewData }) => {
	const [userFileds, setuserFileds] = useState({
		ownerName: "",
		registraionNumber: "",
		color: "",
		slotNumber: "",
	});

	const ownerNameInput = e => {
		setuserFileds(prevState => ({
			...prevState,
			ownerName: e.target.value,
		}));
	};
	const registraionNumberInput = e => {
		setuserFileds(prevState => ({
			...prevState,
			registraionNumber: e.target.value,
		}));
	};
	const colorInput = e => {
		setuserFileds(prevState => ({
			...prevState,
			color: e.target.value,
		}));
	};
	const slotInput = e => {
		setuserFileds(prevState => ({
			...prevState,
			slotNumber: e.target.value,
		}));
	};
	const onsubmit = e => {
		e.preventDefault();
		const newData = {
			id: v4(),
			ownerName: userFileds.ownerName,
			registraionNumber: userFileds.registraionNumber,
			color: userFileds.color,
			slotNum: userFileds.slotNumber,
		};
		addNewData(newData);
	};
	return (
		<form className="form" onSubmit={onsubmit}>
			<input
				type="text"
				className="input_tag"
				placeholder="Owner_Name"
				onChange={ownerNameInput}
			/>
			<input
				type="text"
				className="input_tag"
				placeholder="Registration_Number"
				onChange={registraionNumberInput}
			/>
			<input
				type="text"
				className="input_tag"
				placeholder="Car/Bike_Colour"
				onChange={colorInput}
			/>
			<input
				type="text"
				className="input_tag"
				placeholder="Slot_Number"
				onChange={slotInput}
			/>
			<button type="submit" className="sub_btn">
				Submit
			</button>
		</form>
	);
};

const mapStateToProps = state => ({
	appState: state,
});

const mapDispatchToProps = dispatch => ({
	addNewData: newData => dispatch(addData(newData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
