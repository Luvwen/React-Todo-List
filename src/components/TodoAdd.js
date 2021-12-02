import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length < 2) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    handleAddTodo(newTodo);
    reset();
  };

  return (
    <div className='container-todo'>
      <h4 className='container-todo__title'>Agregar items: </h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='description'
          placeholder='Aprender ...'
          autoComplete='off'
          className='container-todo__input'
          value={description}
          onChange={handleInputChange}
        />
        <button type='submit' className='container-todo__button'>
          Agregar
        </button>
      </form>
    </div>
  );
};
