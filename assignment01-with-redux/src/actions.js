export const addUser = (value) => async (dispatch) => {
    dispatch({
        type: "ADD",
        payload: value,
    });
};
