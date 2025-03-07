import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, detail }) => {
  const [value, setvalue] = useState(detail.task);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, detail.id);
    setvalue('');
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={e => setvalue(e.target.value)}
      />
      <button type="submit" className="todo-btn">Update Task</button>
    </form>
  );
};

export default EditTodoForm;