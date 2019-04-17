// Interact with the DOM with useEffect
import React, {useEffect, useRef} from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  const tiltRef = useRef()

  useEffect(() => {
    const tiltNode = tiltRef.current

    VanillaTilt.init(tiltNode, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    })

    // return a cleanup function to useEffect, and it will run this when the component "unmounts" essentially
    // since this node never changes with input, we can tell React to only run this "onmount" by supplying an empty dependencies array
    // if we start involving state, we can simply update this to the state variable
    return function cleanup () {
      tiltNode.vanillaTilt.destroy()
    }
  }, [])


  return (
    <div className="tilt-root" ref={tiltRef}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

// 💯 Make a custom hook that I can call like this: `useTilt(ref, options)`

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:

1. You can actually simulate `componentDidUnmount` with an empty `useEffect` that returns the function you want to run, and supply an empty array, so it only runs on unmount, vs every render cycle

http://ws.kcd.im/?ws=learn%20react%20hooks&e=05&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function Usage() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
Usage.title = 'Interact with the DOM with useEffect'

export default Usage
