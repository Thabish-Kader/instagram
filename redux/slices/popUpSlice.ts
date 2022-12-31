import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface PopUpState {
	value: boolean;
}

// Define the initial state using that type
const initialState: PopUpState = {
	value: false,
};

export const popUpSlice = createSlice({
	name: "popUp",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		hide: (state, action) => {
			state.value;
		},
		show: (state, action: PayloadAction<boolean>) => {
			state.value = action.payload;
		},
	},
});

export const { hide, show } = popUpSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectpopUp = (state: RootState) => state.popUp.value;

export default popUpSlice.reducer;
