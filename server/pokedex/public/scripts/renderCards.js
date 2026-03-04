import { generateCard } from "./generateCard.js";

export const renderCards = (container, pokemons) => {
  pokemons.forEach((pokemon) => {
    const card = generateCard(pokemon);
    container.appendChild(card);
  });
}