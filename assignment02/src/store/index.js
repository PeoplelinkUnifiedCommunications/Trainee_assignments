import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	genSlots: 0,
	toUpdateSlotsDetails: [],
	searchvalue: "",
};

export const userSlice = createSlice({
	name: "ram",
	initialState: { value: initialStateValue },
	reducers: {
		updateGenSlots: (state, action) => {
			state.value.genSlots = parseInt(action.payload);
		},
		updateSlot: (state, action) => {
			state.value.toUpdateSlotsDetails = [action.payload];
		},
		sortedItems: (state, action) => {
			state.value.searchvalue = action.payload;
		},
	},
});

export const { updateGenSlots, updateSlot, sortedItems } = userSlice.actions;

export default userSlice.reducer;
