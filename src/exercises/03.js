// Counter: useEffect
import React, {useEffect} from 'react'

// In this exercise, we're going to enhance our counter component to get it's
// initial state value from localStorage (if available) and keep localStorage
// updated as the count is incremented.

function Counter({step = 1, initialCount = 0}) {

  // 🐨 initialize the state to the value from localStorage
  // 💰 Number(window.localStorage.getItem('count') || initialCount)

  const initialState = Number(window.localStorage.getItem('count') || initialCount);

  const [count, setCount] = React.useState(initialState)
  const increment = () => setCount(c => c + step)

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `count` in localStorage.

  useEffect((key, value) => {
    window.localStorage.setItem('count', count);
  })

  return <button onClick={increment}>{count}</button>
}

// 💯 Make the `React.useState` call use lazy initialization to avoid a
// performance bottleneck of reading into localStorage on every render.
// 📜 see 03.md for more info

// 💯 Add a dependencies array for `React.useEffect` to avoid the callback
// being called too frequently.
// 📜 see 03.md for more info

// 💯 Create a custom hook called `useLocalStorageCounter` for reusability of
// all this logic.

// 💯 Create a custom hook called `useLocalStorageState` that's a much more
// generic persisted state hook which your `useLocalStorageCounter` hook could
// use. `useLocalStorageState` could then be used to store just about any state
// in localStorage and keep it in sync.

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:

http://ws.kcd.im/?ws=learn%20react%20hooks&e=03&em=
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
