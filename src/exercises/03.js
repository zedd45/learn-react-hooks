// Counter: useEffect
import React, {useState, useEffect} from 'react'

// In this exercise, we're going to enhance our counter component to get it's
// initial state value from localStorage (if available) and keep localStorage
// updated as the count is incremented.

// actually using session storage so this resets when you close the browser / tab
const useSessionStorageCounter = ({step = 1, initialCount = 0}) => {

  // by using a callback as the argument to useState, it should only run once
  const [count, setCount] = useState(() => Number(window.sessionStorage.getItem('count') || initialCount));
  const increment = () => setCount(c => c + step)

  // by adding the dependencies array (2nd arg) this will only fire if count is updated

  useEffect(() => {
    window.sessionStorage.setItem('count', count);
  }, [count]);

  return [count, increment];
}

function Counter({step = 1, initialCount = 0}) {
  const [count, increment] = useSessionStorageCounter({step, initialCount})
  return <button onClick={increment}>{count}</button>
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:

http://ws.kcd.im/?ws=learn%20react%20hooks&e=03&em=

1. using a function as the initialState for React.useState will allow it to only run once (sort of like componentDidMount back in the day...)
2. you can supply an array of dependencies to useEffect as it's second argument, and it will only call the effect if those values are updated

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
Usage.title = 'Counter: useEffect'

export default Usage
