import { renderCards } from "./renderCards.js";

export const serveHomePage = (container, pokemons) =>
  renderCards(container, Object.values(pokemons));
