import React from "react";
import AddIcon from '@mui/icons-material/Add';

function AddTodo({ setTodos }) {
    const inputRef = React.useRef();

    function handleAddTodo(event) {
        event.preventDefault();
        const text = event.target.elements.addTodo.value;
        const todo = {
            id: Math.random(),
            text,
            done: false
        };
        setTodos((prevTodos) => {
            return prevTodos.concat(todo);
        });
        inputRef.current.value = "";
    }

    return (
        <div className="form">
            <form onSubmit={handleAddTodo}>
                <input ref={inputRef} name="addTodo" placeholder="Add todo" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo;