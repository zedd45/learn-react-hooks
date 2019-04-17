// Counter: hooks and simple state
import React, {useState} from 'react'

// 🐨 Below, fill out the Counter component so that it manages the state of how
// many times the the button is clicked. The text of the button should be the
// number of times the button has been clicked.

function Counter({step = 1, initalCount = 2}) {

  // 🐨 create an increment function that calls the state updater you get from
  //    React.useState to increment the count
  // 🐨 render the count you get from React.useState inside the button and use
  //    your increment function as the onClick handler.

  const [count, setCount] = useState(initalCount);
  const increment = () => setCount(currentCount => {
    return currentCount + step;
  });

  return <button onClick={increment}>{count}</button>;
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:

http://ws.kcd.im/?ws=learn%20react%20hooks&e=01&em=

1. setting initial state happens in the `useState` function
   From the React Docs:
   > What do we pass to useState as an argument? The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable. (If we wanted to store two different values in state, we would call useState() twice.)
2. there is a function handler / callback for useState's second parameter, the "updater"
   >

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
Usage.title = 'Counter: hooks and simple state'

export default Usage
