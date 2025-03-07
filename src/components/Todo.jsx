import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ detail, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p onClick={() => toggleComplete(detail.id)} className={`${detail.completed ? 'completed' : ''}`}>{detail.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}
          onClick={() => editTodo(detail.id)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => {
          deleteTodo(detail.id);
        }} />
      </div>
    </div>
  );
};

export default Todo;