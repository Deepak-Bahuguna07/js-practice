import { renderCards } from "./renderCards.js";

export const serveHomePage = (container, pokemons) =>
  renderCards(container, Object.values(pokemons));

export const serveSpecificTypePokemons = (type, container, pokemons) => {
  const filterdPokemons = Object.values(pokemons).filter((pokemon) =>
    pokemon.types.includes(type)
  );

  renderCards(container, filterdPokemons);
}
