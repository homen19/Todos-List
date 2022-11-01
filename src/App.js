import React from "react";
import TodoList from './components/TodoList';
import AddTodo from "./components/AddTodo";
import './App.css';

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Clean the room", done: false }
    
  ]);

  return (
    <>
      <div className="container">
        <h1>To do List</h1>
        
        <AddTodo setTodos={setTodos} />
        <TodoList setTodos={setTodos} todos={todos} />

       
      </div>
    </>
  );
}





