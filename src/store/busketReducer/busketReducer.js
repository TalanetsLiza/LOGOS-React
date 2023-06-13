import busketInitialState from "./busketInitialState";
import { ADD, DECREASE_COUNT, DELETE_COUNT, INCREASE_COUNT } from "./busketActionTypes";

// const decreaseCount = (payload) => ({type:DECREASE_COUNT, payload});
// const deleteCount = (payload) => ({type:DELETE_COUNT, payload});
// const increaseCount = (payload) => ({type:INCREASE_COUNT, payload});

const initialState = {
    data: busketInitialState,
};

const busketReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD: {
            const id = action.payload;

            const newItem = { id, count: 1 };
            const newData = [...state.data, newItem];
            const newState = {
                ...state,
                data: newData
            }

            return newState;
        };
        case INCREASE_COUNT: {
            const id = action.payload;

            const newData = state.data.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        count: item.count + 1,
                    };
                };
                return item;
            });
            const newState = {
                ...state,
                data: newData
            }
            return newState;
        };
        case DECREASE_COUNT: {
            const id = action.payload;

            const newData = state.data
                .map((item) => {
                    if(item.id === id) {
                        return {
                            ...item,
                            count: item.count - 1,
                        };
                    };
                    return item;
                })
                .filter((item) => item.count > 0);
            const newState = {
                ...state,
                data: newData
            }
            return newState;   
        };
        case DELETE_COUNT: {
            const id = action.payload;

            const newData = state.data.filter((item) => item.id !== id);
            const newState = {
                ...state,
                data: newData
            }
            return newState;
        };
        default: return state;
    };
};

export default busketReducer;
