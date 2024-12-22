
export const List = ({pokemons} : any) => {
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <span className="pokemon-item">{pokemon}</span>
        </div>
      ))}
    </div>
  )
}