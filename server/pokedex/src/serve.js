export const servePage = (context) => {
  const pokemons = context.get("pokemons");
  const page = context.get("getPage")(pokemons);

  return context.html(page);
};

export const serveType = async (context) => {
  console.log("servetype", context);
  const { type } = await context.req.query();
  const pokemons = context.get("pokemons");
  const filteredPokemons = Object.entries(pokemons).filter((pokemon) =>
    type === "all" || pokemon[1].types.includes(type)
  );
  console.log(filteredPokemons);

  return context.json({ ...filteredPokemons });
};

export const servePokemon = async (context) => {
  const { name } = await context.req.query();
  const pokemon = context.get("pokemons")[name];

  return context.json({ pokemon });
};

export const serveAllPokemos = (context) => {
  const pokemons = context.get("pokemons");
  return context.json(pokemons);
}
