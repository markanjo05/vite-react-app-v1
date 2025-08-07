import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const usersInitialState = {
	isLoggedIn: false,
};

const usersSlice = createSlice({
	name: "users",
	initialState: usersInitialState,
	reducers: {
		setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
			state.isLoggedIn = action.payload;
		},
	},
});

export const usersStoreState = (state: RootState) => state.users;
export const { setIsLoggedIn } = usersSlice.actions;

export default usersSlice;
