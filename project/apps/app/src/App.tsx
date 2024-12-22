import { useEffect, useState } from 'react'
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const [pokemonList, setPokemonList] = useState<string[]>([])
  const [error, setError] = useState<any>(null)
  useEffect(() => {
    const fetchPokemonList = async () => {
      let response = await fetch(api);
      try{
        let data = await response.json()
        let names = data.results.map((pokemon: {name: string}) => pokemon.name)
        console.log(names)
        setPokemonList(names)
      }catch(err: any){
        setError(err)
        console.log("501Error", err)
      }
    }
    fetchPokemonList()

  }, [])
  return (
  <>
    <h1>Pokemon list:</h1>
    <List pokemons = {pokemonList}/>
  </>
  )
}

export default App
