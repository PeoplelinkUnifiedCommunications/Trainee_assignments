const intialState = {
	user: [],
	error: "",
	isLoading: false,
};

const reducer = (state = intialState, action) => {
	switch (action.type) {
		case "Fetch_User_Request":
			return { ...state, isLoading: true };
		case "Fetch_User_Sucess":
			return { ...state, user: action.user, isLoading: false, error: "" };
		case "Fetch_User_Fail":
			return { ...state, user: [], isLoading: false, error: action.error };
		default:
			return state;
	}
};

export default reducer;
