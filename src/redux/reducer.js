import { loadingState } from "./action";
import { loading, updateCounter } from "./actiontype";

const url = "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/8817970562.json";

export const putCount = (state) => (next) =>async(action)=>{
  console.log("state", state, "\n next", next, "/action", action);
  if (action.type == loading)
    return next(action)

  await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(action.payload)
  });
  state.dispatch(loadingState({loading:false}))
  return next(action)
}

const initstate = {
  counter: {
    loading:false
  }
}

export const reducer = (state = initstate, { type, payload }) => {
    switch (type) {  
      case updateCounter: {
        return { ...state, counter:{...state.counter, ...payload} }
    }
      
      case loading: {
        return {...state,counter:{...state.counter, ...payload} }
    }
    default:
      return state
    }
  }
  