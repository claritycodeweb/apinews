import { useEffect, useRef, useState } from 'react';

const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, isLoading: true });

  useEffect(
    () => () => {
      isCurrent.current = false;
    },
    []
  );

  useEffect(() => {
    setState((currentState) => ({ data: currentState.data, isLoading: true }));
    fetch(url)
      .then((resp) => resp.text())
      .then((y) => {
        if (isCurrent.current) {
          setState({ data: y, isLoading: false });
        }
      });
  }, [url, setState]);

  return state;
};

export default useFetch;
