// Counter: custom hooks
import React, {useState} from 'react'

// In this exercise, you'll be refactoring our Counter component to use a custom
// hook that we could use anywhere in our codebase.
//
// 🐨 Make a custom hook called useCounter that accepts the step and
// initialCount and returns the count and increment functions
//
// 🐨 Use your custom useCounter hook in the Counter.

function useCounter ({step = 1, initialCount = 0}) {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(currentCount => currentCount + step);
  return [count, increment];
}

function Counter({step = 1, initialCount = 0}) {
  const [count, increment] = useCounter({step, initialCount});
  return <button onClick={increment}>{count}</button>
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:

http://ws.kcd.im/?ws=learn%20react%20hooks&e=02&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: custom hooks'

export default Usage
