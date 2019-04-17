// Tic Tac Toe: Advanced State
import React, {useState} from 'react'

const X = 'X'
const O = 'O'

// We're going to build tic-tac-toe! If you've gone through React's official
// tutorial, this was lifted from that (except that example still uses classes).
//
// You're going to need two bits of state:
// squares - The state of the board in a single-dimensional array:
// [
//   'X', 'O', 'X',
//   'X', 'O', 'O',
//   'X', 'X', 'O'
// ]
// (Naturally this will start out as an empty array.)
//
// xIsNext - Whether the "X" player is next. This will allow you to know who it
// was that clicked on a square and allow you to display who the next player is.

function Board() {
  // 🐨 Use React.useState for both the elements of state you need

  const [squares, placeMarker] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(squares);

  // This is the function your square click handler will call. `square` should
  // be an index. So if they click the center square, this will be `5`.

  function selectSquare(square) {

    // 🐨 first determine if there's already a winner, return early if there is.
    // 💰 there's a `calculateWinner` function already written for you at the
    //    bottom of this file. Fee free to use `calculateWinner(squares)`.

    if (winner !== null || squares[square] !== null) {
      return
    }

    const newSquares = [...squares]
    newSquares[square] = xIsNext ? X : O

    setXIsNext(!xIsNext)
    placeMarker(newSquares)
  }

  let statusFragment;
  if (winner) {
    statusFragment = `Winner is ${winner}`
  } else if (!winner && squares.every(square => !!square)) {
    statusFragment = "Scratch: Cat's game"
  } else {
    statusFragment = `Next Player: ${xIsNext ? X : O}`
  }

  const Square = ({index}) => (
    <button className="square" onClick={() => selectSquare(index)}>
      {squares[index]}
    </button>
  )

  return (
    <div>
      <div className="status">{statusFragment}</div>

      <div className="board-row">
        <Square index={0} />
        <Square index={1} />
        <Square index={2} />
      </div>

      <div className="board-row">
        <Square index={3} />
        <Square index={4} />
        <Square index={5} />
      </div>

      <div className="board-row">
        <Square index={6} />
        <Square index={7} />
        <Square index={8} />
      </div>
    </div>
  )
}

// 💯 See if you can figure out a nice way to avoid all the repetition in the square buttons

// 💯 Open /isolated/exercises-final/09-extra-0 and see that the extra version
//    supports keeping a history of the game and allows you to go backward and
//    forward in time. See if you can implement that! (Tip, in the final
//    example, we separate the state management from the board and that helps).

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:

http://ws.kcd.im/?ws=learn%20react%20hooks&e=04&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function Usage() {
  return <Game />
}
Usage.title = 'Tic Tac Toe: Advanced State'

export default Usage
