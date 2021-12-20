const initialState = [];
const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [...state, action.newList];
		default:
			return state;
	}
};

export default appReducer;
