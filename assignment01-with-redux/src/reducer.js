import { createSlice } from "@reduxjs/toolkit";

const initial = [];

const stateSlice = createSlice({
    name: "formData",
    initialState: { value: initial },
    reducers: {
        addData: (state, action) => {
            state.value.push(action.payload);
        },
        delData: (state, action) => {
            state.value = state.value.filter(
                (each) => each.id !== action.payload
            );
        },
    },
});
export const { addData, delData } = stateSlice.actions;
export default stateSlice.reducer;
