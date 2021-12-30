import { createSlice } from "@reduxjs/toolkit";

export const parkingSlice = createSlice({
    name: "ParkingData",
    initialState: {
        slots: 0,
        dataList: [],
        clickEdit: false,
        editableData: [],
        search: "",
    },
    reducers: {
        addSlots: (state, action) => {
            state.slots = state.slots + action.payload;
        },
        addData: (state, action) => {
            state.dataList.push(action.payload);
        },
        delData: (state, action) => {
            state.dataList = state.dataList.filter(
                (each) => each.id !== action.payload
            );
            state.editableData = [];
            state.clickEdit = false;
        },
        editData: (state, action) => {
            state.editableData = state.dataList.filter(
                (each) => each.id === action.payload
            );
            state.clickEdit = true;
            // console.log(current(state));
        },
        onUpdate: (state, action) => {
            // state.dataList = state.dataList.filter((each) => {
            //     if (each.id === action.payload.id) {
            //         return action.payload;
            //     } else {
            //         return each;
            //     }
            // });
            const index = state.dataList.findIndex(
                (each) => each.id === action.payload.id
            );
            state.dataList.splice(index, 1, action.payload);
            state.clickEdit = false;
        },
        onSearch: (state, action) => {
            state.search = action.payload;
        },
    },
});

export const { addSlots, addData, delData, editData, onUpdate, onSearch } =
    parkingSlice.actions;
export default parkingSlice.reducer;
