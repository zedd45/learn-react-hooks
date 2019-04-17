// Interact with the DOM with useEffect
// http://localhost:3000/isolated/exercises-final/05-extra.0
import React from 'react'
import VanillaTilt from 'vanilla-tilt'

function useTilt(ref, options) {
  React.useEffect(() => {
    const {current: tiltNode} = ref
    VanillaTilt.init(tiltNode, options)
    return () => tiltNode.vanillaTilt.destroy()
  }, [options, ref])
}

function Tilt({children}) {
  const tiltRef = React.useRef()

  // this is utilizing the fact that React.setState will only update when it's called, and it's not called again here, so we just use the initial state
  useTilt(
    tiltRef,
    React.useState(() => ({
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    }))[0],
  )

  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function Usage() {
  return (
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
  )
}
Usage.title = 'Interact with the DOM with useEffect'

export default Usage
