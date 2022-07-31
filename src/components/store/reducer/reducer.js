import { SET_INPUT, ADD_TODO, CHANGE_TODO, DEL_TODO, SET_INDEX } from './constains';

const initState = {
    todos: [],
    todoInput: '',
    indexClick: -1,
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_INPUT: {
            return {
                ...state,
                todoInput: action.payload,
            };
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        }
        case DEL_TODO: {
            const newState = [...state.todos];
            newState.splice(action.payload, 1);
            return {
                ...state,
                todos: newState,
            };
        }
        case CHANGE_TODO: {
            const newState = [...state.todos];
            newState[action.payload.index] = action.payload.value;
            return {
                ...state,
                todos: newState,
            };
        }
        case SET_INDEX: {
            return {
                ...state,
                indexClick: action.payload,
            };
        }
        default:
            throw new Error('Invalid action!');
    }
};

export { initState };
export default reducer;
