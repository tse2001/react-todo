import './App.css';
import { TextField, Button } from '@mui/material/';
import { Add } from '@mui/icons-material';
import { useMemo, useRef } from 'react';
import Todo from './components/Todo';
import { actions, useStore } from './components/store';

function App() {
    const [state, dispatch] = useStore();
    const { todoInput, todos, indexClick } = state;
    const btnRef = useRef();

    const handleClick = () => {
        if (btnRef.current.textContent === 'Add') {
            dispatch(actions.addTodo(todoInput));
            dispatch(actions.setInput(''));
        } else {
            dispatch(actions.changeTodo({value: todoInput, index: indexClick}));
            dispatch(actions.setInput(''));
            btnRef.current.textContent = 'Add';
            btnRef.current.startIcon = <Add />;
            console.log(btnRef.current.textContent);
        }
    };

    const handleRenderTask = useMemo(() => {
        const tasks = todos.map((task, index) => <Todo key={index} index={index} content={task} btnRef={btnRef} />);

        return tasks;
    }, [todos]);

    return (
        <div className="App">
            <div className="wrapper">
                {/* Title */}
                <header>To do</header>

                {/* Input */}
                <div className="todo-input">
                    <TextField
                        className="input"
                        id="outlined-basic"
                        label="Your task"
                        variant="outlined"
                        value={todoInput}
                        onChange={(e) => dispatch(actions.setInput(e.target.value))}
                    />
                </div>

                {/* Buttons */}
                <div className="todo-buttons">
                    <Button
                        ref={btnRef}
                        variant="contained"
                        startIcon={<Add />}
                        style={{
                            width: '90%',
                        }}
                        onClick={handleClick}
                    >
                        Add
                    </Button>
                </div>

                <div className="content">
                    <ul className="items">{handleRenderTask}</ul>
                </div>
            </div>
        </div>
    );
}

export default App;
