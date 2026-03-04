import { generateCard } from "./generateCard.js";
import { serveHomePage, serveSpecificTypePokemons } from "./serve.js";

export const attechSearchBtnEvent = (container, pokemons) => {
  const form = document.querySelector("#search-pokemon-name");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const { name } = Object.fromEntries(fd.entries());
    const pokemon = pokemons[name];
    container.innerHTML = "";

    const card = generateCard(pokemon);
    container.appendChild(card);
    event.target.name.value = "";
  });
}

export const attechSearchTypeBtnEvent = (container, pokemons) => {
  const selectElm = document.querySelector('#types');

  selectElm.addEventListener("change", async (event) => {
    event.preventDefault();
    const type = event.target.value;
    container.innerHTML = "";
    selectElm.value = "select";

    if (type === 'all') return serveHomePage(container, pokemons);

    serveSpecificTypePokemons(type, container, pokemons);
  });
}