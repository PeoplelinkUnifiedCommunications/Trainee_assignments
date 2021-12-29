import { createSlice } from "@reduxjs/toolkit";

export const parkingSlice = createSlice({
    name: "ParkingData",
    initialState: {
        slots: 0,
        dataList: [],
        clickEdit: false,
        editableData: {},
    },
    reducers: {
        addSlots: (state, action) => {
            state.slots = action.payload;
        },
        addData: (state, action) => {
            state.dataList.push(action.payload);
        },
        delData: (state, action) => {
            state.dataList = state.dataList.filter(
                (each) => each.id !== action.payload
            );
        },
        editData: (state, action) => {
            state.editableData = state.dataList.filter(
                (each) => each.id === action.payload
            );
            state.clickEdit = true;
            // console.log(current(state));
        },
        onUpdate: (state, action) => {
            let index = state.dataList.findIndex(
                (each) => each.id === action.payload.id
            );
            state.dataList.splice(index, 1, action.payload);
            state.clickEdit = false;
        },
    },
});

export const { addSlots, addData, delData, editData, onUpdate } =
    parkingSlice.actions;
export default parkingSlice.reducer;
