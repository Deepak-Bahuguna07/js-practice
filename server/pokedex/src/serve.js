export const servePage = (context) => {
  const pokemons = context.get("pokemons");
  const page = context.get("getPage")(pokemons);

  return context.html(page);
};

const getFormData = async (context, data) => {
  const fd = await context.req.formData();
  return fd.get(data);
};

export const serveType = async (context) => {
  const type = await getFormData(context, "type");
  const pokemons = context.get("pokemons");
  const page = context.get("getPage")(pokemons, type);

  return context.html(page);
};

export const servePokemon = async (context) => {
  const { name } = await context.req.query();
  const pokemon = context.get("pokemons")[name];

  return context.json({ pokemon });
};
