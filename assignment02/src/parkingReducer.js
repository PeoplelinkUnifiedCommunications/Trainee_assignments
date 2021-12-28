import { createSlice } from "@reduxjs/toolkit";

export const parkingSlice = createSlice({
    name: "ParkingData",
    initialState: { value: [] },
    reducers: {
        addData: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

export const { addData } = parkingSlice.actions;
export default parkingSlice.reducer;
