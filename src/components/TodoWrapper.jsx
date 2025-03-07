import React, { useState } from 'react';
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoText) => {
    setTodos([...todos, { id: uuidv4(), task: todoText, completed: false, isEditing: false }]);
    console.log(todos);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todoItem, index) => (
        todoItem.isEditing ? (
          <EditTodoForm key={index} editTodo={editTask} detail={todoItem} />
        )
          : (
            <Todo
              detail={todoItem}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo} />
          )
      ))}
    </div>
  );
};

export default TodoWrapper;