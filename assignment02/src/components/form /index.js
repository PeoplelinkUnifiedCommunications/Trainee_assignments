import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateGenSlots, addSlots } from "../../store/index";
import InputForm from "../inputform";
import { v4 } from "uuid";

import "./index.css";

function Form() {
	const data = useSelector((state) => state.user.value);
	const { genSlots, allotedSlots, toUpdateSlotsDetails } = data;
	const [form, setForm] = useState({
		ownerName: "",
		regNumber: "",
		vehicleColor: "",
		slotNumber: "",
	});

	const isUpdate = toUpdateSlotsDetails.length !== 0;

	const [slots, setSlots] = useState(genSlots);

	const [error, setError] = useState({});
	const dispatch = useDispatch();

	const dispatchSlots = () => {
		dispatch(updateGenSlots(slots));
		setError({});
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

	useEffect(() => {
		if (toUpdateSlotsDetails.length !== 0) {
			setForm({
				ownerName: toUpdateSlotsDetails[0].ownerName,
				regNumber: toUpdateSlotsDetails[0].regNumber,
				vehicleColor: toUpdateSlotsDetails[0].vehicleColor,
				slotNumber: toUpdateSlotsDetails[0].slotNumber,
			});
		}
	}, [toUpdateSlotsDetails]);

	const validation = (errorObject) => {
		let valRet = true;
		const isSlotExist = allotedSlots.find(
			(each) => parseInt(each.slotNumber) === parseInt(form.slotNumber)
		);
		const isVehExist = allotedSlots.find(
			(each) => each.regNumber === form.regNumber
		);
		if (form.ownerName === "") {
			errorObject.ownerNameError = "Enter The Name";
			valRet = false;
		} else if (!validateCharecters(form.ownerName)) {
			errorObject.ownerNameError = "Enter The Valid Name";
			valRet = false;
		}
		if (form.regNumber === "") {
			errorObject.regNumberError = "Enter The regNumber";
			valRet = false;
		} else if (!validateRegNumber(form.regNumber)) {
			errorObject.regNumberError = "Enter The Valid Registration number";
			valRet = false;
		} else if (
			isVehExist &&
			toUpdateSlotsDetails[0] !== undefined &&
			form.regNumber !== toUpdateSlotsDetails[0].regNumber
		) {
			errorObject.regNumberError = "registration Already Exists";
			valRet = false;
		} else if (isVehExist && toUpdateSlotsDetails[0] === undefined) {
			errorObject.regNumberError = "registration number alredy exist";
			valRet = false;
		}
		if (form.vehicleColor === "") {
			errorObject.vehicleColorError = "Enter The vehicleColor";
			valRet = false;
		} else if (!validateColor(form.vehicleColor)) {
			errorObject.vehicleColorError = "Enter The Valid Color";
			valRet = false;
		}
		if (form.slotNumber === "") {
			errorObject.slotNumberError = "Enter The slotNumber";
			valRet = false;
		} else if (!validateSlot(form.slotNumber)) {
			errorObject.slotNumberError = "Enter The Valid slot";
			valRet = false;
		} else if (
			!(parseInt(form.slotNumber) > 0 && parseInt(form.slotNumber) <= genSlots)
		) {
			errorObject.slotNumberError = `Enter Slot Number Between 1 to ${genSlots}`;
			valRet = false;
		} else if (
			isSlotExist &&
			toUpdateSlotsDetails[0] !== undefined &&
			form.slotNumber !== toUpdateSlotsDetails[0].slotNumber
		) {
			errorObject.slotNumberError = "SlotNumber Already Exists";
			valRet = false;
		} else if (isSlotExist && toUpdateSlotsDetails[0] === undefined) {
			errorObject.slotNumberError = "SlotNumber Already Exists";
			valRet = false;
		}

		return valRet;
	};

	const validate = () => {
		const errorObject = {};
		let retValue = true;
		// const isSlotExist = allotedSlots.find(
		// 	(each) => parseInt(each.slotNumber) === parseInt(form.slotNumber)
		// );
		if (genSlots === allotedSlots.length) {
			if (toUpdateSlotsDetails.length === 0) {
				errorObject.noSlots = "No more slots available";
				retValue = false;
			} else {
				retValue = validation(errorObject);
			}
		} else {
			retValue = validation(errorObject);
		}

		setError(errorObject);
		return retValue;
	};

	const onSubmitInputForm = (event) => {
		event.preventDefault();
		if (genSlots === 0) {
			const errorObject = {};
			errorObject.noSlotsGenerated = "Please Generate Slots";
			setError(errorObject);
		} else if (validate()) {
			let modifiedSlot;
			if (parseInt(form.slotNumber) < 10) {
				modifiedSlot = `00${parseInt(form.slotNumber)}`;
			} else if (parseInt(form.slotNumber) < 100) {
				modifiedSlot = `0${parseInt(form.slotNumber)}`;
			} else {
				modifiedSlot = parseInt(form.slotNumber);
			}

			const newSlot = {
				id:
					toUpdateSlotsDetails.length === 0 ? v4() : toUpdateSlotsDetails[0].id,
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
	};

	const onChangeNameInput = (eve) => {
		setForm((prev) => ({ ...prev, ownerName: eve }));
	};

	const onChangeRegInput = (eve) => {
		setForm((prev) => ({ ...prev, regNumber: eve }));
	};

	const onChangeColorInput = (eve) => {
		setForm((prev) => ({ ...prev, vehicleColor: eve }));
	};

	const onChangeSlotInput = (eve) => {
		setForm((prev) => ({ ...prev, slotNumber: eve }));
	};

	return (
		<div className='form-gen'>
			<InputForm
				form={form}
				error={error}
				isUpdate={isUpdate}
				onChangeNameInput={onChangeNameInput}
				onChangeRegInput={onChangeRegInput}
				onChangeColorInput={onChangeColorInput}
				onChangeSlotInput={onChangeSlotInput}
				onSubmitInputForm={onSubmitInputForm}
			/>
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
					{error.noSlotsGenerated && (
						<p className='error-msg'>{error.noSlotsGenerated}</p>
					)}
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
