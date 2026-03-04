import { createApp } from "./src/app.js";
import { Eta } from "eta";

const main = () => {
  const pokemons = JSON.parse(Deno.readTextFileSync("./pokemons.json"));
  const app = createApp(pokemons);
  Deno.serve({ port: 8000 }, app.fetch);
};

main();
