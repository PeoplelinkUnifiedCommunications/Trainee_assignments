import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
	genSlots: 0,
	allotedSlots: [],
	toUpdateSlotsDetails: {},
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
			state.value.allotedSlots = [...state.value.allotedSlots, action.payload];
		},
		deleteSlot: (state, action) => {
			state.value.allotedSlots = state.value.allotedSlots.filter(
				(each) => each.id !== action.payload
			);
		},
		updateSlot: (state, action) => {
			state.value.toUpdateSlotsDetails = action.payload;
		},
		updateSlotDetails: (state, action) => {
			let index = state.value.allotedSlots.findIndex(
				(each) => each.id === action.payload.id
			);
			state.value.allotedSlots.slice(index, 1, action.payload);
		},
		sortedItems: (state, action) => {
			state.value.searchvalue = action.payload;
		},
	},
});

export const {
	addSlots,
	updateGenSlots,
	deleteSlot,
	updateSlot,
	sortedItems,
	updateSlotDetails,
} = userSlice.actions;

export default userSlice.reducer;
