import { useRef } from 'react';
import { Button } from '@mui/material/';
import { actions, useStore } from '../../components/store';
import TodoContent from '../TodoContent';

function TodoButton() {
    const [state, dispatch] = useStore();
    const { todoInput ,indexClick } = state;
    const btnRef = useRef();

    const handleClick = () => {
        if (todoInput.trim() === '') {
            alert('Vui lòng nhập công việc khác khoảng trắng!');
        } else {
            if (btnRef.current.textContent === 'Add') {
                dispatch(actions.addTodo(todoInput));
                dispatch(actions.setInput(''));
            } else {
                dispatch(actions.changeTodo({ value: todoInput, index: indexClick }));
                dispatch(actions.setInput(''));
                btnRef.current.textContent = 'Add';
            }
        }
    };

    return (
        <>
            <div className="todo-buttons">
                <Button
                    ref={btnRef}
                    variant="contained"
                    style={{
                        width: '90%',
                    }}
                    onClick={handleClick}
                >
                    Add
                </Button>
            </div>

            <TodoContent btnRef={btnRef} />
        </>
    );
}

export default TodoButton;
