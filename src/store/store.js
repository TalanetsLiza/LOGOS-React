import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import busketSlice from "./busketReducer/busketSlice";
import weatherSlice from "./weather/weatherSlice";


const rootReducer = combineReducers({
	busket: busketSlice,
	weather: weatherSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
