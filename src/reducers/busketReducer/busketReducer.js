import { ADD, DECREASE_COUNT, INCREASE_COUNT } from "./types";


const busketReducer = (state, action) => {
    switch(action.type) {
        case ADD: {
            const { id } = action;

            const newItem = { id, count: 1 };
            const newState = [...state, newItem];

            return newState;
        };
        case INCREASE_COUNT: {
            const { id } = action;

            const newState = state.map((item) => {
                if(item.id === id) {
                    return {
                        ...item,
                        count: item.count + 1,
                    };
                };
                return item;
            });

            return newState;
        };
        case DECREASE_COUNT: {
            const { id } = action;

            const newState = state
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

            return newState;
        };
        default: return state;
    };
};

export default busketReducer;
