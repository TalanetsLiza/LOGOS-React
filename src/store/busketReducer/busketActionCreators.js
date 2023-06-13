import { ADD, DECREASE_COUNT, DELETE_COUNT, INCREASE_COUNT } from "./busketActionTypes";

const decreaseCount = (payload) => ({ type: DECREASE_COUNT, payload });
const deleteCount = (payload) => ({ type: DELETE_COUNT, payload });
const increaseCount = (payload) => ({ type: INCREASE_COUNT, payload });
const add = (payload) => ({ type: ADD, payload });


const busketActionCreators = {
    decreaseCount,
    deleteCount,
    increaseCount,
    add,
};

export default busketActionCreators;
