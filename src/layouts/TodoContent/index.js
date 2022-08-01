import { useStore } from '../../components/store';
import Todo from '../../components/Todo';

function TodoContent({ btnRef }) {
    const [state] = useStore();

    const handleRender = () => {
        const result = state.todos.map((task, index) => (
            <Todo key={index} index={index} content={task} btnRef={btnRef} />
        ));
        console.log(result);

        return result;
    };

    return (
        <div className="content">
            <ul className="items">{handleRender()}</ul>
        </div>
    );
}

export default TodoContent;
