import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <h1>Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button onClick={handleClick} className='btn btn-primary ms-2'>
        Show/Hide
      </button>
    </div>
  );
};
