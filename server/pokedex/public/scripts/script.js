import { attechSearchBtnEvent, attechSearchTypeBtnEvent } from "./eventListeners.js";
import { serveHomePage } from "./serve.js";

const main = async () => {
  const container = document.querySelector("main");
  const data = await fetch('/pokemons');
  const pokemons = await data.json();

  serveHomePage(container, pokemons);
  attechSearchBtnEvent(container, pokemons);
  attechSearchTypeBtnEvent(container, pokemons);
}

window.onload = main