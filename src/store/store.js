import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import busketSlice from "./busketReducer/busketSlice";
import weatherSlice from "./weather/weatherSlice";
import menuSlice from "./menu/menuSlice";


const rootReducer = combineReducers({
	busket: busketSlice,
	weather: weatherSlice,
	menu: menuSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
