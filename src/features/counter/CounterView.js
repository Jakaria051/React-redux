import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement, reset, incrementByAmount } from './counterSlice';

export default function CounterView() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Count : {count}</h2>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
        <button onClick={()=>{dispatch(incrementByAmount(5))}}>IncrementBy 5</button>

    </div>
  )
}
