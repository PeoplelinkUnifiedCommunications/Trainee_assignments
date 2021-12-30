import "./index.css";

const InputForm = (props) => {
	const {
		form,
		error,
		isUpdate,
		onChangeNameInput,
		onChangeRegInput,
		onChangeColorInput,
		onChangeSlotInput,
		onSubmitInputForm,
	} = props;

	const onChangeName = (e) => {
		onChangeNameInput(e.target.value);
	};

	const onChangeReg = (e) => {
		onChangeRegInput(e.target.value);
	};

	const onChangeColor = (e) => {
		onChangeColorInput(e.target.value);
	};

	const onChangeSlot = (e) => {
		onChangeSlotInput(e.target.value);
	};

	const onSubmitform = (event) => {
		onSubmitInputForm(event);
	};

	return (
		<form
			className='form-container'
			autoComplete='true'
			onSubmit={onSubmitform}>
			<div className='inputs-container'>
				<input
					type='text'
					className='input-field'
					value={form.ownerName}
					placeholder='Owner_name'
					onChange={onChangeName}
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
					onChange={onChangeReg}
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
					onChange={onChangeColor}
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
					onChange={onChangeSlot}
				/>
				{error.slotNumberError && (
					<p className='error-msg'>{error.slotNumberError}</p>
				)}
			</div>
			<div className='submit-cont'>
				{isUpdate ? (
					<button type='submit' className='submit-button'>
						Update the Solt
					</button>
				) : (
					<button type='submit' className='submit-button'>
						Allot the Solt
					</button>
				)}
				{error.noSlots && <p className='error-msg'>{error.noSlots}</p>}
			</div>
		</form>
	);
};

export default InputForm;
