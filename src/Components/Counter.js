import React, { useReducer } from "react";

function reducer(state, action) {
  //action.type에 따라서 다른작업을 수행한다.
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      //아무것도 아닌상황
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value : 0})
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button onClick={()=> dispatch({type : 'INCREMENT'})}>+</button>
      <button onClick={()=> dispatch({type : 'DECREMENT'})}>-</button>

    </div>
  )
}
export default Counter