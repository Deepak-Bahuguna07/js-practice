import { generateCard } from "./generateCard.js";

const attechSearchBtnEvent = (container, pokemons) => {
  const form = document.querySelector("#search-pokemon-name");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const fd = new FormData(form);
    const { name } = Object.fromEntries(fd.entries());
    const pokemon = pokemons[name];
    container.innerHTML = "";

    const card = generateCard(pokemon);
    container.appendChild(card);
  });
}

const serveHomePage = (container, pokemons) => {
  Object.values(pokemons).forEach((pokemon) => {
    const card = generateCard(pokemon);
    container.appendChild(card);
  });
}

const serveSpecificTypePokemons = (type, container, pokemons) => {
  const filterdPokemons = Object.values(pokemons).filter((pokemon) =>
    pokemon.types.includes(type)
  );

  filterdPokemons.forEach((pokemon) => {
    const card = generateCard(pokemon);
    container.appendChild(card);
  });
}

const attechSearchTypeBtnEvent = (container, pokemons) => {
  const selectElm = document.querySelector('#types');

  selectElm.addEventListener("change", async (dets) => {
    dets.preventDefault();
    const type = dets.target.value;
    container.innerHTML = "";
    if (type === 'all') {
      selectElm.value = "select";
      return serveHomePage(container, pokemons);
    }

    serveSpecificTypePokemons(type, container, pokemons);
    selectElm.value = "select";
  });
}

const main = async () => {
  const container = document.querySelector("main");
  const data = await fetch('/pokemons');
  const pokemons = await data.json();

  serveHomePage(container, pokemons);
  attechSearchBtnEvent(container, pokemons);
  attechSearchTypeBtnEvent(container, pokemons);
}

window.onload = main