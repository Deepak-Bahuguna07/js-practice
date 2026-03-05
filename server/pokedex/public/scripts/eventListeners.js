import { generateCard } from "./generateCard.js";
import { serveHomePage } from "./serve.js";
import { renderCards } from "./renderCards.js";

const serveSpecificTypePokemons = (type, container, pokemons) => {
  const filterdPokemons = Object.values(pokemons).filter((pokemon) =>
    pokemon.types.includes(type)
  );

  renderCards(container, filterdPokemons);
}

const showWarning = (message) => {
  let warning = document.createElement('div');
  warning.textContent = message;
  warning.style.position = 'absolute';
  warning.style.top = '0.5em';
  warning.style.left = "0.5em";
  warning.style.backgroundColor = 'red';
  warning.style.color = 'white';
  warning.style.padding = '1em';
  warning.style.borderRadius = '4px';
  warning.style.zIndex = '1000';
  warning.style.fontSize = '1em';
  warning.style.zIndex = '1';
  warning.style.pointerEvents = 'none';

  document.querySelector('header').appendChild(warning);
  console.log("hey")
  setTimeout(() => {
    warning.remove();
  }, 1000);
}

export const attechSearchBtnEvent = (container, pokemons) => {
  const form = document.querySelector("#search-pokemon-name");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const fd = new FormData(form);
    const { name } = Object.fromEntries(fd.entries());
    const pokemon = pokemons[name];
    //  ? pokemons[name] : pokemons["ditto"];
    if (pokemon === undefined) {
      return showWarning('Pokemon Not Found!');
    }

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