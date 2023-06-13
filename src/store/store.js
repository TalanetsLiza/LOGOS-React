import { combineReducers, createStore } from "redux";
import busketReducer from "./busketReducer/busketReducer";


const rootReducer = combineReducers({
	busket: busketReducer,
});

export const store = createStore(rootReducer);
