import { configureStore } from "@reduxjs/toolkit";
import tipAmountReducer from "../features/tipAmount";
import totalPerPersonReducer from "../features/totalPerPerson";

export const store = configureStore({
	reducer: {
		tipAmount: tipAmountReducer,
		totalPerPerson: totalPerPersonReducer
	}
});
