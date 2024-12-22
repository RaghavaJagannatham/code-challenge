import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPokemons } from './redux/pokemonSlice';
import { List } from 'ui';

interface RootState {
  pokemon: {
    pokemons: string[];
  };
}

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const pokemonList = useSelector((state: RootState) => state.pokemon.pokemons);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        const names = data.results.map((pokemon: { name: string }) => pokemon.name);
        dispatch(setPokemons(names));
      } catch (err: any) {
        setError("Failed to load Pokémon list.");
        console.error("Error fetching Pokémon list:", err);
      }
    };
    fetchPokemonList();
  }, [dispatch]);

  return (
    <>
      <h1>Pokemon list:</h1>
      {error && <div>{error}</div>}
      <List pokemonsName={pokemonList} />
    </>
  );
};

export default App;
