export const addData = (value) => async (dispatch) => {
    dispatch({
        type: "ADD",
        payload: value,
    });
  };