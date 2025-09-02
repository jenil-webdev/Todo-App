import React, { useEffect, useState } from "react";
import todoApi from "../api/todoApi";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await todoApi.getTodos();
      setTodos(data);
    })();
  }, []);

  const handleDelete = async (id) => {
    await todoApi.deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {todo.title}
          <button onClick={() => handleDelete(todo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;