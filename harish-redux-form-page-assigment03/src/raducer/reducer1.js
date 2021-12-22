const initialState = [];
const appReducer1 = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TASK":
			return [...state, action.newList];
		case "del":
			return state.filter(each => each.id !== action.id);
		default:
			return state;
	}
	//reducer
};

export default appReducer1;
