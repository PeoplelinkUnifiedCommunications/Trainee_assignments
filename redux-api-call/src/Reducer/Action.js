export const fetchUserRequest = () => ({
	type: "Fetch_User_Request",
});

export const fetchUserSuccess = user => ({
	type: "Fetch_User_Sucess",
	user,
});

export const fetchUserFail = error => ({
	type: "Fetch_User_Fail",
	error,
});
