import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {
		totalPerPerson: 0
	}
};

export const totalPerPersonSlice = createSlice({
	name: "TOTAL_PER_PERSON",
	initialState,
	reducers: {
		changeTotalPerPerson: (state, action) => {
			state.value.totalPerPerson = action.payload;
		}
	}
});

export const { changeTotalPerPerson } = totalPerPersonSlice.actions;

export default totalPerPersonSlice.reducer;
