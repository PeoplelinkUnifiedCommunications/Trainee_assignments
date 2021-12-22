import { createSlice } from "@reduxjs/toolkit";

const initial = [];

const stateSlice = createSlice({
    name: "formData",
    initialState: initial,
    reducers: {
        addData: (state, action) => {
            console.log(state, action.payload);
            state.push(action.payload);
        },
        delData: (state, action) => {
            console.log(action.payload);
            state.filter((each) => each.id !== action.payload);
        },
    },
});
export const { addData, delData } = stateSlice.actions;
export default stateSlice.reducer;
