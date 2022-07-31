import { TextField } from '@mui/material/';
import { actions, useStore } from '../../components/store';

function ToDoInput() {
    const [state, dispatch] = useStore();

    return (
        <div className="todo-input">
            <TextField
                className="input"
                id="outlined-basic"
                label="Your task"
                variant="outlined"
                value={state.todoInput}
                onChange={(e) => dispatch(actions.setInput(e.target.value))}
            />
        </div>
    );
}

export default ToDoInput;
