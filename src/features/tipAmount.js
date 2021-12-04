import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {
		tipAmount: 0
	}
};

export const tipAmountSlice = createSlice({
	name: "TIP_AMOUNT",
	initialState,
	reducers: {
		changeTipAmount: (state, action) => {
			state.value.tipAmount = action.payload;
		}
	}
});

export const { changeTipAmount } = tipAmountSlice.actions;

export default tipAmountSlice.reducer;
