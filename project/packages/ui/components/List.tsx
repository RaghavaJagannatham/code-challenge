import { useDispatch } from 'react-redux';
import { removePokemon } from '../../../apps/app/src/redux/pokemonSlice';

interface ListProps {
  pokemonsName: string[];
}

export const List: React.FC<ListProps> = ({ pokemonsName }) => {
  const dispatch = useDispatch();

  const handleRemovePokemon = (pokemon: string) => {
    dispatch(removePokemon(pokemon));
  };

  return (
    <div className='pokemon-grid'>
      {pokemonsName.map((pokemon, index) => (
        <div key={index} className="pokemon-item">
          <span className="pokemon-name">{pokemon}</span>
          <button onClick={() => handleRemovePokemon(pokemon)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
