import DeleteTodo from './DeleteTodo';


function TodoList({ todos, setTodos }) {
    function handleToggleTodo(todo) {
      const updatedTodos = todos.map((t) =>
        t.id === todo.id
          ? {
              ...t,
              done: !t.done
            }
          : t
      );
      setTodos(updatedTodos);
    }
  
    if (!todos.length) {
      return <p style={{textAlign:'center'}}>No todos left!</p>;
    }
  
    return (
      <div className='list'>
        <ol>
        {todos.map((todo) => (
          <li
            onDoubleClick={() => handleToggleTodo(todo)}
            style={{
              textDecoration: todo.done ? "line-through" : ""
            }}
            key={todo.id}
          >
            {todo.text}
            <DeleteTodo todo={todo} setTodos={setTodos} />
          </li>
        ))}
      </ol>
      </div>
    );
  }
  export default TodoList;