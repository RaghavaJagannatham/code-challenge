import { useEffect } from 'react'
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  useEffect(() => {
    const fetchPokemonList = async () => {
      let response = await fetch(api);
      let data = await response.json()
      let names = data.results.map((pokemon: {name: string}) => pokemon.name)
      console.log(names)
    }
    fetchPokemonList()

  }, [])
  return (
  <>
    <h1>Pokemon list:</h1>
    <List />
  </>
  )
}

export default App
