import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import busketSlice from "./busketReducer/busketSlice";


const rootReducer = combineReducers({
	busket: busketSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
