import { SET_INPUT, SET_INDEX, ADD_TODO, CHANGE_TODO, DEL_TODO } from './constains';

export const setInput = (payload) => ({
    type: SET_INPUT,
    payload,
});

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload,
});

export const delToDo = (payload) => ({
    type: DEL_TODO,
    payload,
});

export const changeTodo = (payload) => ({
    type: CHANGE_TODO,
    payload,
});

export const setIndex = (payload) => ({
    type: SET_INDEX,
    payload,
});
