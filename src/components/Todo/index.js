import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { actions, useStore } from '../store';

function Todo({ index, content, btnRef }) {
    const [ ,dispatch] = useStore();

    const handleClick = () => {
        btnRef.current.textContent = 'Change';
        dispatch(actions.setInput(content));
        dispatch(actions.setIndex(index));
    }

    return (
        <li className="todo-item">
            <div className="item-content">
                <div className="item-text">
                    <span>{index + 1 + '. '}</span>
                    <span>{content}</span>
                </div>
                <div className="item-icon">
                    <button
                        className="item-buttons"
                        onClick={handleClick}
                    >
                        <BorderColorIcon />
                    </button>

                    <button className="item-buttons" onClick={() => dispatch(actions.delToDo(index))}>
                        <DeleteForeverIcon />
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Todo;
