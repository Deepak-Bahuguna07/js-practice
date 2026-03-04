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

const attechSearchTypeBtnEvent = (container, pokemons) => {
  const selectElm = document.querySelector('#types');

  selectElm.addEventListener("change", async (dets) => {
    dets.preventDefault();
    const type = dets.target.value;
    container.innerHTML = "";

    const filterdPokemons = Object.values(pokemons).filter((pokemon) =>
      pokemon.types.includes(type)
    );

    filterdPokemons.forEach((pokemon) => {
      const card = generateCard(pokemon);
      container.appendChild(card);
    })
  });
}

const main = async () => {
  const container = document.querySelector("main");
  const data = await fetch('/pokemons');
  const pokemons = await data.json();
  attechSearchBtnEvent(container, pokemons);
  attechSearchTypeBtnEvent(container, pokemons);
}

window.onload = main