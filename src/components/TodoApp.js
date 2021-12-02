import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
const init = () => {
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: 'Aprender React',
  //     done: false,
  //   },
  // ];
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const action = {
      type: 'delete',
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: 'toggle',
      payload: todoId,
    });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1 className='title'>TodoApp: Items agregados: {todos.length}</h1>
      <div className=''>
        <TodoAdd handleAddTodo={handleAddTodo} />
      </div>

      <div className='container-todo'>
        <div className=''>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};
