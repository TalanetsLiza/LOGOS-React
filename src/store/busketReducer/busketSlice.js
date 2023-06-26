import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
    const getState = localStorage.getItem("busket");

    if (getState) {
        const state = JSON.parse(getState);
        return state;
    }
    return {
        data: [],
    };
};

const saveToLocalSrorage = (state) => {
    const jsonState = JSON.stringify(state);
    localStorage.setItem("busket", jsonState);
};

const busketSlice = createSlice({
    name: "busket",
    initialState: getInitialState(),
    reducers: {
        add: (state, action) => {
            const id = action.payload;
            const newItem = { id, count: 1 };
            state.data.push(newItem);
            saveToLocalSrorage(state);
            
        },
        increase: (state, action) => {
            const id = action.payload;
            const dataItem = state.data.find((item) => item.id === id);
            if (dataItem) {
                dataItem.count++;
            };
            saveToLocalSrorage(state);
        },
        decrease: (state, action) => {
            const id = action.payload;
            const dataItem = state.data.find((item) => item.id === id);
            if (dataItem) {
                dataItem.count--;
            }
            if (dataItem.count === 0) {
                state.data = state.data.filter((item) => item.id !== id);
            }
            saveToLocalSrorage(state);
        },
        remove: (state, action) => {
            const id = action.payload;
            state.data = state.data.filter((item) => item.id !== id);
            saveToLocalSrorage(state);
        },
    },

});

export const { add, increase, decrease, remove } = busketSlice.actions;

export default busketSlice.reducer;
