
export const List = ({pokemons} : any) => {
  return (
    <div>
      <h3>This is the List</h3>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <span>{pokemon}</span>
        </div>
      ))}
    </div>
  )
}