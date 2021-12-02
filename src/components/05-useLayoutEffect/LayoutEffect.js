import React, { useRef, useState } from 'react';
import { useLayoutEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import './layout.css';

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } =
    useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
  `);

  //Extraer la información de Data usando la doble negación para devolver true si existe data.
  const { quote } = !!data && data[0];

  const pTag = useRef();

  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-end'>
        <p ref={pTag} className='mb-10'>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={increment} className='btn btn-primary'>
        Siguiente frase
      </button>
    </>
  );
};
