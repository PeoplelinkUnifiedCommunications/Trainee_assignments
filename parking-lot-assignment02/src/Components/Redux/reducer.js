const intialState = {
	userVehicalData: [],
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case "Add_data":
			return {
				...state,
				userVehicalData: [...state.userVehicalData, action.data],
			};
		case "del_data":
			return {
				...state,
				userVehicalData: [
					...state.userVehicalData.filter(each => each.id !== action.id),
				],
			};
		default:
			return state;
	}
};

export default reducer;
