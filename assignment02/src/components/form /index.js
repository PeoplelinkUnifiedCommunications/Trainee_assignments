import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateGenSlots, addSlots } from "../../store/index";

import "./index.css";

function Form() {
	const data = useSelector((state) => state.user.value);
	const { genSlots, allotedSlots, toUpdateSlotsDetails } = data;
	console.log(toUpdateSlotsDetails.ownerName);
	const [form, setForm] = useState({
		ownerName: "",
		regNumber: "",
		vehicleColor: "",
		slotNumber: "",
	});

	const [slots, setSlots] = useState(genSlots);

	const [error, setError] = useState({});
	const dispatch = useDispatch();

	const dispatchSlots = () => {
		dispatch(updateGenSlots(slots));
	};

	function validateColor(data) {
		var s = new Option().style;
		s.color = data;
		return s.color === data.toLowerCase();
	}
	const validateCharecters = function (data) {
		var regex = /^([a-zA-Z ]+)$/;
		return regex.test(data);
	};
	const validateRegNumber = (data) => {
		var regex = /^[A-Z]{2}[0-9]{2}(-)[A-Z]{2}(-)[0-9]{4}$/;
		return regex.test(data);
	};
	const validateSlot = (data) => {
		var regex = /^[0-9]+$/;
		return regex.test(data);
	};

	const validate = () => {
		const errorObject = {};
		let retValue = true;
		const isSlotExist = allotedSlots.find(
			(each) => parseInt(each.slotNumber) === parseInt(form.slotNumber)
		);
		if (form.ownerName === "") {
			errorObject.ownerNameError = "Enter The Name";
			retValue = false;
		} else if (!validateCharecters(form.ownerName)) {
			errorObject.ownerNameError = "Enter The Valid Name";
			retValue = false;
		}
		if (form.regNumber === "") {
			errorObject.regNumberError = "Enter The regNumber";
			retValue = false;
		} else if (!validateRegNumber(form.regNumber)) {
			errorObject.regNumberError = "Enter The Valid Registration number";
			retValue = false;
		}
		if (form.vehicleColor === "") {
			errorObject.vehicleColorError = "Enter The vehicleColor";
			retValue = false;
		} else if (!validateColor(form.vehicleColor)) {
			errorObject.vehicleColorError = "Enter The Valid Color";
			retValue = false;
		}
		if (form.slotNumber === "") {
			errorObject.slotNumberError = "Enter The slotNumber";
			retValue = false;
		} else if (!validateSlot(form.slotNumber)) {
			errorObject.slotNumberError = "Enter The Valid slot";
			retValue = false;
		} else if (
			!(parseInt(form.slotNumber) > 0 && parseInt(form.slotNumber) <= genSlots)
		) {
			errorObject.slotNumberError = `Enter Slot Number Between 1 to ${genSlots}`;
			retValue = false;
		} else if (isSlotExist) {
			errorObject.slotNumberError = "SlotNumber Already Exists";
			retValue = false;
		}
		setError(errorObject);
		return retValue;
	};

	const onSubmitform = (event) => {
		event.preventDefault();
		if (validate()) {
			if (allotedSlots.length === genSlots) {
				alert("No More Slots Available");
			} else {
				let modifiedSlot;
				if (parseInt(form.slotNumber) < 10) {
					modifiedSlot = `00${parseInt(form.slotNumber)}`;
				} else if (parseInt(form.slotNumber) < 100) {
					modifiedSlot = `0${parseInt(form.slotNumber)}`;
				} else {
					modifiedSlot = parseInt(form.slotNumber);
				}

				const newSlot = {
					id: allotedSlots.length + 1,
					ownerName: form.ownerName,
					regNumber: form.regNumber,
					vehicleColor: form.vehicleColor,
					slotNumber: modifiedSlot,
				};
				setForm({
					ownerName: "",
					regNumber: "",
					vehicleColor: "",
					slotNumber: "",
				});
				dispatch(addSlots(newSlot));
			}
		}
	};

	return (
		<div className='form-gen'>
			<form className='form-container' onSubmit={onSubmitform}>
				<div className='inputs-container'>
					<input
						type='text'
						className='input-field'
						value={form.ownerName}
						placeholder='Owner_name'
						onChange={(e) =>
							setForm((prev) => ({ ...prev, ownerName: e.target.value }))
						}
					/>
					{error.ownerNameError && (
						<p className='error-msg'>{error.ownerNameError}</p>
					)}
				</div>
				<div>
					<input
						type='text'
						className='input-field'
						value={form.regNumber}
						placeholder='Registration_Number'
						onChange={(e) =>
							setForm((prev) => ({ ...prev, regNumber: e.target.value }))
						}
					/>
					{error.regNumberError && (
						<p className='error-msg'>{error.regNumberError}</p>
					)}
				</div>
				<div>
					<input
						type='text'
						className='input-field'
						value={form.vehicleColor}
						placeholder='Car/Bike_Color'
						onChange={(e) =>
							setForm((prev) => ({ ...prev, vehicleColor: e.target.value }))
						}
					/>
					{error.vehicleColorError && (
						<p className='error-msg'>{error.vehicleColorError}</p>
					)}
				</div>
				<div>
					<input
						type='text'
						className='input-field'
						placeholder='Slot_Number'
						value={form.slotNumber}
						onChange={(e) =>
							setForm((prev) => ({
								...prev,
								slotNumber: e.target.value,
							}))
						}
					/>
					{error.slotNumberError && (
						<p className='error-msg'>{error.slotNumberError}</p>
					)}
				</div>

				<button type='submit' className='submit-button'>
					Allot the Solt
				</button>
			</form>
			<div className='generate-slot-cont'>
				<div className='slot-cont'>
					<label htmlFor='gen-slot'>Genrate Slots:</label>
					<input
						type='number'
						id='gen-slot'
						value={slots}
						className='slots-avil'
						onChange={(e) => setSlots(e.target.value)}
					/>
				</div>
				<div style={{ textAlign: "center" }}>
					<button
						className='submit-button generate'
						type='button'
						onClick={dispatchSlots}>
						Genrate
					</button>
				</div>
				<div className='slot-cont'>
					Available Slots:
					<label htmlFor='gen-slot'></label>
					<input
						type='text'
						id='gen-slot'
						className='slots-avil'
						readOnly
						value={genSlots - allotedSlots.length}
					/>
				</div>
				<div className='slot-cont'>
					<label htmlFor='gen-slot'>Allotted Slots:</label>
					<input
						type='text'
						id='gen-slot'
						className='slots-avil'
						value={allotedSlots.length}
						readOnly
					/>
				</div>
			</div>
		</div>
	);
}

export default Form;
