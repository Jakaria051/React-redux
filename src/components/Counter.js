import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

export default function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncremnent = () => {
    dispatch(incrementCounter);
  }
  const handleDecrement = () => {
    dispatch(decrementCounter);
  }
  const handleReset = () => {
    dispatch(resetCounter);
  }
  return (
    <>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={handleIncremnent}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

    </>
  )
}
