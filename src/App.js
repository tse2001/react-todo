import './App.css';

import TodoHeader from './layouts/TodoHeader';
import TodoInput from './layouts/TodoInput';
import TodoButton from './layouts/TodoButton';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                {/* Title */}
                <TodoHeader/>

                {/* Input */}
                <TodoInput/>

                {/* Buttons */}
                <TodoButton/>
            </div>
        </div>
    );
}

export default App;
