import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  //Declarar el useRef con valor true para mostrar el setState
  const isMounted = useRef(true);
  //Se usa un useEffect para limpiar el isMounted y desmontarlo en el caso que se lo necesite
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Declarar el estado inicial del state
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });
  //Usar un useEffect para recargar el componente solamente cuando cambie la URL del fetch
  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //Se utiliza un condicional para evaluar si el setState esta montado o no
        if (isMounted.current) {
          setState({ error: null, loading: false, data });
        }
      });
  }, [url]);

  //Devolver el state
  return state;
};
