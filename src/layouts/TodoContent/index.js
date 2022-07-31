import { useStore } from '../../components/store';
import Todo from '../../components/Todo';

function TodoContent({ btnRef }) {
    const [state] = useStore();

    return (
        <div className="content">
            <ul className="items">
                {state.todos.map((task, index) => (
                    <Todo key={index} index={index} content={task} btnRef={btnRef} />
                ))}
            </ul>
        </div>
    );
}

export default TodoContent;
