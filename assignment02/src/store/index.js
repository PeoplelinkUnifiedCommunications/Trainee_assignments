import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	genSlots: 0,
	allotedSlots: [],
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
		addSlots: (state, action) => {
			if (state.value.toUpdateSlotsDetails.length === 0) {
				state.value.allotedSlots = [
					...state.value.allotedSlots,
					action.payload,
				];
			} else {
				let index = state.value.allotedSlots.findIndex(
					(each) => each.id === action.payload.id
				);
				state.value.allotedSlots.splice(index, 1, action.payload);
				state.value.toUpdateSlotsDetails = [];
			}
		},
		deleteSlot: (state, action) => {
			if (state.value.toUpdateSlotsDetails.length === 0) {
				state.value.allotedSlots = state.value.allotedSlots.filter(
					(each) => each.id !== action.payload
				);
			} else if (state.value.toUpdateSlotsDetails[0].id === action.payload) {
				state.value.allotedSlots = state.value.allotedSlots.filter(
					(each) => each.id !== action.payload
				);
				state.value.toUpdateSlotsDetails = [];
			}
		},
		updateSlot: (state, action) => {
			state.value.toUpdateSlotsDetails = [action.payload];
		},
		sortedItems: (state, action) => {
			state.value.searchvalue = action.payload;
		},
	},
});

export const { addSlots, updateGenSlots, deleteSlot, updateSlot, sortedItems } =
	userSlice.actions;

export default userSlice.reducer;
