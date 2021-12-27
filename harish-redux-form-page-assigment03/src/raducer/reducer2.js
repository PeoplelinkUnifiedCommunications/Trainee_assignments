const initialState2 = "";
const appReducer2 = (state = initialState2, action) => {
	switch (action.type) {
		case "greeting":
			return (state = `Welcome ${action.name}`);
		default:
			return (state = "");
	}
	//reducer
};

export default appReducer2;
