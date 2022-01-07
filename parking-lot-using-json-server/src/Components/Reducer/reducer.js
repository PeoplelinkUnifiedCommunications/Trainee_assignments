const intialState = {
	editbleData: {},
	isEdit: false,
};

const Reducer = (state = intialState, action) => {
	switch (action.type) {
		case "EDIT":
			return {
				...state,
				editbleData: action.editData,
				isEdit: true,
			};
		case "SUBMIT":
			return {
				...state,
				isEdit: false,
			};

		default:
			return state;
	}
};

export default Reducer;
