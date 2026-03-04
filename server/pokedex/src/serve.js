export const serveAllPokemos = (context) => {
  const pokemons = context.get("pokemons");
  return context.json(pokemons);
}
