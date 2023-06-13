import { createSlice } from "@reduxjs/toolkit";
import busketInitialState from "./busketInitialState";

const busketSlice = createSlice({
    name: "busket",
    initialState: {
        data: busketInitialState,
    },
    reducers: {
        add: (state, action) => {
            const id = action.payload;
            const newItem = { id, count: 1 };
            state.data.push(newItem);
            
        },
        increase: (state, action) => {
            const id = action.payload;
            const dataItem = state.data.find((item) => item.id === id);
            if (dataItem) {
                dataItem.count++;
            };
        },
        decrease: (state, action) => {
            const id = action.payload;
            const dataItem = state.data.find((item) => item.id === id);
            if (dataItem) {
                dataItem.count--;
            };
        },
        remove: (state, action) => {
            const id = action.payload;
            state.data = state.data.filter((item) => item.id !== id);
        },
    },

});

export const { add, increase, decrease, remove } = busketSlice.actions;

export default busketSlice.reducer;
