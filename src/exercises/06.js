// Making HTTP requests with useEffect
import React, {useEffect, useState} from 'react'

/**
 * @return {string}
 */
function PokemonInfo({pokemonName = null }) {
  // 🐨 Have state for the pokemon (null), the error state (null), and the
  // loading state (false).
  // 🐨 Use the `fetchPokemon` function below to fetch a pokemon by its name:
  //   fetchPokemon('Pikachu').then(
  //     pokemon => { /* update all the state here */},
  //     error => {/* update all the state here */},
  //   )

  const [pokemon, setPokemonData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  // 🐨 use React.useEffect where the callback should be called whenever the
  // pokemon name changes.
  // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
  // 🐨 before calling `fetchPokemon`, make sure to update the loading state
  // 🐨 when the promise resolves, update the loading and pokemon state
  // 🐨 if the promise rejects, update the loading and error state

  useEffect(() => {
    setIsLoading(true)
    setHasError(false)

    fetchPokemon(pokemonName)
      .then(data => {
        setIsLoading(false)
        setPokemonData(data)
      })
      .catch(error => {
        setIsLoading(false)
        setHasError(true)
        console && console.error(error)
      })
  }, [pokemonName])

  if (isLoading) {
    return '...'
  } else if (hasError) {
    return 'oh no! an error has occurred!'
  }

  return (
    <pre>
      {JSON.stringify(pokemon || 'Unknown', null, 2)}
    </pre>
  )
}

// 💯 With the way that PokemonInfo is written, it's only rendered when there's
// a pokemon to fetch. Go ahead and rewrite it to allow people to render it
// before a pokemon is presented (and you can change the implementation) below
// to render <PokemonInfo /> without the ternary.

// 💯 See if you can refactor this to use the `useReducer` hook. This'll be a
// tough one if you've never used `useReducer` before!
// 📜 see 06.md for more information

/*
🦉 Elaboration & Feedback
After the instruction, copy the URL below into your browser and fill out the form:

http://ws.kcd.im/?ws=learn%20react%20hooks&e=06&em=
*/

////////////////////////////////////////////////////////////////////
//                                                                //
//                 Don't make changes below here.                 //
// But do look at it to see how your code is intended to be used. //
//                                                                //
////////////////////////////////////////////////////////////////////

function fetchPokemon(name) {
  const pokemonQuery = `
    query ($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `

  return window
    .fetch('https://graphql-pokemon.now.sh', {
      // learn more about this API here: https://graphql-pokemon.now.sh/
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        query: pokemonQuery,
        variables: {name},
      }),
    })
    .then(r => r.json())
    .then(response => response.data.pokemon)
}

class Usage extends React.Component {
  state = {pokemonName: null}
  inputRef = React.createRef()
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      pokemonName: this.inputRef.current.value,
    })
  }
  render() {
    const {pokemonName} = this.state
    return (
      <div>

        <p>For a list of possibilities, see this API guide:
          <a href="https://pokeapi.co/" target="_blank">https://pokeapi.co/</a>
        </p>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="pokemonName-input">Pokemon Name (ie Pikachu)</label>
          <input id="pokemonName-input" ref={this.inputRef} />
          <button type="submit">Submit</button>
        </form>

        <div data-testid="pokemon-display">
          {/* 💯 I, Hannah Hundred, give you permission to edit this for the extra credit */}
          {pokemonName ? <PokemonInfo pokemonName={pokemonName} /> : null}
        </div>

      </div>
    )
  }
}
Usage.title = 'Making HTTP requests with useEffect'

export default Usage

/* eslint no-unused-vars:0 */
