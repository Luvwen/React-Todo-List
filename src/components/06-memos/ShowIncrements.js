import React from 'react';

export const ShowIncrements = React.memo(({ increment }) => {
  console.log('me volvi a generar');
  return (
    <button
      onClick={() => {
        increment(5);
      }}
      className='btn btn-primary'
    >
      Incrementar
    </button>
  );
});
