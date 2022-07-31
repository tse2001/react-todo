import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { actions, useStore } from '../store';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
function Todo({ index, content, btnRef }) {
    const [ ,dispatch] = useStore();

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
                        onClick={() => {
                            btnRef.current.textContent = 'Change';
                            btnRef.current.startIcon = <ChangeCircleIcon />;
                            dispatch(actions.setInput(content));
                            dispatch(actions.setIndex(index));
                        }}
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
