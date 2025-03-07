import React, { useEffect, useRef, useState } from 'react';

const EditTodoForm = ({ editTodo, detail }) => {
  const [value, setvalue] = useState(detail.task);
  const editInputRef = useRef();

  useEffect(() => {
    editInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, detail.id);
    setvalue('');
  };



  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-todo-input"
        ref={editInputRef}
        value={value}
        placeholder="What do you want to update?"
        onChange={e => setvalue(e.target.value)}
      />
      <button type="submit" className="todo-btn edit-todo-btn" >Update Task</button>
    </form>
  );
};

export default EditTodoForm;