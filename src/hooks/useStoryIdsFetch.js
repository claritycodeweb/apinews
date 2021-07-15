import { useEffect, useReducer } from 'react';
import { getStoryIds } from '../services/hacker-news-api';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, result: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, result: action.payload.result };
    default:
      return state;
  }
}

const useStoryIdsFetch = () => {
  const [state, dispatch] = useReducer(reducer, { result: [], loading: true });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    getStoryIds()
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { result: res } });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  }, []);
  return state;
};

export default useStoryIdsFetch;
