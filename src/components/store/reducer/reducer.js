import { SET_INPUT, ADD_TODO, CHANGE_TODO, DEL_TODO, SET_INDEX } from './constains';

const initState = {
    todos: JSON.parse(localStorage.getItem('todoList')) || [],
    todoInput: '',
    indexClick: -1,
};

const saveStateLocalStore = (state) => {
    localStorage.setItem('todoList', JSON.stringify(state))
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_INPUT: {
            return {
                ...state,
                todoInput: action.payload,
            };
        }
        case ADD_TODO: {
            const newState = [...state.todos, action.payload];
            saveStateLocalStore(newState);
            return {
                ...state,
                todos: newState,
            };
        }
        case DEL_TODO: {
            const newState = [...state.todos];
            newState.splice(action.payload, 1);
            saveStateLocalStore(newState);
            return {
                ...state,
                todos: newState,
            };
        }
        case CHANGE_TODO: {
            const newState = [...state.todos];
            newState[action.payload.index] = action.payload.value;
            saveStateLocalStore(newState);
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
