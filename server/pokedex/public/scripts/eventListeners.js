import { generateCard } from "./generateCard.js";
import { serveHomePage } from "./serve.js";
import { renderCards } from "./renderCards.js";

const serveSpecificTypePokemons = (type, container, pokemons) => {
  const filterdPokemons = Object.values(pokemons).filter((pokemon) =>
    pokemon.types.includes(type)
  );

  renderCards(container, filterdPokemons);
}

export const attechSearchBtnEvent = (container, pokemons) => {
  const form = document.querySelector("#search-pokemon-name");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const fd = new FormData(form);
    const { name } = Object.fromEntries(fd.entries());
    const pokemon = pokemons[name] ? pokemons[name] : pokemons["ditto"];
    container.innerHTML = "";

    const card = generateCard(pokemon);
    container.appendChild(card);
    event.target.name.value = "";
  });
}

export const attechSearchTypeBtnEvent = (container, pokemons) => {
  const selectElm = document.querySelector('#types');

  selectElm.addEventListener("change", async (event) => {
    const type = event.target.value;
    container.innerHTML = "";
    selectElm.value = "select";

    if (type === 'all') return serveHomePage(container, pokemons);

    serveSpecificTypePokemons(type, container, pokemons);
  });
}