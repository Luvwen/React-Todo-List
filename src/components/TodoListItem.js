import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className='container-list__item'>
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => {
          handleToggle(todo.id);
        }}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        onClick={() => handleDelete(todo.id)}
        className='container-list__button'
      >
        Borrar
      </button>
    </li>
  );
};
