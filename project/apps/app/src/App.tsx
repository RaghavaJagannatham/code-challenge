import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemons } from './redux/pokemonSlice'
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const pokemonList = useSelector((state: any) => state.pokemon.pokemons);
  const [error, setError] = useState<any>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemonList = async () => {
      let response = await fetch(api);
      try{
        let data = await response.json()
        let names = data.results.map((pokemon: {name: string}) => pokemon.name)
        console.log(names)
        dispatch(setPokemons(names));
      }catch(err: any){
        setError(err)
        console.log("501Error", err)
      }
    }
    fetchPokemonList()

  }, [dispatch])
  return (
  <>
    <h1>Pokemon list:</h1>
    <List pokemons = {pokemonList}/>
  </>
  )
}

export default App
