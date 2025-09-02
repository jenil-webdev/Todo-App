import React, { useState } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add new todo
  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  // Delete todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Toggle complete
  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a todo"
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
